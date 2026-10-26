"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { Language } from "@/types";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { language, setLanguage, t, cartCount, openCart } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-chalk border-b border-charcoal/20">
      {/* 1. Industrial Ticker Marquee (VOID Brutalist Style) */}
      <aside aria-label="Ticker Industrial" className="bg-charcoal text-chalk overflow-hidden border-b border-charcoal py-1.5 text-[10px] font-mono tracking-widest uppercase select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span>URBANSTYLES — THE BLANK CAPSULE // ZERO PRINTS</span>
          <span>•</span>
          <span>100% ORGANIC COTTON 240 GSM HEAVYWEIGHT</span>
          <span>•</span>
          <span>FREE SHIPPING IN SPAIN OVER 50€</span>
          <span>•</span>
          <span>14-DAY ARCHIVE EXCHANGES</span>
          <span>•</span>
          <span>URBANSTYLES — THE BLANK CAPSULE // ZERO PRINTS</span>
          <span>•</span>
          <span>100% ORGANIC COTTON 240 GSM HEAVYWEIGHT</span>
          <span>•</span>
          <span>FREE SHIPPING IN SPAIN OVER 50€</span>
          <span>•</span>
          <span>14-DAY ARCHIVE EXCHANGES</span>
        </div>
      </aside>

      {/* 2. Modular Architectural Grid Navigation */}
      <div className="w-full grid grid-cols-12 border-b border-charcoal/10 text-xs font-mono uppercase tracking-wider divide-x divide-charcoal/10">
        {/* Mobile Burger (col-span-3 on mobile) */}
        <div className="col-span-3 lg:hidden flex items-center justify-center p-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-charcoal hover:opacity-60 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Brandmark Cell */}
        <div className="col-span-6 lg:col-span-3 flex items-center justify-center lg:justify-start px-4 lg:px-6 py-3.5">
          <Link
            href="/"
            className="font-black text-sm sm:text-base tracking-tightest uppercase text-charcoal hover:opacity-75 transition-opacity"
          >
            URBANSTYLES<span className="text-[10px] font-mono font-normal ml-1.5 text-raw">/ BLANKS</span>
          </Link>
        </div>

        {/* Desktop Navigation Links Cell (VOID x LOOM Style) */}
        <nav aria-label="Menu principal" className="hidden lg:flex col-span-5 items-center justify-start space-x-6 px-6 text-[11px] font-mono">
          <Link
            href="/botiga"
            className="text-charcoal hover:bg-charcoal hover:text-chalk px-2.5 py-1 transition-colors"
          >
            [01] {t.nav.shop}
          </Link>
          <Link
            href="/botiga?categoria=tees"
            className="text-raw hover:text-charcoal hover:bg-charcoal/5 px-2.5 py-1 transition-colors"
          >
            [02] {t.nav.tees}
          </Link>
          <Link
            href="/colleccions"
            className="text-raw hover:text-charcoal hover:bg-charcoal/5 px-2.5 py-1 transition-colors"
          >
            [03] {t.nav.collections}
          </Link>
          <Link
            href="/contacte"
            className="text-raw hover:text-charcoal hover:bg-charcoal/5 px-2.5 py-1 transition-colors"
          >
            [04] {t.nav.contact}
          </Link>
        </nav>

        {/* Studio Specs Cell */}
        <div className="hidden xl:flex col-span-2 items-center justify-center px-4 text-[10px] font-mono text-raw">
          <span>VALENCIA / 240GSM</span>
        </div>

        {/* Right Tools: Language & Cart */}
        <div className="col-span-3 lg:col-span-2 flex items-stretch divide-x divide-charcoal/10">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center justify-center px-3 gap-1.5 text-[10px] font-mono">
            {(["ca", "es", "en"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-1 py-0.5 transition-colors ${
                  language === lang
                    ? "font-bold text-charcoal underline"
                    : "text-raw hover:text-charcoal"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Cart Bag Counter */}
          <button
            type="button"
            onClick={openCart}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 bg-charcoal text-chalk hover:bg-pitch transition-colors font-mono text-[11px] font-bold tracking-wider"
            aria-label={`Open cart with ${cartCount} items`}
          >
            <span>BAG</span>
            <span className="border-l border-chalk/30 pl-1.5">[{cartCount}]</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Sharp Brutalist Overlay) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-chalk border-r border-charcoal p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-charcoal/20">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
                  [ URBANSTYLES ARCHIVE ]
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-charcoal hover:opacity-60"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4 font-mono text-sm uppercase tracking-wider">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 border-b border-charcoal/10 hover:bg-charcoal hover:text-chalk transition-colors"
                >
                  [00] {t.nav.home}
                </Link>
                <Link
                  href="/botiga"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 border-b border-charcoal/10 hover:bg-charcoal hover:text-chalk transition-colors"
                >
                  [01] {t.nav.shop}
                </Link>
                <Link
                  href="/botiga?categoria=tees"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 border-b border-charcoal/10 hover:bg-charcoal hover:text-chalk transition-colors"
                >
                  [02] {t.nav.tees}
                </Link>
                <Link
                  href="/colleccions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 border-b border-charcoal/10 hover:bg-charcoal hover:text-chalk transition-colors"
                >
                  [03] {t.nav.collections}
                </Link>
                <Link
                  href="/contacte"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 border-b border-charcoal/10 hover:bg-charcoal hover:text-chalk transition-colors"
                >
                  [04] {t.nav.contact}
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-charcoal/20">
              <span className="block text-[10px] font-mono text-raw uppercase tracking-widest mb-2">
                LANGUAGE SELECT
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(["ca", "es", "en"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2 text-xs font-mono font-bold uppercase border border-charcoal ${
                      language === lang
                        ? "bg-charcoal text-chalk"
                        : "bg-transparent text-charcoal hover:bg-charcoal/10"
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
