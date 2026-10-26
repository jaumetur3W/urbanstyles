"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useStore } from "@/context/StoreContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 1 }: ProductCardProps) {
  const { language } = useStore();
  const [isHovered, setIsHovered] = useState(false);

  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0];
  const secondaryImage = product.images.length > 1 ? product.images[1] : primaryImage;

  const totalStock = product.variants.reduce((sum, v) => sum + v.stock, 0);
  const isSoldOut = totalStock === 0;

  return (
    <article className="group relative flex flex-col bg-chalk border border-charcoal/15 hover:border-charcoal transition-colors">
      {/* Top Technical Metadata Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-charcoal/15 bg-bone/40 text-[10px] font-mono tracking-widest text-raw">
        <span>[ 0{index} {"//"} BLANK ]</span>
        <span>{product.details.weight.split(" ")[0]} GSM</span>
      </div>

      {/* Product Image Frame */}
      <Link
        href={`/producte/${product.slug}`}
        className="block relative aspect-[4/5] w-full overflow-hidden bg-bone"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Sold out stamp */}
        {isSoldOut && (
          <div className="absolute inset-0 z-20 bg-charcoal/80 flex items-center justify-center p-4">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-chalk border border-chalk px-3 py-1.5">
              SOLD OUT // ARCHIVED
            </span>
          </div>
        )}

        {/* Hover swap with sharp brutalist transition */}
        <div className="relative w-full h-full">
          <Image
            src={isHovered ? secondaryImage.url : primaryImage.url}
            alt={primaryImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-all duration-300"
          />
        </div>
      </Link>

      {/* Product Info Table Cell */}
      <div className="p-3.5 border-t border-charcoal/15 flex flex-col justify-between space-y-2 bg-chalk">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-charcoal group-hover:underline line-clamp-1">
            <Link href={`/producte/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
          <span className="font-mono text-xs font-bold text-charcoal flex-shrink-0">
            {product.price.toFixed(2)} €
          </span>
        </div>

        {/* Micro Technical Tag */}
        <p className="text-[10px] font-mono text-raw line-clamp-1">
          {product.color.name[language]} • {product.details.fit[language].split(".")[0]}
        </p>

        {/* Sizes Bar (Brutalist Grid) */}
        <div className="pt-2 border-t border-charcoal/10 flex items-center justify-between">
          <div className="flex items-center gap-1 font-mono text-[9px]">
            {product.variants.map((v) => (
              <span
                key={v.size}
                className={`w-6 h-5 flex items-center justify-center border ${
                  v.stock > 0
                    ? "border-charcoal/30 text-charcoal"
                    : "border-dashed border-charcoal/20 text-raw/40 line-through"
                }`}
              >
                {v.size}
              </span>
            ))}
          </div>
          <span className="text-[9px] font-mono text-raw uppercase">
            VIEW ITEM →
          </span>
        </div>
      </div>
    </article>
  );
}
