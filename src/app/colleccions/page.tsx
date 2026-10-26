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
    <div className="w-full bg-chalk text-charcoal min-h-screen">
      {/* Header */}
      <div className="border-b border-charcoal/20 px-4 sm:px-8 py-10 sm:py-16 max-w-7xl mx-auto">
        <span className="text-[10px] font-mono uppercase tracking-widest text-raw block">
          [ CAPSULE ARCHIVE // DROP 01 ]
        </span>
        <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tightest mt-1 text-charcoal">
          {collection.name[language]}
        </h1>
        <p className="font-mono text-xs text-raw uppercase max-w-2xl mt-3 leading-relaxed">
          {collection.description[language]}
        </p>
      </div>

      {/* Hero Showcase Image */}
      <div className="border-b border-charcoal/20 max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-bone border border-charcoal/20 overflow-hidden">
          <Image
            src={collection.coverImage}
            alt={collection.name[language]}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute bottom-4 left-4 bg-charcoal text-chalk px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
            {collection.season} {"// ATELIER CRAFT"}
          </div>
        </div>
      </div>

      {/* Garments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex items-center justify-between border-b border-charcoal/20 pb-4 mb-8 font-mono">
          <span className="text-xs font-bold uppercase tracking-widest text-charcoal">
            CAPSULE PIECES [0{dropProducts.length}]
          </span>
          <Link href="/botiga" className="text-xs uppercase text-raw hover:text-charcoal flex items-center gap-1">
            <span>FULL CATALOGUE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dropProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
