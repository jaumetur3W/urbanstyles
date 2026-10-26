"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS, COLLECTIONS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const { t, language } = useStore();
  const featuredProducts = PRODUCTS.slice(0, 4);
  const primaryCollection = COLLECTIONS[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO EDITORIAL */}
      <section className="relative w-full h-[88vh] min-h-[580px] max-h-[920px] flex items-end justify-start overflow-hidden bg-brand-dark">
        {/* Background Editorial Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=2000&q=85"
            alt="UrbanStyles - Campanya Drop 01 Streetwear"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 w-full text-white">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-200">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>{t.hero.season}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tightest leading-none text-white">
              {t.hero.title}
            </h1>

            <p className="text-xs sm:text-base text-stone-300 font-normal leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/botiga"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-brand-dark text-xs font-bold tracking-widest uppercase hover:bg-brand-accent hover:text-white transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{t.hero.ctaShop}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/colleccions"
                className="inline-flex items-center justify-center px-6 py-4 bg-transparent border border-white/40 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
              >
                <span>{t.hero.ctaLookbook}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE TICKER */}
      <section className="bg-stone-100 border-b border-brand-border py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              100% Cotó Orgànic 240 GSM
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              Enviaments Gratuïts &gt; 50€ a Espanya
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              Patronatge Boxy Oversized
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              14 Dies de Garantia i Canvi
            </span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (DROP 01 ESSENTIALS) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-4 border-b border-brand-border gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-muted">
              Selecció Destacada
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tightest text-brand-dark mt-1">
              Les Peces del Moment
            </h2>
          </div>
          <Link
            href="/botiga"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-colors self-start md:self-auto"
          >
            <span>Veure tot el catàleg ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. BRAND MANIFESTO & STORY */}
      <section className="bg-brand-dark text-white py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Lookbook Image */}
            <div className="lg:col-span-5 relative aspect-[4/5] bg-stone-800 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80"
                alt="UrbanStyles filosofia de marca"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-sm text-[10px] font-mono tracking-widest uppercase border border-white/20">
                UrbanStyles Studio • Concept 2026
              </div>
            </div>

            {/* Manifesto Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent">
                Manifest Fundacional
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tightest uppercase leading-tight">
                No fem samarretes bàsiques. Confeccionem caràcter.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-stone-300 font-normal leading-relaxed">
                <p>
                  UrbanStyles naix per omplir el buit entre el streetwear massiu de baixa densitat i les peces de passarel·la inaccessibles. Cada camiseta està construïda a partir d&apos;un patró propi: espatlles estructurades, coll acanalat ferm i un gramatge real de 240 GSM que no perd la forma després del rentat.
                </p>
                <p>
                  Inspirats en l&apos;esperit underground dels anys 90, barregem rentats minerals desgastats amb una composició visual neta i contemporània.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-6 border-t border-brand-borderDark">
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-white">240g</span>
                  <span className="text-[11px] text-stone-400 uppercase tracking-wider">Gramatge Pesat</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
                  <span className="text-[11px] text-stone-400 uppercase tracking-wider">Cotó Orgànic</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-white">Boxy</span>
                  <span className="text-[11px] text-stone-400 uppercase tracking-wider">Patró Propi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL CAPSULE DROP BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-stone-900 overflow-hidden flex items-center justify-center text-center p-6 sm:p-12">
          <Image
            src={primaryCollection.coverImage}
            alt={primaryCollection.name[language]}
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="relative z-10 max-w-xl space-y-4 text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent">
              {primaryCollection.season}
            </span>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tightest">
              {primaryCollection.name[language]}
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              {primaryCollection.description[language]}
            </p>
            <div className="pt-2">
              <Link
                href="/colleccions"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-dark text-xs font-bold tracking-widest uppercase hover:bg-brand-accent hover:text-white transition-colors"
              >
                <span>Descobrir el Drop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
