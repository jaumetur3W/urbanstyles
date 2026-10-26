"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductSize } from "@/types";
import { useStore } from "@/context/StoreContext";
import ProductCard from "@/components/ProductCard";
import {
  Check,
  Ruler,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const { t, language, addToCart } = useStore();

  // Find first in-stock variant as default or null
  const defaultSize = product.variants.find((v) => v.stock > 0)?.size || product.variants[0]?.size;
  const [selectedSize, setSelectedSize] = useState<ProductSize>(defaultSize);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("fabric");
  const [isAdding, setIsAdding] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  const selectedVariant = product.variants.find((v) => v.size === selectedSize);
  const isOutOfStock = !selectedVariant || selectedVariant.stock <= 0;
  const availableStock = selectedVariant?.stock || 0;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    setIsAdding(true);
    addToCart(product, selectedSize, 1);
    setAddSuccess(true);
    setTimeout(() => {
      setIsAdding(false);
      setAddSuccess(false);
    }, 1500);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Fils d'Ariadna" className="mb-6 flex items-center space-x-2 text-xs text-brand-muted uppercase tracking-wider">
        <Link href="/" className="hover:text-brand-dark">
          {t.nav.home}
        </Link>
        <span>/</span>
        <Link href="/botiga" className="hover:text-brand-dark">
          {t.nav.shop}
        </Link>
        <span>/</span>
        <span className="text-brand-dark font-bold">{product.name}</span>
      </nav>

      {/* Main Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Left: Gallery (Thumbnails + Main Image) */}
        <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 bg-stone-200 border-2 transition-all overflow-hidden ${
                    activeImageIndex === idx
                      ? "border-brand-dark opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Veure imatge ${idx + 1} de ${product.name}`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Active Image */}
          <div className="relative aspect-[3/4] w-full bg-stone-200 overflow-hidden flex-1">
            <Image
              src={product.images[activeImageIndex].url}
              alt={product.images[activeImageIndex].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />

            {/* Drop exclusive badge */}
            {product.isDropExclusive && (
              <span className="absolute top-4 left-4 bg-brand-dark text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1">
                DROP 01 EXCLUSIVE
              </span>
            )}
          </div>
        </div>

        {/* Right: Buy Box & Product Info */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Tagline */}
            <span className="text-xs font-mono uppercase tracking-widest text-brand-muted">
              {product.details.weight}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tightest text-brand-dark">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-bold text-brand-dark">
                {product.price.toFixed(2)} €
              </span>
              {product.compareAtPrice && (
                <span className="line-through text-brand-muted text-base">
                  {product.compareAtPrice.toFixed(2)} €
                </span>
              )}
              <span className="text-xs text-brand-muted uppercase">IVA inclòs</span>
            </div>

            {/* Color description */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <span className="font-semibold uppercase tracking-wider text-brand-dark">
                Color:
              </span>
              <span className="text-brand-muted">{product.color.name[language]}</span>
              <span
                className="w-3.5 h-3.5 rounded-full border border-stone-300 ml-1 inline-block"
                style={{ backgroundColor: product.color.hex }}
              />
            </div>

            {/* Size Selector Box */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  {t.product.selectSize}
                </span>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="flex items-center gap-1 text-xs text-brand-muted hover:text-brand-dark underline"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>{t.product.sizeGuide}</span>
                </button>
              </div>

              {/* Size Buttons */}
              <div className="grid grid-cols-5 gap-2.5">
                {product.variants.map((v) => {
                  const hasStock = v.stock > 0;
                  const isSelected = selectedSize === v.size;

                  return (
                    <button
                      key={v.size}
                      type="button"
                      onClick={() => setSelectedSize(v.size)}
                      disabled={!hasStock}
                      className={`relative py-3 text-xs font-mono font-bold uppercase transition-all border ${
                        isSelected
                          ? "bg-brand-dark text-white border-brand-dark"
                          : hasStock
                          ? "bg-white text-brand-dark border-brand-border hover:border-brand-dark"
                          : "bg-stone-100 text-stone-300 border-dashed border-stone-300 cursor-not-allowed line-through"
                      }`}
                      aria-label={`Talla ${v.size} ${hasStock ? `disponible` : `esgotada`}`}
                    >
                      {v.size}
                    </button>
                  );
                })}
              </div>

              {/* Stock status indicator */}
              <div className="text-xs pt-1 flex items-center gap-1.5">
                {isOutOfStock ? (
                  <span className="text-red-600 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Talla {selectedSize} esgotada. Estem produint noves unitats.
                  </span>
                ) : availableStock <= 5 ? (
                  <span className="text-amber-700 font-medium">
                    Últimes {availableStock} unitats en talla {selectedSize}.
                  </span>
                ) : (
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    En estoc preparat per a enviament immediat.
                  </span>
                )}
              </div>
            </div>

            {/* Size Guide Modal (Expandable) */}
            {showSizeGuide && (
              <div className="p-4 bg-stone-100 border border-brand-border text-xs space-y-2">
                <div className="flex justify-between items-center font-bold uppercase tracking-wider">
                  <span>Guia de Talles (Boxy Cut Streetwear)</span>
                  <button
                    onClick={() => setShowSizeGuide(false)}
                    className="text-stone-500 hover:text-black"
                  >
                    Tancar
                  </button>
                </div>
                <div className="overflow-x-auto pt-1">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead>
                      <tr className="border-b border-stone-300 text-brand-muted">
                        <th className="py-1">Talla</th>
                        <th className="py-1">Ample Pit (cm)</th>
                        <th className="py-1">Llargada (cm)</th>
                        <th className="py-1">Alçada Model</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr><td className="py-1 font-bold">S</td><td>56 cm</td><td>70 cm</td><td>165 - 174 cm</td></tr>
                      <tr><td className="py-1 font-bold">M</td><td>59 cm</td><td>72 cm</td><td>175 - 180 cm</td></tr>
                      <tr><td className="py-1 font-bold">L</td><td>62 cm</td><td>74 cm</td><td>181 - 186 cm</td></tr>
                      <tr><td className="py-1 font-bold">XL</td><td>65 cm</td><td>76 cm</td><td>187 - 192 cm</td></tr>
                      <tr><td className="py-1 font-bold">XXL</td><td>68 cm</td><td>78 cm</td><td>&gt; 192 cm</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-stone-500 pt-1 italic">
                  * Patronatge americà folgat. Si busques un ajust més clàssic, et recomanem triar una talla menys.
                </p>
              </div>
            )}

            {/* Add to Cart CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isOutOfStock || isAdding}
                className={`w-full py-4 px-6 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark ${
                  isOutOfStock
                    ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                    : addSuccess
                    ? "bg-emerald-700 text-white"
                    : "bg-brand-dark text-white hover:bg-brand-accent"
                }`}
              >
                {isOutOfStock ? (
                  <span>{t.product.soldOut}</span>
                ) : isAdding ? (
                  <span>{t.product.adding}</span>
                ) : addSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Afegit a la cistella</span>
                  </>
                ) : (
                  <>
                    <span>{t.product.addToCart}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Description */}
            <div className="pt-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>{product.description[language]}</p>
            </div>
          </div>

          {/* Accordion Sections (Fabric, Fit, Care, Shipping) */}
          <div className="border-t border-brand-border divide-y divide-brand-border text-xs">
            {/* 1. Fabric */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion("fabric")}
                className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-brand-dark py-1 text-left"
              >
                <span>{t.product.composition}</span>
                {openAccordion === "fabric" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {openAccordion === "fabric" && (
                <div className="pt-2 pb-1 text-brand-muted space-y-1">
                  <p>• {product.details.composition[language]}</p>
                  <p>• Gramatge certificat: {product.details.weight}</p>
                  <p>• Tintura reactiva mineral amb rentat vintage.</p>
                </div>
              )}
            </div>

            {/* 2. Fit */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion("fit")}
                className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-brand-dark py-1 text-left"
              >
                <span>{t.product.fitDetails}</span>
                {openAccordion === "fit" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {openAccordion === "fit" && (
                <div className="pt-2 pb-1 text-brand-muted space-y-1">
                  <p>{product.details.fit[language]}</p>
                </div>
              )}
            </div>

            {/* 3. Care */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion("care")}
                className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-brand-dark py-1 text-left"
              >
                <span>{t.product.careInstructions}</span>
                {openAccordion === "care" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {openAccordion === "care" && (
                <div className="pt-2 pb-1 text-brand-muted space-y-1">
                  <p>{product.details.care[language]}</p>
                </div>
              )}
            </div>

            {/* 4. Shipping & Returns */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion("shipping")}
                className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-brand-dark py-1 text-left"
              >
                <span>{t.product.shippingAndReturns}</span>
                {openAccordion === "shipping" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {openAccordion === "shipping" && (
                <div className="pt-2 pb-1 text-brand-muted space-y-1.5">
                  <p className="font-semibold text-brand-dark">{t.product.freeShippingNote}</p>
                  <p>{t.product.standardDelivery}</p>
                  <p>Disposes de 14 dies naturals des de la recepció per a sol·licitar canvi de talla o devolució.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 pt-12 border-t border-brand-border">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black uppercase tracking-tightest text-brand-dark">
              {t.product.relatedProducts}
            </h2>
            <Link
              href="/botiga"
              className="text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-accent transition-colors"
            >
              Veure tota la botiga
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

