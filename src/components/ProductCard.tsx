"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useStore } from "@/context/StoreContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language } = useStore();
  const [isHovered, setIsHovered] = useState(false);

  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0];
  const secondaryImage = product.images.length > 1 ? product.images[1] : primaryImage;

  const totalStock = product.variants.reduce((sum, v) => sum + v.stock, 0);
  const isSoldOut = totalStock === 0;

  return (
    <article className="group relative flex flex-col">
      <Link
        href={`/producte/${product.slug}`}
        className="block relative aspect-[3/4] w-full overflow-hidden bg-stone-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.isDropExclusive && (
            <span className="bg-brand-dark text-white text-[10px] font-black tracking-widest uppercase px-2 py-1">
              DROP 01
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-brand-accent text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1">
              NEW
            </span>
          )}
          {isSoldOut && (
            <span className="bg-red-700 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1">
              SOLD OUT
            </span>
          )}
        </div>

        {/* Product Images with Subtle Hover Switch */}
        <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
          <Image
            src={isHovered ? secondaryImage.url : primaryImage.url}
            alt={primaryImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-opacity duration-500"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="pt-3.5 pb-2 flex flex-col space-y-1">
        <div className="flex justify-between items-baseline gap-2">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-accent transition-colors line-clamp-1">
            <Link href={`/producte/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
          <div className="flex items-center gap-1.5 text-xs font-bold text-brand-dark flex-shrink-0">
            {product.compareAtPrice && (
              <span className="line-through text-brand-muted font-normal">
                {product.compareAtPrice.toFixed(2)} €
              </span>
            )}
            <span>{product.price.toFixed(2)} €</span>
          </div>
        </div>

        {/* Tagline / Subtitle */}
        <p className="text-[11px] text-brand-muted line-clamp-1">
          {product.tagline[language]}
        </p>

        {/* Size availability pills */}
        <div className="pt-1.5 flex items-center gap-1.5">
          {product.variants.map((v) => (
            <span
              key={v.size}
              className={`text-[9px] px-1.5 py-0.5 border font-mono ${
                v.stock > 0
                  ? "border-brand-border text-brand-dark"
                  : "border-dashed border-stone-300 text-stone-400 line-through"
              }`}
              title={v.stock > 0 ? `${v.size} (${v.stock} disponibles)` : `${v.size} (Esgotat)`}
            >
              {v.size}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

