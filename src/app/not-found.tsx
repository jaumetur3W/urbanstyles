import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <span className="text-xs font-mono uppercase tracking-widest text-brand-accent">
        Error 404 • Arxiu no trobat
      </span>
      <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tightest text-brand-dark">
        Aquesta peça no està disponible.
      </h1>
      <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
        L&apos;enllaç que has seguit pot estar trencat o la pàgina s&apos;ha retirat temporalment de la nostra col·lecció.
      </p>
      <div className="pt-4">
        <Link
          href="/botiga"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tornar a la Botiga</span>
        </Link>
      </div>
    </div>
  );
}

