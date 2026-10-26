import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Avís Legal i Condicions Generals de Compra",
  description: "Informació legal i condicions de compra d'UrbanStyles segons la normativa espanyola.",
};

export default function LegalNoticePage() {
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
        Avís Legal & Condicions Generals de Compra
      </h1>

      <div className="space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            1. Dades Identificatives (LSSI-CE)
          </h2>
          <p>
            En compliment de l&apos;article 10 de la Llei 34/2002, d&apos;11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s&apos;informa que el lloc web <strong>urbanstyles.es</strong> és operat sota la marca comercial registrada <strong>UrbanStyles</strong>.
          </p>
          <div className="p-4 bg-stone-100 border border-brand-border text-xs space-y-1">
            <p><strong>Titular provisional:</strong> UrbanStyles Project (Pendent d&apos;incorporació de raó social definitiva / NIF d&apos;autònom o SL)</p>
            <p><strong>Domicili social:</strong> Comunitat Valenciana, Espanya (Pendent de confirmació de domicili fiscal definitiu)</p>
            <p><strong>Correu electrònic de contacte:</strong> info@urbanstyles.es</p>
            <p><strong>Activitat:</strong> Comerç al detall de peces de roba i moda streetwear per via telemàtica.</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            2. Objecte i Àmbit d&apos;Aplicació
          </h2>
          <p>
            Aquestes condicions generals regulen l&apos;adquisició dels productes comercialitzats a través de la botiga en línia d&apos;UrbanStyles per part de consumidors finals residents a Espanya.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            3. Preus i Disponibilitat
          </h2>
          <p>
            Tots els preus mostrats a la botiga estan expressats en Euros (€) i inclouen l&apos;Impost sobre el Valor Afegit (IVA) legalment aplicable a Espanya. Els preus no inclouen les despeses d&apos;enviament per a compres inferiors a 50 €, les quals es desglossen clarament abans de confirmar la comanda.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-dark">
            4. Propietat Intel·lectual
          </h2>
          <p>
            Tots els continguts, dissenys gràfics, patrons, marques, logotips, fotografies i codi font són propietat exclusiva d&apos;UrbanStyles o de tercers que n&apos;han autoritzat l&apos;ús legítim. Queda totalment prohibida la reproducció o distribució sense autorització prèvia per escrit.
          </p>
        </section>
      </div>
    </div>
  );
}

