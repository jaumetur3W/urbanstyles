import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privadesa",
  description: "Tractament de dades personals conforme al Reglament General de Protecció de Dades (RGPD).",
};

export default function PrivacyPage() {
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
        Política de Privadesa
      </h1>

      <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            1. Responsable del Tractament
          </h2>
          <p>
            El responsable del tractament de les teues dades és UrbanStyles (amb domicili d&apos;operacions a la Comunitat Valenciana, Espanya). Contacte del delegat de protecció de dades: <strong>info@urbanstyles.es</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            2. Finalitat del Tractament
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestió, preparació i enviament de les comandes de roba realitzades.</li>
            <li>Emissió de les factures o rebuts legals corresponents.</li>
            <li>Atenció al client per resoldre dubtes, consultes sobre talles o incidències logístiques.</li>
            <li>Prevenció del frau en els pagaments electrònics.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            3. Drets de l&apos;Usuari (RGPD)
          </h2>
          <p>
            Com a usuari, tens dret a accedir, rectificar, suprimir, oposar-te al tractament i sol·licitar la portabilitat de les teues dades enviant una sol·licitud a info@urbanstyles.es acompanyada d&apos;un document que acredite la teua identitat.
          </p>
        </section>
      </div>
    </div>
  );
}

