"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { COLLECTIONS, PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";

export default function CollectionsPage() {
  const { language } = useStore();
  const collection = COLLECTIONS[0];
  const dropProducts = PRODUCTS.filter((p) => p.collectionId === collection.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Editorial Header */}
      <div className="mb-12 border-b border-brand-border pb-8">
        <span className="text-[11px] font-mono uppercase tracking-widest text-brand-accent">
          Capsule Drops & Archives
        </span>
        <h1 className="text-3xl sm:text-6xl font-black uppercase tracking-tightest text-brand-dark mt-1">
          {collection.name[language]}
        </h1>
        <p className="text-xs sm:text-base text-brand-muted max-w-2xl mt-3 leading-relaxed">
          {collection.description[language]}
        </p>
      </div>

      {/* Lookbook Full-Width Showcase */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-stone-900 overflow-hidden mb-16">
        <Image
          src={collection.coverImage}
          alt={collection.name[language]}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
          <div className="text-white space-y-1">
            <span className="text-xs font-mono tracking-widest uppercase text-brand-accent">
              {collection.season}
            </span>
            <p className="text-sm sm:text-lg font-bold uppercase tracking-wider">
              Confeccionat a Espanya • Cotó d&apos;alta densitat 240 GSM
            </p>
          </div>
        </div>
      </div>

      {/* Collection Garments */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-brand-border pb-4">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-tightest text-brand-dark">
            Les Peces del Drop ({dropProducts.length})
          </h2>
          <Link
            href="/botiga"
            className="text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-accent flex items-center gap-1"
          >
            <span>Tots els productes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {dropProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

