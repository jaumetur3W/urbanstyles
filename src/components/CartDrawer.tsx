"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { SHIPPING_POLICY } from "@/lib/data";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingCost,
    freeShippingQualified,
    freeShippingRemaining,
    total,
    t,
  } = useStore();

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeCart();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const progressPercent = Math.min(
    100,
    Math.round((subtotal / SHIPPING_POLICY.freeShippingThreshold) * 100)
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={closeCart}
    >
      <div
        className="fixed inset-y-0 right-0 w-full max-w-md bg-brand-bg shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t.cart.title}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-brand-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-sm sm:text-base font-black tracking-widest uppercase text-brand-dark">
              {t.cart.title}
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 bg-brand-border text-brand-dark">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 text-brand-dark hover:text-brand-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
            aria-label={t.cart.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-stone-100 px-5 sm:px-6 py-3 border-b border-brand-border text-xs">
          <div className="flex items-center gap-2 font-medium mb-1.5">
            <Truck className="w-4 h-4 text-brand-dark flex-shrink-0" />
            <span className="text-brand-dark">
              {freeShippingQualified
                ? t.cart.freeShippingSuccess
                : t.cart.freeShippingRemaining.replace(
                    "{amount}",
                    freeShippingRemaining.toFixed(2)
                  )}
            </span>
          </div>
          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                freeShippingQualified ? "bg-emerald-600" : "bg-brand-dark"
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <p className="text-sm text-brand-muted tracking-wider uppercase mb-6">
                {t.cart.empty}
              </p>
              <button
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white text-xs font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors"
              >
                <span>{t.cart.emptyCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}`}
                className="flex gap-4 pb-6 border-b border-brand-border/60 last:border-b-0"
              >
                {/* Product Thumbnail */}
                <div className="relative w-20 h-24 bg-stone-200 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* Info & Quantity */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        href={`/producte/${item.product.slug}`}
                        onClick={closeCart}
                        className="text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-accent transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-stone-400 hover:text-red-500 transition-colors p-1"
                        aria-label={`${t.cart.remove} ${item.product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-1 flex items-center gap-3 text-xs text-brand-muted">
                      <span>Talla: <strong className="text-brand-dark">{item.selectedSize}</strong></span>
                      <span>•</span>
                      <span>{(item.product.price * item.quantity).toFixed(2)} €</span>
                    </div>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border border-brand-border bg-white">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                        className="p-1 text-brand-dark hover:bg-stone-100 disabled:opacity-30"
                        aria-label="Reduir quantitat"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-brand-dark">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                        className="p-1 text-brand-dark hover:bg-stone-100 disabled:opacity-30"
                        aria-label="Augmentar quantitat"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[11px] text-brand-muted">
                      ({item.product.price.toFixed(2)} € / unitat)
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Totals & Checkout CTA */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-brand-border bg-white space-y-3">
            <div className="space-y-1.5 text-xs">
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
              <div className="flex justify-between text-sm font-black tracking-wider uppercase text-brand-dark pt-2 border-t border-brand-border">
                <span>{t.cart.total}</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <p className="text-[10px] text-brand-muted text-right tracking-tight">
                {t.cart.taxesIncluded}
              </p>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-dark text-white text-xs font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
            >
              <span>{t.cart.checkout}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-2 text-[11px] text-brand-muted pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Compra 100% segura xifrada SSL</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

