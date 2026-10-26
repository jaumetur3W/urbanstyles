"use client";

import React from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";

export default function Footer() {
  const { t } = useStore();

  return (
    <footer className="w-full bg-charcoal text-chalk border-t border-charcoal mt-20 font-mono text-xs">
      {/* Top 4-Block Atelier Banner (Brutalist Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-chalk/15 divide-y sm:divide-y-0 sm:divide-x divide-chalk/15">
        <div className="p-6 space-y-1">
          <span className="text-[10px] text-chalk/50 uppercase tracking-widest">[ 01 // WEIGHT ]</span>
          <p className="font-bold uppercase tracking-wider text-chalk">240 GSM HEAVYWEIGHT COTTON</p>
          <p className="text-[11px] text-chalk/60 uppercase">Estructura rígida de màxima durabilitat.</p>
        </div>

        <div className="p-6 space-y-1">
          <span className="text-[10px] text-chalk/50 uppercase tracking-widest">[ 02 // SHIPPING ]</span>
          <p className="font-bold uppercase tracking-wider text-chalk">ENVIAMENT GRATUÏT &gt; 50€</p>
          <p className="text-[11px] text-chalk/60 uppercase">Missatgeria exprés a Espanya peninsular.</p>
        </div>

        <div className="p-6 space-y-1">
          <span className="text-[10px] text-chalk/50 uppercase tracking-widest">[ 03 // EXCHANGE ]</span>
          <p className="font-bold uppercase tracking-wider text-chalk">14 DIES DE CANVI D&apos;ARXIU</p>
          <p className="text-[11px] text-chalk/60 uppercase">Garantia total de satisfacció i talla.</p>
        </div>

        <div className="p-6 space-y-1">
          <span className="text-[10px] text-chalk/50 uppercase tracking-widest">[ 04 // BLANKS ]</span>
          <p className="font-bold uppercase tracking-wider text-chalk">ZERO SERIGRAFIES SINTÈTIQUES</p>
          <p className="text-[11px] text-chalk/60 uppercase">Sense estampats ni logos agressius.</p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto p-6 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
        {/* Brand Col */}
        <div className="md:col-span-5 space-y-3">
          <Link href="/" className="text-xl font-black tracking-tightest uppercase text-chalk">
            URBANSTYLES<span className="text-xs font-normal text-chalk/50 ml-2">/ THE BLANKS</span>
          </Link>
          <p className="text-[11px] text-chalk/60 uppercase leading-relaxed max-w-sm">
            Taller i botiga d&apos;streetwear independent. Desenvolupem bàsics pesats despullats de dissenys per posar el focus en la silueta boxy i el cotó dens.
          </p>
          <p className="text-[10px] text-chalk/40 uppercase pt-2">
            ATELIER LOCATION: VALÈNCIA, SPAIN.
          </p>
        </div>

        {/* Navigation Col */}
        <div className="md:col-span-3 space-y-2">
          <span className="text-[10px] text-chalk/50 uppercase tracking-widest block mb-2">[ NAVIGATION ]</span>
          <ul className="space-y-1.5 text-xs text-chalk/80 uppercase">
            <li><Link href="/botiga" className="hover:text-chalk underline">[01] {t.nav.shop}</Link></li>
            <li><Link href="/botiga?categoria=tees" className="hover:text-chalk underline">[02] {t.nav.tees}</Link></li>
            <li><Link href="/colleccions" className="hover:text-chalk underline">[03] {t.nav.collections}</Link></li>
            <li><Link href="/contacte" className="hover:text-chalk underline">[04] {t.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Legal Col */}
        <div className="md:col-span-4 space-y-2">
          <span className="text-[10px] text-chalk/50 uppercase tracking-widest block mb-2">[ LEGAL & COMPLIANCE ]</span>
          <ul className="space-y-1.5 text-xs text-chalk/80 uppercase">
            <li><Link href="/legal/avis-legal" className="hover:text-chalk underline">AVÍS LEGAL & LSSI-CE</Link></li>
            <li><Link href="/legal/privadesa" className="hover:text-chalk underline">POLÍTICA DE PRIVADESA (RGPD)</Link></li>
            <li><Link href="/legal/cookies" className="hover:text-chalk underline">POLÍTICA DE COOKIES TÈCNIQUES</Link></li>
            <li><Link href="/legal/devolucions" className="hover:text-chalk underline">CONDICIONS D&apos;ENVIAMENT I CANVI</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-chalk/15 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-chalk/40 uppercase">
        <span>© {new Date().getFullYear()} URBANSTYLES ARCHIVE. ALL RIGHTS RESERVED.</span>
        <span>BRUTALIST ARTISAN ARCHITECTURE // DESIGNED IN SPAIN</span>
      </div>
    </footer>
  );
}
