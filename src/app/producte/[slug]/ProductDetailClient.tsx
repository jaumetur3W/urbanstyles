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
  AlertCircle,
} from "lucide-react";

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const { language, addToCart } = useStore();

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
    <div className="w-full bg-chalk text-charcoal min-h-screen">
      {/* Top Breadcrumb & Archive Index Bar */}
      <div className="border-b border-charcoal/20 px-4 sm:px-8 py-3 text-[10px] font-mono uppercase tracking-widest text-raw flex items-center justify-between">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2">
          <Link href="/" className="hover:text-charcoal">ARCHIVE</Link>
          <span>/</span>
          <Link href="/botiga" className="hover:text-charcoal">THE BLANKS</Link>
          <span>/</span>
          <span className="text-charcoal font-bold">{product.name}</span>
        </nav>
        <span className="hidden sm:inline">ITEM ID: {product.id.toUpperCase()}</span>
      </div>

      {/* Main Technical Grid */}
      <div className="max-w-7xl mx-auto border-x border-charcoal/20 grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Gallery Frames (VOID x LOOM Lookbook Style) */}
        <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-charcoal/20 p-4 sm:p-8 flex flex-col gap-4">
          {/* Main Large Image */}
          <div className="relative aspect-[4/5] w-full bg-bone border border-charcoal/20 overflow-hidden">
            <Image
              src={product.images[activeImageIndex].url}
              alt={product.images[activeImageIndex].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />
            <div className="absolute top-3 left-3 bg-charcoal text-chalk font-mono text-[9px] px-2 py-0.5 tracking-widest uppercase">
              FIG. 0{activeImageIndex + 1} {"//"} {product.details.weight.split(" ")[0]} GSM
            </div>
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[4/5] border transition-all overflow-hidden ${
                    activeImageIndex === idx
                      ? "border-charcoal border-2"
                      : "border-charcoal/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 font-mono text-[8px] bg-charcoal/80 text-white px-1">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Technical Spec Sheet & Buy Action Box */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-chalk">
          <div className="space-y-6">
            {/* Title & Price Header */}
            <div className="border-b border-charcoal/20 pb-4 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-raw uppercase block">
                [ ESSENTIAL BLANK // 240GSM ]
              </span>
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tightest text-charcoal">
                {product.name}
              </h1>
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-mono text-xl font-bold text-charcoal">
                  {product.price.toFixed(2)} EUR
                </span>
                <span className="font-mono text-[10px] text-raw uppercase">
                  IVA INCLÒS // FREE SHIPPING &gt; 50€
                </span>
              </div>
            </div>

            {/* Color Spec */}
            <div className="border border-charcoal/20 p-3 bg-bone/30 flex items-center justify-between text-xs font-mono uppercase">
              <span className="text-raw">COLOR PIGMENT:</span>
              <span className="font-bold text-charcoal flex items-center gap-2">
                <span
                  className="w-3 h-3 inline-block border border-charcoal/40"
                  style={{ backgroundColor: product.color.hex }}
                />
                {product.color.name[language]}
              </span>
            </div>

            {/* Size Selector Box */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs uppercase">
                <span className="text-charcoal font-bold">[ SELECT SIZE ]</span>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="flex items-center gap-1 text-raw hover:text-charcoal underline"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>MEASUREMENTS</span>
                </button>
              </div>

              {/* Sharp Brutalist Grid Buttons */}
              <div className="grid grid-cols-5 gap-2 font-mono">
                {product.variants.map((v) => {
                  const hasStock = v.stock > 0;
                  const isSelected = selectedSize === v.size;

                  return (
                    <button
                      key={v.size}
                      type="button"
                      onClick={() => setSelectedSize(v.size)}
                      disabled={!hasStock}
                      className={`py-3 text-xs font-bold uppercase transition-all border ${
                        isSelected
                          ? "bg-charcoal text-chalk border-charcoal"
                          : hasStock
                          ? "bg-chalk text-charcoal border-charcoal/30 hover:border-charcoal"
                          : "bg-bone/40 text-raw/40 border-dashed border-charcoal/20 cursor-not-allowed line-through"
                      }`}
                    >
                      {v.size}
                    </button>
                  );
                })}
              </div>

              {/* Stock Notice */}
              <div className="font-mono text-[11px] pt-1">
                {isOutOfStock ? (
                  <span className="text-red-700 font-semibold flex items-center gap-1 uppercase">
                    <AlertCircle className="w-3.5 h-3.5" />
                    SIZE {selectedSize} CURRENTLY ARCHIVED / OUT OF STOCK
                  </span>
                ) : availableStock <= 5 ? (
                  <span className="text-amber-700 uppercase">
                    LOW ARCHIVE INVENTORY: ONLY {availableStock} LEFT IN SIZE {selectedSize}.
                  </span>
                ) : (
                  <span className="text-charcoal flex items-center gap-1 uppercase">
                    <Check className="w-3.5 h-3.5 text-charcoal" />
                    IN STOCK. READY FOR DISPATCH IN 24H.
                  </span>
                )}
              </div>
            </div>

            {/* Measurement Chart (Expandable Matrix) */}
            {showSizeGuide && (
              <div className="border border-charcoal/30 p-4 bg-bone/40 font-mono text-xs space-y-2">
                <div className="flex justify-between items-center font-bold uppercase">
                  <span>ATELIER MEASUREMENTS (CM)</span>
                  <button onClick={() => setShowSizeGuide(false)} className="underline text-raw">
                    CLOSE
                  </button>
                </div>
                <table className="w-full text-left text-[11px] border border-charcoal/20 mt-2">
                  <thead className="bg-bone border-b border-charcoal/20">
                    <tr>
                      <th className="p-1.5">SIZE</th>
                      <th className="p-1.5">CHEST</th>
                      <th className="p-1.5">LENGTH</th>
                      <th className="p-1.5">HEIGHT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10">
                    <tr><td className="p-1.5 font-bold">S</td><td className="p-1.5">56 cm</td><td className="p-1.5">70 cm</td><td className="p-1.5">165-174 cm</td></tr>
                    <tr><td className="p-1.5 font-bold">M</td><td className="p-1.5">59 cm</td><td className="p-1.5">72 cm</td><td className="p-1.5">175-180 cm</td></tr>
                    <tr><td className="p-1.5 font-bold">L</td><td className="p-1.5">62 cm</td><td className="p-1.5">74 cm</td><td className="p-1.5">181-186 cm</td></tr>
                    <tr><td className="p-1.5 font-bold">XL</td><td className="p-1.5">65 cm</td><td className="p-1.5">76 cm</td><td className="p-1.5">187-192 cm</td></tr>
                    <tr><td className="p-1.5 font-bold">XXL</td><td className="p-1.5">68 cm</td><td className="p-1.5">78 cm</td><td className="p-1.5">&gt; 192 cm</td></tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Add to Bag Action Button (VOID Action Bar) */}
            <div>
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isOutOfStock || isAdding}
                className={`w-full py-4 px-6 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-between border border-charcoal transition-all ${
                  isOutOfStock
                    ? "bg-bone text-raw cursor-not-allowed border-charcoal/30"
                    : addSuccess
                    ? "bg-charcoal text-chalk"
                    : "bg-charcoal text-chalk hover:bg-pitch"
                }`}
              >
                <span>
                  {isOutOfStock
                    ? "[ SIZE ARCHIVED ]"
                    : isAdding
                    ? "ADDING TO BAG..."
                    : addSuccess
                    ? "ADDED TO BAG"
                    : "ADD TO ARCHIVE BAG"}
                </span>
                <span>{product.price.toFixed(2)} EUR →</span>
              </button>
            </div>

            {/* Description */}
            <div className="font-mono text-xs text-charcoal/80 uppercase leading-relaxed pt-2">
              <p>{product.description[language]}</p>
            </div>
          </div>

          {/* Technical Specs Accordion (Atelier Details) */}
          <div className="border-t border-charcoal/20 divide-y divide-charcoal/15 font-mono text-xs uppercase">
            {/* 1. Fabric */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion("fabric")}
                className="w-full flex items-center justify-between font-bold py-1 text-left text-charcoal"
              >
                <span>[ 01 ] FABRIC & STRUCTURE</span>
                {openAccordion === "fabric" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === "fabric" && (
                <div className="pt-2 text-raw space-y-1 text-[11px]">
                  <p>• {product.details.composition[language]}</p>
                  <p>• Density: {product.details.weight}</p>
                  <p>• Zero synthetic graphics or screenprints.</p>
                </div>
              )}
            </div>

            {/* 2. Fit */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion("fit")}
                className="w-full flex items-center justify-between font-bold py-1 text-left text-charcoal"
              >
                <span>[ 02 ] SILHOUETTE PATTERNING</span>
                {openAccordion === "fit" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === "fit" && (
                <div className="pt-2 text-raw text-[11px]">
                  <p>{product.details.fit[language]}</p>
                </div>
              )}
            </div>

            {/* 3. Shipping */}
            <div className="py-3">
              <button
                onClick={() => toggleAccordion("shipping")}
                className="w-full flex items-center justify-between font-bold py-1 text-left text-charcoal"
              >
                <span>[ 03 ] SHIPPING & GUARANTEE</span>
                {openAccordion === "shipping" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === "shipping" && (
                <div className="pt-2 text-raw text-[11px] space-y-1">
                  <p>• Free express courier in Spain for orders over 50.00 EUR.</p>
                  <p>• 14 days full return and exchange guarantee.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Matrix */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 border-x border-b border-charcoal/20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal/20 font-mono">
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal">
              [ COMPLEMENTARY ARCHIVE BLANKS ]
            </span>
            <Link href="/botiga" className="text-xs uppercase text-raw hover:text-charcoal underline">
              VIEW CATALOGUE →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx + 1} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
