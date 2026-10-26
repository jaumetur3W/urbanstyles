"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || `UB-${new Date().getFullYear()}-829143`;
  const paymentMethod = searchParams.get("method") || "stripe";

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 font-mono text-charcoal">
      <div className="bg-chalk border border-charcoal p-8 sm:p-14 space-y-6">
        <div className="flex items-center gap-3 border-b border-charcoal/20 pb-4">
          <CheckCircle2 className="w-8 h-8 text-charcoal" />
          <div>
            <span className="text-[10px] text-raw uppercase tracking-widest block">
              [ TRANSACTION VERIFIED // 200 OK ]
            </span>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tightest text-charcoal">
              COMANDA CONFIRMADA
            </h1>
          </div>
        </div>

        <p className="text-xs uppercase text-raw leading-relaxed">
          Hem registrat la teua sol·licitud a l&apos;arxiu d&apos;UrbanStyles. El paquet s&apos;està preparant al taller i rebràs la guia de seguiment de missatgeria al teu correu.
        </p>

        <div className="p-4 bg-bone/40 border border-charcoal/20 text-xs space-y-1">
          <p className="text-raw uppercase text-[10px] font-bold">
            ARCHIVE ORDER IDENTIFIER:
          </p>
          <p className="text-base font-bold text-charcoal">{orderId}</p>
        </div>

        {paymentMethod === "cod" && (
          <div className="p-4 border border-charcoal/30 bg-bone/20 text-xs text-charcoal space-y-1 uppercase">
            <p className="font-bold">INSTRUCCIONS CONTRA REEMBORSAMENT:</p>
            <p className="text-[11px] text-raw">
              Prepara l&apos;import exacte en efectiu per al missatger en el moment del lliurament físic.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-charcoal/20 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/botiga"
            className="w-full sm:w-auto inline-flex items-center justify-between gap-4 px-8 py-3.5 bg-charcoal text-chalk text-xs font-bold uppercase tracking-widest hover:bg-pitch transition-colors"
          >
            <span>TORNAR AL CATÀLEG</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contacte"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-charcoal text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-bone transition-colors"
          >
            ATENCIÓ AL CLIENT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-24 text-center text-xs font-mono tracking-widest uppercase">GENERATING ARCHIVE TICKET...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
