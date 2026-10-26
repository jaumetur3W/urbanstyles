"use client";

import React from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { ShieldCheck, Truck, RefreshCw, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useStore();

  return (
    <footer className="bg-brand-dark text-white border-t border-brand-borderDark mt-20">
      {/* Value props banner */}
      <div className="border-b border-brand-borderDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-start gap-3.5">
              <Truck className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  {t.features.shipping}
                </h4>
                <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                  {t.features.shippingDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <RefreshCw className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  {t.features.returns}
                </h4>
                <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                  {t.features.returnsDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Cotó Pesat 240 GSM
                </h4>
                <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                  {t.features.heavyweightDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Mail className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Atenció Personalitzada
                </h4>
                <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                  Suport per correu en menys de 24h per resoldre qualsevol dubte o canvi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-2xl font-black tracking-widest uppercase text-white hover:text-brand-accent transition-colors"
            >
              URBANSTYLES
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="pt-2 text-[11px] text-stone-500">
              <p className="font-semibold text-stone-300 uppercase tracking-wider">
                Operativa Comercial
              </p>
              <p className="mt-1">
                Marca nativa digital a Espanya. Envíos logístics des de magatzem central.
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footer.explore}
            </h3>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link href="/botiga" className="hover:text-white transition-colors">
                  {t.nav.shop}
                </Link>
              </li>
              <li>
                <Link href="/botiga?categoria=tees" className="hover:text-white transition-colors">
                  {t.nav.tees}
                </Link>
              </li>
              <li>
                <Link href="/colleccions" className="hover:text-white transition-colors">
                  {t.nav.collections}
                </Link>
              </li>
              <li>
                <Link href="/contacte" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footer.legal}
            </h3>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link href="/legal/avis-legal" className="hover:text-white transition-colors">
                  {t.footer.terms} & Avís Legal
                </Link>
              </li>
              <li>
                <Link href="/legal/privadesa" className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-white transition-colors">
                  {t.footer.cookies}
                </Link>
              </li>
              <li>
                <Link href="/legal/devolucions" className="hover:text-white transition-colors">
                  {t.footer.returns} (14 dies)
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <span className="inline-block text-[10px] tracking-widest uppercase bg-stone-900 border border-stone-800 text-stone-300 px-2.5 py-1">
                Comerç Electrònic Segur UE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-borderDark mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} UrbanStyles. {t.footer.allRights}</p>
          <p className="tracking-wider uppercase">{t.footer.designedFor}</p>
        </div>
      </div>
    </footer>
  );
}

