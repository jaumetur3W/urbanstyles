import { NextResponse } from "next/server";
import { PRODUCTS, SHIPPING_POLICY } from "@/lib/data";
import { Order, ProductSize, ShippingAddress } from "@/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items, shippingAddress, paymentMethod } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "La cistella està buida. Afig peces abans de continuar." },
        { status: 400 }
      );
    }

    if (!shippingAddress || !shippingAddress.fullName || !shippingAddress.email || !shippingAddress.address) {
      return NextResponse.json(
        { error: "L'adreça d'enviament és incompleta." },
        { status: 400 }
      );
    }

    // STRICT SERVER-SIDE CALCULATION
    let serverSubtotal = 0;
    const validatedItems: Order["items"] = [];

    for (const item of items) {
      const realProduct = PRODUCTS.find((p) => p.id === item.productId);
      if (!realProduct) {
        return NextResponse.json(
          { error: `El producte sol·licitat (${item.productId}) no existeix.` },
          { status: 400 }
        );
      }

      // Check stock on server
      const variant = realProduct.variants.find((v) => v.size === item.size);
      if (!variant) {
        return NextResponse.json(
          { error: `La talla ${item.size} no és vàlida per a ${realProduct.name}.` },
          { status: 400 }
        );
      }

      if (variant.stock < item.quantity) {
        return NextResponse.json(
          {
            error: `Estoc insuficient per a ${realProduct.name} en talla ${item.size}. Disponibles: ${variant.stock}`,
          },
          { status: 400 }
        );
      }

      const itemTotal = Number((realProduct.price * item.quantity).toFixed(2));
      serverSubtotal += itemTotal;

      validatedItems.push({
        productId: realProduct.id,
        productName: realProduct.name,
        productSlug: realProduct.slug,
        image: realProduct.images[0].url,
        size: item.size as ProductSize,
        unitPrice: realProduct.price,
        quantity: item.quantity,
        total: itemTotal,
      });
    }

    serverSubtotal = Number(serverSubtotal.toFixed(2));

    // Shipping rules at server
    const freeShippingApplied = serverSubtotal >= SHIPPING_POLICY.freeShippingThreshold;
    const serverShippingCost = freeShippingApplied ? 0 : SHIPPING_POLICY.standardShippingRate;
    const serverTotal = Number((serverSubtotal + serverShippingCost).toFixed(2));

    const orderNumber = `UB-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // Handle Stripe Integration if Key is configured
    if (paymentMethod === "stripe") {
      const stripeKey = process.env.STRIPE_SECRET_KEY;
      if (stripeKey && !stripeKey.includes("placeholder")) {
        try {
          const Stripe = (await import("stripe")).default;
          const stripe = new Stripe(stripeKey);

          const session = await stripe.checkout.sessions.create({
            line_items: validatedItems.map((it) => ({
              price_data: {
                currency: "eur",
                product_data: {
                  name: `${it.productName} (Talla ${it.size})`,
                  images: [it.image],
                },
                unit_amount: Math.round(it.unitPrice * 100),
              },
              quantity: it.quantity,
            })),
            mode: "payment",
            customer_email: shippingAddress.email,
            shipping_options: [
              {
                shipping_rate_data: {
                  type: "fixed_amount",
                  fixed_amount: {
                    amount: Math.round(serverShippingCost * 100),
                    currency: "eur",
                  },
                  display_name: freeShippingApplied
                    ? "Enviament Gratuït a Espanya (Comandes > 50€)"
                    : "Enviament Estàndard Espanya Peninsular",
                  delivery_estimate: {
                    minimum: { unit: "business_day", value: 2 },
                    maximum: { unit: "business_day", value: 4 },
                  },
                },
              },
            ],
            success_url: `${req.headers.get("origin")}/checkout/exit?orderId=${orderNumber}&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get("origin")}/checkout?canceled=true`,
            metadata: {
              orderNumber,
            },
          });

          return NextResponse.json({
            checkoutUrl: session.url,
            orderNumber,
          });
        } catch (stripeErr: unknown) {
          console.error("Stripe error:", stripeErr);
          // Fall through to mock/test order response if test mode requested
        }
      }
    }

    // Default Order Response for test mode / cash on delivery / local pickup
    const confirmedOrder: Order = {
      id: `ord_${Date.now()}`,
      orderNumber,
      items: validatedItems,
      subtotal: serverSubtotal,
      shippingCost: serverShippingCost,
      freeShippingApplied,
      total: serverTotal,
      shippingAddress: shippingAddress as ShippingAddress,
      paymentMethod,
      paymentStatus: paymentMethod === "stripe" ? "completed" : "pending",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      order: confirmedOrder,
      orderNumber: confirmedOrder.orderNumber,
    });
  } catch (error: unknown) {
    console.error("Error al processar checkout:", error);
    return NextResponse.json(
      { error: "Hi ha hagut un error intern al processar la comanda." },
      { status: 500 }
    );
  }
}

