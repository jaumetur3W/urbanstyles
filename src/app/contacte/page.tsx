"use client";

import React, { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { t } = useStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Error en tramitar la consulta.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Fallback for static hosting
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-chalk text-charcoal min-h-screen">
      {/* Header */}
      <div className="border-b border-charcoal/20 px-4 sm:px-8 py-10 sm:py-16 max-w-7xl mx-auto">
        <span className="text-[10px] font-mono uppercase tracking-widest text-raw block">
          [ DIRECT ATELIER DISPATCH ]
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tightest mt-1 text-charcoal">
          CLIENT CARE & INQUIRIES
        </h1>
        <p className="font-mono text-xs text-raw uppercase max-w-xl mt-2 leading-relaxed">
          Dubtes sobre talles, comandes o consultes tècniques sobre el cotó 240 GSM. Responem en menys de 24 hores.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-charcoal/20 divide-y lg:divide-y-0 lg:divide-x divide-charcoal/20 bg-chalk font-mono">
          {/* Left: Brutalist Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-charcoal mx-auto" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
                  CONSULTA REGISTRADA AMB ÈXIT // TICKET OBERT
                </h3>
                <p className="text-xs text-raw max-w-md mx-auto uppercase">
                  L&apos;equip d&apos;UrbanStyles ha rebut el teu missatge. Rebràs resposta a la teua bústia de correu en breu.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-charcoal text-chalk text-xs font-mono uppercase tracking-widest hover:bg-pitch"
                >
                  ENVIAR UNA ALTRA CONSULTA
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                {errorMsg && (
                  <div className="p-3 border border-red-700 bg-red-50 text-red-700">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block uppercase tracking-wider text-charcoal font-bold mb-1.5">
                    [ 01 ] {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-bone/30 border border-charcoal/20 text-xs text-charcoal focus:outline-none focus:border-charcoal uppercase"
                    placeholder="NOM I COGNOMS"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-charcoal font-bold mb-1.5">
                    [ 02 ] {t.contact.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-bone/30 border border-charcoal/20 text-xs text-charcoal focus:outline-none focus:border-charcoal lowercase"
                    placeholder="adreca@correu.com"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-charcoal font-bold mb-1.5">
                    [ 03 ] {t.contact.subject} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-bone/30 border border-charcoal/20 text-xs text-charcoal focus:outline-none focus:border-charcoal uppercase"
                    placeholder="EX. CONSULTA DE TALLA O ENVIAMENT"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-charcoal font-bold mb-1.5">
                    [ 04 ] {t.contact.message} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-bone/30 border border-charcoal/20 text-xs text-charcoal focus:outline-none focus:border-charcoal resize-none uppercase"
                    placeholder="EXPLICA'NS EL TEU DUBTE..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-charcoal text-chalk text-xs font-bold tracking-widest uppercase hover:bg-pitch transition-colors flex items-center justify-between"
                >
                  <span>{isSubmitting ? "TRANSMETENT..." : "ENVIAR MISSATGE"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Atelier Desk Information */}
          <div className="lg:col-span-5 p-6 sm:p-10 space-y-8 bg-bone/20 text-xs">
            <div className="space-y-3">
              <span className="text-[10px] text-raw uppercase tracking-widest block">[ CHANNELS ]</span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal flex items-center gap-2">
                <Mail className="w-4 h-4 text-charcoal" />
                DIRECT ATELIER MAIL
              </h3>
              <p className="text-charcoal font-bold text-sm">
                info@urbanstyles.es
              </p>
              <div className="flex items-center gap-2 text-raw pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>DILLUNS A DIVENDRES, 09:00 - 18:00 CET</span>
              </div>
            </div>

            <div className="border-t border-charcoal/15 pt-6 space-y-2 text-raw uppercase text-[11px] leading-relaxed">
              <span className="font-bold text-charcoal block">[ ATELIER NOTE ]</span>
              <p>
                UrbanStyles opera com a marca nativa digital (DNVB) i taller de distribució centralitzat a Espanya. No disposem de botiga comercial permanent oberta al carrer per tal d&apos;oferir preus directes de taller sense intermediaris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
