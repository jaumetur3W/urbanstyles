import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Enviaments i Devolucions",
  description: "Condicions d'enviament a Espanya i política de devolució de 14 dies d'UrbanStyles.",
};

export default function ReturnsPolicyPage() {
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
        Enviaments, Canvis & Devolucions
      </h1>

      <div className="space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            1. Condicions d&apos;Enviament a Espanya
          </h2>
          <div className="p-4 bg-stone-100 border border-brand-border space-y-2">
            <p>
              • <strong>Enviaments Gratuïts:</strong> Totes les comandes superiors a <strong>50,00 €</strong> destinades a Espanya peninsular tenen l&apos;enviament 100% gratuït.
            </p>
            <p>
              • <strong>Comandes inferiors a 50,00 €:</strong> S&apos;aplica una tarifa plana estàndard de <strong>4,90 €</strong> en concepte de transport i manipulació logística.
            </p>
            <p>
              • <strong>Termini de lliurament:</strong> De 2 a 4 dies laborables des de la confirmació de sortida del magatzem.
            </p>
          </div>
          <p className="text-stone-500 italic text-[11px]">
            * Enviaments a les Illes Balears, Canàries, Ceuta i Melilla: pendents d&apos;incorporació de tarifes duaneres i transport marítim/aeri definitius.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            2. Dret de Desistiment (14 Dies Naturals)
          </h2>
          <p>
            Conforme a la legislació vigent de consum a Espanya i la Unió Europea, disposes d&apos;un termini de <strong>14 dies naturals</strong> des de la data de recepció del paquet per exercir el teu dret de desistiment sense necessitat de justificació.
          </p>
          <p>
            Perquè la devolució o el canvi de talla siga acceptat:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>La peça ha d&apos;estar en el seu estat original: sense rentar, sense utilitzar i sense olors ni taques.</li>
            <li>Ha de conservar totes les etiquetes originals i embalatge corresponent.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            3. Procediment de Canvi de Talla
          </h2>
          <p>
            Per sol·licitar un canvi o devolució, escriu a <strong>info@urbanstyles.es</strong> indicant el teu número de comanda (ex: <code>UB-2026-XXXXXX</code>) i la nova talla que necessites. L&apos;equip de suport et facilitarà les instruccions de recollida de la peça.
          </p>
        </section>
      </div>
    </div>
  );
}

