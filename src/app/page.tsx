"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, CornerDownRight } from "lucide-react";

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const archiveFrames = [
    {
      url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85",
      id: "FR-01",
      title: "RAW CHALK 250G",
      sub: "BOXY DRAPE / UNDYED",
    },
    {
      url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=85",
      id: "FR-02",
      title: "WASHED CHARCOAL",
      sub: "MINERAL STONE WASH",
    },
    {
      url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85",
      id: "FR-03",
      title: "WARM DESERT SAND",
      sub: "NATURAL DYE PIGMENT",
    },
    {
      url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=85",
      id: "FR-04",
      title: "PURE BLACK HOODIE",
      sub: "450 GSM HEAVY FLEECE",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-chalk text-charcoal">
      {/* 1. HERO SECTION (VOID x LOOM ASYMMETRICAL ARCHITECTURE) */}
      <section className="w-full border-b border-charcoal/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[82vh]">
          {/* Left Column: Monumental Brutalist Typography & Specs */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-charcoal/20">
            {/* Studio Index */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-raw uppercase">
              <span>[ ARCHIVE REF {"//"} 2026 ]</span>
              <span>DROP 01 — THE BLANK CAPSULE</span>
            </div>

            {/* Giant Title */}
            <div className="my-10 lg:my-auto space-y-4">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tightest leading-none text-charcoal">
                THE BLANK
                <br />
                <span className="italic font-serif font-normal text-raw">CAPSULE</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm text-charcoal/80 max-w-md leading-relaxed uppercase pt-2">
                Peces d&apos;streetwear bàsiques despullades de qualsevol gràfic. L&apos;atenció se centra exclusivament en el patronatge boxy, el coll acanalat gruixut i el cotó pesat de 240 GSM.
              </p>
            </div>

            {/* Studio Technical Specs Grid (Loom Artisan Detail) */}
            <div className="grid grid-cols-3 border border-charcoal/20 divide-x divide-charcoal/20 bg-bone/30 text-center font-mono">
              <div className="p-3">
                <span className="block text-xl font-bold">240G</span>
                <span className="text-[9px] text-raw tracking-widest uppercase">COTÓ DENS</span>
              </div>
              <div className="p-3">
                <span className="block text-xl font-bold">0%</span>
                <span className="text-[9px] text-raw tracking-widest uppercase">ESTAMPATS</span>
              </div>
              <div className="p-3">
                <span className="block text-xl font-bold">BOXY</span>
                <span className="text-[9px] text-raw tracking-widest uppercase">SILUETA</span>
              </div>
            </div>

            {/* CTA Button Row */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/botiga"
                className="flex-1 py-4 px-6 bg-charcoal text-chalk text-xs font-mono font-bold tracking-widest uppercase hover:bg-pitch transition-colors flex items-center justify-between"
              >
                <span>EXPLORAR CATÀLEG [06]</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/colleccions"
                className="py-4 px-6 border border-charcoal text-charcoal text-xs font-mono font-bold tracking-widest uppercase hover:bg-charcoal/5 transition-colors flex items-center justify-center"
              >
                LOOKBOOK
              </Link>
            </div>
          </div>

          {/* Right Column: Hero High-Contrast Fashion Imagery */}
          <div className="lg:col-span-6 relative aspect-[4/5] lg:aspect-auto overflow-hidden bg-bone">
            <Image
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1800&q=85"
              alt="The Blank Capsule Editorial"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
            {/* Technical Frame Badge */}
            <div className="absolute top-4 right-4 bg-charcoal text-chalk px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
              STUDIO FIG. 01 {"//"} 240 GSM
            </div>
            <div className="absolute bottom-4 left-4 bg-chalk/90 backdrop-blur-sm border border-charcoal/20 p-3 text-[10px] font-mono uppercase tracking-wider text-charcoal max-w-xs">
              Model porta la talla L en Off-White. Caiguda recta estructurada sense transparències.
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX BANNER */}
      <section className="border-b border-charcoal/20 bg-bone/40 text-[11px] font-mono uppercase tracking-wider py-3 px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
        <span className="flex items-center gap-2">
          <CornerDownRight className="w-3.5 h-3.5 text-raw" />
          <span>GARMENT SPEC: 100% ORGANIC COTTON JERSEY</span>
        </span>
        <span className="hidden sm:inline text-raw">{"/ / /"}</span>
        <span>SHIPPING: FREE IN SPAIN &gt; 50.00 EUR</span>
        <span className="hidden sm:inline text-raw">{"/ / /"}</span>
        <span>ZERO SYNTHETIC PRINTS {"//"} PURE HEAVY BLANKS</span>
      </section>

      {/* 3. CORE BLANKS GRID (Brutalist Connected Cells) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-charcoal/20 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-raw">
              [ THE CATALOGUE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tightest text-charcoal mt-1">
              Bàsics Pesats Atemporals
            </h2>
          </div>
          <Link
            href="/botiga"
            className="font-mono text-xs uppercase tracking-widest text-charcoal hover:underline flex items-center gap-1.5"
          >
            <span>VEURE TOTS ELS BÀSICS ({PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Columns Connected Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx + 1} />
          ))}
        </div>
      </section>

      {/* 4. ARTISAN ATELIER SECTION (LOOM Aesthetic: Craft & Fabric Architecture) */}
      <section className="w-full border-y border-charcoal/20 bg-bone/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-charcoal/20">
          {/* Atelier Statement */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-raw block mb-2">
                [ ATELIER PHILOSOPHY ]
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tightest leading-tight text-charcoal">
                La puresa del teixit sense ornamentació.
              </h3>
            </div>
            <p className="font-mono text-xs text-charcoal/80 uppercase leading-relaxed">
              Hem eliminat logotips, etiquetes exteriors i serigrafies per centrar cada mil·límetre en el comportament del teixit: un cotó pesat de 240 grams pentinat que cau amb pes propi i no s&apos;arruga fàcilment.
            </p>
            <div className="font-mono text-[10px] text-raw border-t border-charcoal/20 pt-4">
              URBANSTYLES WORKSHOP {"//"} VALENCIA, SPAIN
            </div>
          </div>

          {/* 4-Cell Engineering Specs (Brutalist Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-charcoal/20">
            <div className="p-8 space-y-3">
              <span className="font-mono text-xs font-bold text-raw">[ 01 ]</span>
              <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-charcoal">
                240 GSM Carded Cotton
              </h4>
              <p className="font-mono text-xs text-raw leading-relaxed">
                Gramatge pesat que proporciona una estructura rígida i un tacte sec distintiu, evitant qualsevol transparència.
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="font-mono text-xs font-bold text-raw">[ 02 ]</span>
              <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-charcoal">
                1.2&quot; Ribbed Collar
              </h4>
              <p className="font-mono text-xs text-raw leading-relaxed">
                Coll reforçat d&apos;amplada especial teixit en canalé d&apos;alta densitat que no perd la forma amb l&apos;ús ni els rentats.
              </p>
            </div>

            <div className="p-8 space-y-3 sm:border-t border-charcoal/20">
              <span className="font-mono text-xs font-bold text-raw">[ 03 ]</span>
              <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-charcoal">
                Mineral Stone Wash
              </h4>
              <p className="font-mono text-xs text-raw leading-relaxed">
                Rentat artesanal amb enzims minerals que aconsegueix una pàtina vintage suau i un to desgastat mat.
              </p>
            </div>

            <div className="p-8 space-y-3 sm:border-t border-charcoal/20">
              <span className="font-mono text-xs font-bold text-raw">[ 04 ]</span>
              <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-charcoal">
                Boxy Architecture
              </h4>
              <p className="font-mono text-xs text-raw leading-relaxed">
                Patró de tall quadrat truncat que equilibra una espatlla relaxada amb una llargada justa a la cintura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL ARCHIVE FRAMES (LOOM x VOID Aesthetic) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex items-center justify-between pb-4 border-b border-charcoal/20 mb-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-raw">
              [ LOOKBOOK ARCHIVE {"//"} 2026 ]
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tightest text-charcoal mt-0.5">
              Fotogrames de Campanya
            </h3>
          </div>
          <span className="text-xs font-mono text-raw uppercase">
            35MM ANALOG ARCHIVE
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {archiveFrames.map((frame, idx) => (
            <div key={idx} className="group border border-charcoal/20 bg-bone/20 flex flex-col">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone">
                <Image
                  src={frame.url}
                  alt={frame.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <span className="absolute top-2 left-2 font-mono text-[9px] bg-charcoal text-chalk px-1.5 py-0.5">
                  {frame.id}
                </span>
              </div>
              <div className="p-3 border-t border-charcoal/20 bg-chalk font-mono">
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  {frame.title}
                </p>
                <p className="text-[10px] text-raw uppercase mt-0.5">
                  {frame.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
