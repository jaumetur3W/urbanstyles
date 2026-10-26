"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || `UB-${new Date().getFullYear()}-829143`;
  const paymentMethod = searchParams.get("method") || "stripe";
  const { t } = useStore();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center">
      <div className="bg-white border border-brand-border p-8 sm:p-14 space-y-6 shadow-sm">
        <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
            Transacció Verificada
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tightest text-brand-dark">
            {t.checkout.orderSuccessTitle}
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
            {t.checkout.orderSuccessSubtitle}
          </p>
        </div>

        <div className="p-4 bg-stone-50 border border-brand-border inline-block text-left text-xs space-y-1">
          <p className="text-stone-500 uppercase tracking-wider font-semibold">
            {t.checkout.orderNumber}
          </p>
          <p className="text-base font-mono font-black text-brand-dark">{orderId}</p>
        </div>

        {paymentMethod === "cod" && (
          <div className="p-4 bg-amber-50 border border-amber-200 text-xs text-amber-800 text-left space-y-1">
            <p className="font-bold uppercase tracking-wider">Instruccions Contra Reemborsament:</p>
            <p>
              Prepara l&apos;import exacte en efectiu en el moment del lliurament del transportista per evitar demores.
            </p>
          </div>
        )}

        {paymentMethod === "pickup" && (
          <div className="p-4 bg-stone-100 border border-stone-300 text-xs text-stone-700 text-left space-y-1">
            <p className="font-bold uppercase tracking-wider">Recollida en taller / showroom:</p>
            <p>
              Rebràs un correu electrònic quan la teua comanda estiga llesta amb les instruccions de recollida.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/botiga"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
          >
            <span>Continuar Comprant</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contacte"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-brand-border text-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-stone-50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Dubtes sobre la comanda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-24 text-center text-xs font-mono tracking-widest uppercase">Processant confirmació...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
