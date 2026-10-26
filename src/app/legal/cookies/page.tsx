import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Cookies",
  description: "Informació sobre les cookies utilitzades al lloc web d'UrbanStyles.",
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-brand-dark">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-muted hover:text-brand-dark mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Tornar a l&apos;inici</span>
      </Link>

      <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tightest mb-8">
        Política de Cookies
      </h1>

      <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            1. Què són les cookies?
          </h2>
          <p>
            Una cookie és un xicotet fitxer que s&apos;emmagatzema al teu navegador per recordar informació essencial de la sessió de navegació.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            2. Cookies utilitzades a UrbanStyles
          </h2>
          <p>
            Actualment, UrbanStyles només utilitza <strong>cookies tècniques i estrictament necessàries</strong> per al funcionament bàsic de la botiga:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>urbanstyles_cart:</strong> Manté els productes seleccionats a la cistella de compra mentre navegues.</li>
            <li><strong>urbanstyles_lang:</strong> Recorda la teua preferència d&apos;idioma (Valencià, Castellà, Anglés).</li>
          </ul>
          <p className="mt-2 text-stone-500">
            No utilitzem cookies de seguiment publicitari ni compartim les teues dades de navegació amb xarxes publicitàries de tercers sense el teu consentiment explícit.
          </p>
        </section>
      </div>
    </div>
  );
}

