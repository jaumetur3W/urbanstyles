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
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-2xl font-black uppercase tracking-tightest text-brand-dark">
          {t.cart.empty}
        </h1>
        <p className="text-xs text-brand-muted">
          Afig peces a la teua cistella abans d&apos;accedir a la passarel·la de pagament.
        </p>
        <Link
          href="/botiga"
          className="inline-block px-8 py-3.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
        >
          {t.cart.emptyCta}
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

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al tramitar la comanda.");
      }

      // If Stripe Checkout URL was returned, redirect to Stripe
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }

      // Otherwise local confirmed order
      clearCart();
      router.push(`/checkout/exit?orderId=${data.orderNumber}&method=${paymentMethod}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Hi ha hagut un problema en comunicar amb el servidor de pagaments.";
      setErrorMessage(message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/botiga"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-muted hover:text-brand-dark transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.checkout.backToCart}</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: Customer Data & Payment Form */}
        <div className="lg:col-span-7 space-y-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1. Contact Info */}
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
                1. {t.checkout.contactInfo}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-1">
                    {t.checkout.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border text-xs focus:outline-none focus:border-brand-dark"
                    placeholder="Ex. Pau Navarro"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-1">
                    {t.checkout.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={address.email}
                    onChange={(e) => setAddress({ ...address, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border text-xs focus:outline-none focus:border-brand-dark"
                    placeholder="pau@exemple.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-1">
                    {t.checkout.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border text-xs focus:outline-none focus:border-brand-dark"
                    placeholder="+34 600 000 000 (Per a seguiment de missatgeria)"
                  />
                </div>
              </div>
            </div>

            {/* 2. Shipping Address */}
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
                2. {t.checkout.shippingAddress}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-1">
                    {t.checkout.address} *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.address}
                    onChange={(e) => setAddress({ ...address, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border text-xs focus:outline-none focus:border-brand-dark"
                    placeholder="Carrer de Colom, 14, 3r B"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-1">
                    {t.checkout.postalCode} *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.postalCode}
                    onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border text-xs focus:outline-none focus:border-brand-dark"
                    placeholder="46001"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-1">
                    {t.checkout.city} *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border text-xs focus:outline-none focus:border-brand-dark"
                    placeholder="València"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-1">
                    {t.checkout.province} *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.province}
                    onChange={(e) => setAddress({ ...address, province: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border text-xs focus:outline-none focus:border-brand-dark"
                    placeholder="València / Madrid / Barcelona..."
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-1">
                    {t.checkout.country}
                  </label>
                  <input
                    type="text"
                    disabled
                    value={t.checkout.spain}
                    className="w-full px-3.5 py-2.5 bg-stone-100 border border-brand-border text-xs text-stone-600 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2">
                3. {t.checkout.paymentMethod}
              </h2>

              <div className="space-y-3">
                {/* Stripe Card */}
                <label
                  className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                    paymentMethod === "stripe"
                      ? "border-brand-dark bg-stone-50"
                      : "border-brand-border hover:border-stone-400"
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
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-brand-dark" />
                        {t.checkout.cardPayment}
                      </span>
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                        Recomanat
                      </span>
                    </div>
                    <p className="text-[11px] text-brand-muted mt-1">
                      {t.checkout.cardPaymentDesc}
                    </p>
                  </div>
                </label>

                {/* PayPal */}
                <label
                  className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                    paymentMethod === "paypal"
                      ? "border-brand-dark bg-stone-50"
                      : "border-brand-border hover:border-stone-400"
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
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-blue-600" />
                      {t.checkout.paypalPayment}
                    </span>
                    <p className="text-[11px] text-brand-muted mt-1">
                      {t.checkout.paypalPaymentDesc}
                    </p>
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label
                  className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-brand-dark bg-stone-50"
                      : "border-brand-border hover:border-stone-400"
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
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                      <Banknote className="w-4 h-4 text-emerald-600" />
                      {t.checkout.codPayment}
                    </span>
                    <p className="text-[11px] text-stone-500 mt-1">
                      {t.checkout.codPendingNote}
                    </p>
                  </div>
                </label>

                {/* Local Pickup */}
                <label
                  className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                    paymentMethod === "pickup"
                      ? "border-brand-dark bg-stone-50"
                      : "border-brand-border hover:border-stone-400"
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
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-stone-600" />
                      {t.checkout.pickupPayment}
                    </span>
                    <p className="text-[11px] text-stone-500 mt-1">
                      {t.checkout.pickupPendingNote}
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 bg-brand-dark text-white text-xs font-black uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{isSubmitting ? t.checkout.processing : t.checkout.placeOrder}</span>
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-brand-border h-fit space-y-6">
          <h2 className="text-sm font-black uppercase tracking-widest text-brand-dark border-b border-brand-border pb-3">
            {t.checkout.orderSummary} ({cart.reduce((s, i) => s + i.quantity, 0)})
          </h2>

          <div className="divide-y divide-brand-border/60 max-h-96 overflow-y-auto space-y-3">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}`}
                className="pt-3 first:pt-0 flex items-center gap-3"
              >
                <div className="relative w-14 h-16 bg-stone-200 flex-shrink-0">
                  <Image
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 text-xs">
                  <p className="font-bold uppercase tracking-wider text-brand-dark truncate">
                    {item.product.name}
                  </p>
                  <p className="text-[11px] text-brand-muted">
                    Talla {item.selectedSize} × {item.quantity}
                  </p>
                </div>
                <div className="text-xs font-bold text-brand-dark">
                  {(item.product.price * item.quantity).toFixed(2)} €
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-border pt-4 space-y-2 text-xs">
            <div className="flex justify-between text-brand-muted">
              <span>{t.cart.subtotal}</span>
              <span className="font-semibold text-brand-dark">{subtotal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-brand-muted">
              <span>{t.cart.shipping}</span>
              <span className="font-semibold text-brand-dark">
                {freeShippingQualified ? (
                  <span className="text-emerald-700 font-bold uppercase tracking-wide">Gratuït</span>
                ) : (
                  `${shippingCost.toFixed(2)} €`
                )}
              </span>
            </div>
            <div className="border-t border-brand-border pt-3 flex justify-between text-base font-black uppercase tracking-wider text-brand-dark">
              <span>{t.cart.total}</span>
              <span>{total.toFixed(2)} €</span>
            </div>
          </div>

          <div className="p-3 bg-stone-50 border border-brand-border text-[11px] text-stone-600 flex items-center gap-2">
            <Truck className="w-4 h-4 text-brand-dark flex-shrink-0" />
            <span>Lliurament estimat en 2-4 dies laborables a Espanya peninsular.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

