"use client";

import React, { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { Mail, Clock, ShieldAlert, Send, CheckCircle2 } from "lucide-react";

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
      setErrorMsg("No s'ha pogut enviar el missatge en aquests moments. Si us plau, torna-ho a intentar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="mb-12 border-b border-brand-border pb-8">
        <span className="text-[11px] font-mono uppercase tracking-widest text-brand-muted">
          Suport Oficial & Atenció
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tightest text-brand-dark mt-1">
          {t.contact.title}
        </h1>
        <p className="text-xs sm:text-base text-brand-muted max-w-xl mt-2 leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-brand-border">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-black uppercase tracking-tightest text-brand-dark">
                {t.contact.success}
              </h3>
              <p className="text-xs text-brand-muted max-w-md mx-auto">
                L&apos;equip de suport d&apos;UrbanStyles ha registrat la teua petició. Rebràs resposta directament a la teua bústia de correu.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
              >
                Enviar una altra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5">
                  {t.contact.name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-border text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                  placeholder="Ex. Marc Valero"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5">
                  {t.contact.email} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-border text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                  placeholder="el-teu-email@exemple.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5">
                  {t.contact.subject} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-border text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
                  placeholder="Ex. Consulta sobre talla L o seguiment de comanda"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5">
                  {t.contact.message} *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-border text-xs text-brand-dark focus:outline-none focus:border-brand-dark resize-none"
                  placeholder="Explica'ns com et podem ajudar..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-brand-dark text-white text-xs font-black uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? t.contact.sending : t.contact.send}</span>
              </button>
            </form>
          )}
        </div>

        {/* Right: Operational Info & Transparency */}
        <div className="lg:col-span-5 space-y-8">
          {/* Customer Care info */}
          <div className="border border-brand-border bg-white p-6 sm:p-8 space-y-4">
            <h2 className="text-sm font-black uppercase tracking-widest text-brand-dark flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-accent" />
              <span>{t.contact.customerService}</span>
            </h2>
            <div className="space-y-2 text-xs text-brand-muted">
              <p>
                Canal directe d&apos;atenció al client i postvenda:
              </p>
              <p className="font-mono font-bold text-brand-dark text-sm">
                info@urbanstyles.es
              </p>
              <div className="flex items-center gap-2 pt-2 text-stone-600">
                <Clock className="w-4 h-4 text-stone-400" />
                <span>{t.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Location & DNVB Note (complies with brief: do not fake a physical store) */}
          <div className="border border-brand-border bg-stone-100 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark">
              <ShieldAlert className="w-4 h-4 text-brand-accent" />
              <span>{t.contact.locationTitle}</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.contact.locationNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

