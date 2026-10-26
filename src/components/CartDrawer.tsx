"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
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
  } = useStore();

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
      className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm transition-opacity"
      onClick={closeCart}
    >
      <div
        className="fixed inset-y-0 right-0 w-full max-w-md bg-chalk border-l border-charcoal flex flex-col justify-between overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Archive Bag"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-charcoal flex items-center justify-between bg-bone/30 font-mono">
          <div className="flex items-center gap-2">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-charcoal">
              [ BAG ARCHIVE ]
            </h2>
            <span className="text-[10px] bg-charcoal text-chalk px-1.5 py-0.5">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} ITEMS
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1 text-charcoal hover:opacity-60"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator (Brutalist Bar) */}
        <div className="bg-bone px-5 py-3 border-b border-charcoal/20 font-mono text-[11px] uppercase">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-charcoal font-semibold">
              {freeShippingQualified
                ? "ENVIAMENT GRATUÏT ACTIVAT"
                : `AFEGIX ${freeShippingRemaining.toFixed(2)}€ PER A ENVIAMENT GRATUÏT`}
            </span>
            <span className="text-raw">[{progressPercent}%]</span>
          </div>
          <div className="w-full bg-charcoal/10 h-1.5 overflow-hidden">
            <div
              className="h-full bg-charcoal transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 font-mono">
              <p className="text-xs text-raw uppercase tracking-widest mb-6">
                LA TEUA CISTELLA D&apos;ARXIU ESTÀ BUIDA.
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-charcoal text-chalk text-xs font-mono uppercase tracking-widest hover:bg-pitch transition-colors flex items-center gap-2"
              >
                <span>EXPLORAR BÀSICS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}`}
                className="flex gap-3 pb-4 border-b border-charcoal/15 font-mono text-xs"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-24 bg-bone border border-charcoal/20 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        href={`/producte/${item.product.slug}`}
                        onClick={closeCart}
                        className="font-bold uppercase tracking-wider text-charcoal hover:underline line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-raw hover:text-red-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-1 text-[11px] text-raw flex items-center gap-2 uppercase">
                      <span>SIZE: <strong className="text-charcoal">{item.selectedSize}</strong></span>
                      <span>•</span>
                      <span>{(item.product.price * item.quantity).toFixed(2)} €</span>
                    </div>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-charcoal/30 bg-chalk">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                        className="p-1 hover:bg-bone disabled:opacity-30"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center font-bold text-charcoal">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                        className="p-1 hover:bg-bone disabled:opacity-30"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-charcoal bg-bone/30 font-mono space-y-3">
            <div className="space-y-1.5 text-xs uppercase">
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
              <div className="flex justify-between text-sm font-bold border-t border-charcoal/20 pt-2 text-charcoal">
                <span>TOTAL ESTIMATED</span>
                <span>{total.toFixed(2)} €</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full flex items-center justify-between py-4 px-6 bg-charcoal text-chalk text-xs font-mono font-bold tracking-widest uppercase hover:bg-pitch transition-colors"
            >
              <span>CONTINUAR AL CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
