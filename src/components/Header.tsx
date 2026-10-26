"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { Language } from "@/types";
import { ShoppingBag, Menu, X, Globe } from "lucide-react";

export default function Header() {
  const { language, setLanguage, t, cartCount, openCart } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // Close menus on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setLangMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-bg/95 backdrop-blur-md border-b border-brand-border">
      {/* Announcement Bar */}
      <aside aria-label="Anunci destacat" className="bg-brand-dark text-white text-[11px] font-medium tracking-widest py-2 px-4 text-center uppercase flex items-center justify-center gap-2">
        <span>{t.announcement.text}</span>
      </aside>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-dark hover:text-brand-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
              aria-label={mobileMenuOpen ? "Tancar menú" : "Obrir menú principal"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links Left */}
          <nav aria-label="Navegació principal escriptori" className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase">
            <Link
              href="/botiga"
              className="text-brand-dark hover:text-brand-accent transition-colors py-1"
            >
              {t.nav.shop}
            </Link>
            <Link
              href="/botiga?categoria=tees"
              className="text-brand-muted hover:text-brand-dark transition-colors py-1"
            >
              {t.nav.tees}
            </Link>
            <Link
              href="/colleccions"
              className="text-brand-muted hover:text-brand-dark transition-colors py-1"
            >
              {t.nav.collections}
            </Link>
            <Link
              href="/contacte"
              className="text-brand-muted hover:text-brand-dark transition-colors py-1"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Logo / Brandmark */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <Link
              href="/"
              className="inline-block text-xl sm:text-2xl font-black tracking-tightest sm:tracking-widest uppercase text-brand-dark hover:opacity-90 transition-opacity"
            >
              URBANSTYLES
            </Link>
          </div>

          {/* Right Tools (Language Switcher & Cart) */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-accent transition-colors p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
                aria-label="Seleccionar idioma"
                aria-expanded={langMenuOpen}
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-36 bg-white border border-brand-border shadow-lg py-1 z-50 text-xs uppercase font-medium tracking-wider"
                  role="menu"
                >
                  <button
                    onClick={() => handleLangChange("ca")}
                    className={`w-full text-left px-4 py-2 hover:bg-stone-100 transition-colors ${
                      language === "ca" ? "font-bold text-brand-accent" : "text-brand-dark"
                    }`}
                    role="menuitem"
                  >
                    Valencià / CA
                  </button>
                  <button
                    onClick={() => handleLangChange("es")}
                    className={`w-full text-left px-4 py-2 hover:bg-stone-100 transition-colors ${
                      language === "es" ? "font-bold text-brand-accent" : "text-brand-dark"
                    }`}
                    role="menuitem"
                  >
                    Español / ES
                  </button>
                  <button
                    onClick={() => handleLangChange("en")}
                    className={`w-full text-left px-4 py-2 hover:bg-stone-100 transition-colors ${
                      language === "en" ? "font-bold text-brand-accent" : "text-brand-dark"
                    }`}
                    role="menuitem"
                  >
                    English / EN
                  </button>
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 text-brand-dark hover:text-brand-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark flex items-center gap-1"
              aria-label={`Obrir carret amb ${cartCount} productes`}
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs font-bold tracking-tight">({cartCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-brand-bg shadow-xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegació mòbil"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <span className="text-lg font-black tracking-widest text-brand-dark">URBANSTYLES</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-brand-dark hover:text-brand-accent focus:outline-none"
                  aria-label="Tancar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-5 text-base font-bold tracking-widest uppercase">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-dark hover:text-brand-accent transition-colors"
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="/botiga"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-dark hover:text-brand-accent transition-colors"
                >
                  {t.nav.shop}
                </Link>
                <Link
                  href="/botiga?categoria=tees"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-muted hover:text-brand-dark transition-colors pl-2 border-l border-brand-border"
                >
                  {t.nav.tees}
                </Link>
                <Link
                  href="/colleccions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-dark hover:text-brand-accent transition-colors"
                >
                  {t.nav.collections}
                </Link>
                <Link
                  href="/contacte"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-dark hover:text-brand-accent transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-brand-border">
              <p className="text-xs text-brand-muted tracking-wider uppercase mb-3">Idioma / Language</p>
              <div className="flex gap-2">
                {(["ca", "es", "en"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      handleLangChange(lang);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border ${
                      language === lang
                        ? "bg-brand-dark text-white border-brand-dark"
                        : "border-brand-border text-brand-dark"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
