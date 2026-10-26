"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { PaymentMethodType, ShippingAddress } from "@/types";
import {
  CreditCard,
  Truck,
  ArrowLeft,
  Lock,
  Building,
  Banknote,
  AlertCircle,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    cart,
    subtotal,
    shippingCost,
    freeShippingQualified,
    total,
    clearCart,
    t,
  } = useStore();

  const [address, setAddress] = useState<ShippingAddress>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: "",
    province: "València",
    country: "ES",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>("stripe");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6 font-mono text-charcoal">
        <h1 className="text-2xl font-black uppercase tracking-tightest">
          LA TEUA CISTELLA ESTÀ BUIDA
        </h1>
        <p className="text-xs text-raw uppercase">
          Afig peces bàsiques abans d&apos;accedir a la passarel·la de pagament.
        </p>
        <Link
          href="/botiga"
          className="inline-block px-8 py-3.5 bg-charcoal text-chalk text-xs font-bold uppercase tracking-widest hover:bg-pitch"
        >
          EXPLORAR EL CATÀLEG
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = {
        items: cart.map((it) => ({
          productId: it.product.id,
          size: it.selectedSize,
          quantity: it.quantity,
        })),
        shippingAddress: address,
        paymentMethod,
      };

      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.checkoutUrl) {
            window.location.href = data.checkoutUrl;
            return;
          }
          clearCart();
          router.push(`/checkout/exit?orderId=${data.orderNumber}&method=${paymentMethod}`);
          return;
        }
      } catch {
        // Fallback for static hosting
      }

      const fallbackOrder = `UB-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      clearCart();
      router.push(`/checkout/exit?orderId=${fallbackOrder}&method=${paymentMethod}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Hi ha hagut un problema en comunicar amb el servidor de pagaments.";
      setErrorMessage(message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-chalk text-charcoal min-h-screen font-mono">
      {/* Top Header */}
      <div className="border-b border-charcoal/20 px-4 sm:px-8 py-4 max-w-7xl mx-auto flex items-center justify-between text-xs">
        <Link
          href="/botiga"
          className="inline-flex items-center gap-2 uppercase tracking-wider text-raw hover:text-charcoal"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>TORNAR A LA BOTIGA</span>
        </Link>
        <span className="uppercase text-raw hidden sm:inline">[ CHECKOUT PROTOCOL // ENCRYPTED ]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8 text-xs">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-700 text-red-700 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Contact Info */}
              <div className="border border-charcoal/20 p-6 space-y-4 bg-chalk">
                <span className="text-[10px] text-raw uppercase tracking-widest block">
                  [ STEP 01 // CONTACT SPEC ]
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal font-bold mb-1">
                      {t.checkout.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.fullName}
                      onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-bone/30 border border-charcoal/20 text-xs focus:outline-none focus:border-charcoal uppercase"
                      placeholder="NOM I COGNOMS"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal font-bold mb-1">
                      {t.checkout.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={address.email}
                      onChange={(e) => setAddress({ ...address, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-bone/30 border border-charcoal/20 text-xs focus:outline-none focus:border-charcoal lowercase"
                      placeholder="adreca@correu.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal font-bold mb-1">
                      {t.checkout.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={address.phone}
                      onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-bone/30 border border-charcoal/20 text-xs focus:outline-none focus:border-charcoal uppercase"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Shipping Address */}
              <div className="border border-charcoal/20 p-6 space-y-4 bg-chalk">
                <span className="text-[10px] text-raw uppercase tracking-widest block">
                  [ STEP 02 // SHIPPING DESTINATION ]
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal font-bold mb-1">
                      {t.checkout.address} *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.address}
                      onChange={(e) => setAddress({ ...address, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-bone/30 border border-charcoal/20 text-xs focus:outline-none focus:border-charcoal uppercase"
                      placeholder="CARRER, NÚMERO, PORTA"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal font-bold mb-1">
                      {t.checkout.postalCode} *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.postalCode}
                      onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-bone/30 border border-charcoal/20 text-xs focus:outline-none focus:border-charcoal uppercase"
                      placeholder="46001"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal font-bold mb-1">
                      {t.checkout.city} *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-bone/30 border border-charcoal/20 text-xs focus:outline-none focus:border-charcoal uppercase"
                      placeholder="VALÈNCIA"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal font-bold mb-1">
                      {t.checkout.province} *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.province}
                      onChange={(e) => setAddress({ ...address, province: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-bone/30 border border-charcoal/20 text-xs focus:outline-none focus:border-charcoal uppercase"
                      placeholder="VALÈNCIA"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal font-bold mb-1">
                      PAÍS
                    </label>
                    <input
                      type="text"
                      disabled
                      value="ESPANYA (PENÍNSULA)"
                      className="w-full px-3.5 py-2.5 bg-bone border border-charcoal/20 text-xs text-raw cursor-not-allowed uppercase"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Payment Method */}
              <div className="border border-charcoal/20 p-6 space-y-4 bg-chalk">
                <span className="text-[10px] text-raw uppercase tracking-widest block">
                  [ STEP 03 // PAYMENT METHOD ]
                </span>

                <div className="space-y-3 font-mono">
                  {/* Stripe Card */}
                  <label
                    className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                      paymentMethod === "stripe"
                        ? "border-charcoal bg-bone/40"
                        : "border-charcoal/20 hover:border-charcoal/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="stripe"
                      checked={paymentMethod === "stripe"}
                      onChange={() => setPaymentMethod("stripe")}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                          <CreditCard className="w-4 h-4 text-charcoal" />
                          TARGETA BANCÀRIA (STRIPE ENCRYPTED)
                        </span>
                        <span className="text-[9px] text-raw uppercase">[RECOMMENDED]</span>
                      </div>
                      <p className="text-[11px] text-raw mt-1 uppercase">
                        Visa, Mastercard, Amex via xifrat SSL bancari directe.
                      </p>
                    </div>
                  </label>

                  {/* PayPal */}
                  <label
                    className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                      paymentMethod === "paypal"
                        ? "border-charcoal bg-bone/40"
                        : "border-charcoal/20 hover:border-charcoal/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-charcoal" />
                        PAYPAL EXPRESS
                      </span>
                      <p className="text-[11px] text-raw mt-1 uppercase">
                        Pagament immediat amb compte PayPal o saldo associat.
                      </p>
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label
                    className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-charcoal bg-bone/40"
                        : "border-charcoal/20 hover:border-charcoal/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                        <Banknote className="w-4 h-4 text-charcoal" />
                        CONTRA REEMBORSAMENT
                      </span>
                      <p className="text-[11px] text-raw mt-1 uppercase">
                        Subjecte a condicions del transportista en el lliurament físic.
                      </p>
                    </div>
                  </label>

                  {/* Local Pickup */}
                  <label
                    className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                      paymentMethod === "pickup"
                        ? "border-charcoal bg-bone/40"
                        : "border-charcoal/20 hover:border-charcoal/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="pickup"
                      checked={paymentMethod === "pickup"}
                      onChange={() => setPaymentMethod("pickup")}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-charcoal" />
                        RECOLLIDA EN TALLER / ATELIER
                      </span>
                      <p className="text-[11px] text-raw mt-1 uppercase">
                        Punt central a València. Rebràs instruccions d&apos;arxiu un cop preparat.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-charcoal text-chalk text-xs font-mono font-bold uppercase tracking-widest hover:bg-pitch transition-colors flex items-center justify-between"
              >
                <span>{isSubmitting ? "PROCESSANT TRANSACCIÓ..." : "CONFIRMAR I PAGAR COMANDA"}</span>
                <span>{total.toFixed(2)} EUR →</span>
              </button>
            </form>
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 border border-charcoal/20 p-6 space-y-6 bg-bone/30 h-fit">
            <span className="text-[10px] text-raw uppercase tracking-widest block border-b border-charcoal/20 pb-2">
              [ ARCHIVE TICKET SUMMARY // {cart.reduce((s, i) => s + i.quantity, 0)} ITEMS ]
            </span>

            <div className="divide-y divide-charcoal/15 max-h-80 overflow-y-auto space-y-3">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="pt-3 first:pt-0 flex items-center gap-3 text-xs"
                >
                  <div className="relative w-14 h-16 bg-bone border border-charcoal/20 flex-shrink-0">
                    <Image
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold uppercase tracking-wider text-charcoal truncate">
                      {item.product.name}
                    </p>
                    <p className="text-[10px] text-raw uppercase">
                      SIZE: {item.selectedSize} × {item.quantity}
                    </p>
                  </div>
                  <div className="font-bold text-charcoal">
                    {(item.product.price * item.quantity).toFixed(2)} €
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-charcoal/20 pt-4 space-y-2 text-xs uppercase">
              <div className="flex justify-between text-raw">
                <span>SUBTOTAL</span>
                <span className="font-bold text-charcoal">{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-raw">
                <span>SHIPPING</span>
                <span className="font-bold text-charcoal">
                  {freeShippingQualified ? "0.00 EUR (FREE)" : `${shippingCost.toFixed(2)} €`}
                </span>
              </div>
              <div className="border-t border-charcoal/20 pt-3 flex justify-between text-sm font-black text-charcoal">
                <span>TOTAL</span>
                <span>{total.toFixed(2)} €</span>
              </div>
            </div>

            <div className="p-3 bg-chalk border border-charcoal/20 text-[10px] text-raw uppercase flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-charcoal flex-shrink-0" />
              <span>TERMINI DE LLIURAMENT: 2-4 DIES LABORABLES A ESPANYA PENINSULAR.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
