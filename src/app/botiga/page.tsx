"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { ProductSize } from "@/types";
import { Search, X } from "lucide-react";

function ShopContent() {
  const { language } = useStore();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSize, setSelectedSize] = useState<ProductSize | "all">("all");
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc" | "name">("newest");

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      // 2. Size filter (check if variant exists and has stock)
      if (selectedSize !== "all") {
        const variant = product.variants.find((v) => v.size === selectedSize);
        if (!variant || variant.stock <= 0) return false;
      }
      // 3. Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description[language].toLowerCase().includes(query);
        const matchesTagline = product.tagline[language].toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesTagline) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
    });
  }, [selectedCategory, selectedSize, searchQuery, sortBy, language]);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedSize("all");
    setSortBy("newest");
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedCategory !== "all" || selectedSize !== "all";

  return (
    <div className="w-full bg-chalk text-charcoal min-h-screen">
      {/* Top Technical Archive Header */}
      <div className="border-b border-charcoal/20 px-4 sm:px-8 py-8 sm:py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-raw block">
              [ ARCHIVE INDEX // 01-06 ]
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tightest mt-1 text-charcoal">
              THE BLANK CATALOGUE
            </h1>
            <p className="font-mono text-xs text-raw uppercase max-w-xl mt-2">
              Peces bàsiques d&apos;alt gramatge. Sense serigrafies ni elements superflus: patronatge boxy i cotó pesat pur.
            </p>
          </div>

          <div className="font-mono text-xs border border-charcoal/20 px-4 py-2 bg-bone/30 self-start md:self-auto">
            TOTAL UNITS: <strong className="text-charcoal">{filteredProducts.length} BLANKS</strong>
          </div>
        </div>
      </div>

      {/* Control Panel / Filter Matrix (VOID Brutalist Control Bar) */}
      <div className="border-b border-charcoal/20 bg-bone/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH BY COLOR OR GSM..."
              className="w-full pl-9 pr-4 py-2 bg-chalk border border-charcoal/20 text-xs font-mono uppercase tracking-wider text-charcoal placeholder:text-raw/60 focus:outline-none focus:border-charcoal"
            />
            <Search className="w-3.5 h-3.5 text-raw absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-raw hover:text-charcoal"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Filter Categories Buttons */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <div className="inline-flex border border-charcoal/20 divide-x divide-charcoal/20 bg-chalk">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  selectedCategory === "all"
                    ? "bg-charcoal text-chalk font-bold"
                    : "text-charcoal hover:bg-bone"
                }`}
              >
                ALL [06]
              </button>
              <button
                onClick={() => setSelectedCategory("tees")}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  selectedCategory === "tees"
                    ? "bg-charcoal text-chalk font-bold"
                    : "text-charcoal hover:bg-bone"
                }`}
              >
                TEES [05]
              </button>
              <button
                onClick={() => setSelectedCategory("hoodies")}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  selectedCategory === "hoodies"
                    ? "bg-charcoal text-chalk font-bold"
                    : "text-charcoal hover:bg-bone"
                }`}
              >
                HOODIES [01]
              </button>
            </div>

            {/* Size Dropdown */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value as ProductSize | "all")}
              className="bg-chalk border border-charcoal/20 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-charcoal focus:outline-none focus:border-charcoal cursor-pointer"
            >
              <option value="all">SIZE: ALL</option>
              <option value="S">SIZE S</option>
              <option value="M">SIZE M</option>
              <option value="L">SIZE L</option>
              <option value="XL">SIZE XL</option>
              <option value="XXL">SIZE XXL</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "newest" | "price-asc" | "price-desc" | "name")}
              className="bg-chalk border border-charcoal/20 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-charcoal focus:outline-none focus:border-charcoal cursor-pointer"
            >
              <option value="newest">SORT: NEWEST</option>
              <option value="price-asc">PRICE: LOW-HIGH</option>
              <option value="price-desc">PRICE: HIGH-LOW</option>
              <option value="name">NAME: A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Catalog Matrix Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        {hasActiveFilters && (
          <div className="mb-6 flex items-center justify-between text-xs font-mono text-raw border-b border-charcoal/15 pb-3">
            <span>FILTERED RESULTS: {filteredProducts.length} ITEMS</span>
            <button
              onClick={clearAllFilters}
              className="text-charcoal underline hover:opacity-75 uppercase"
            >
              CLEAR ALL FILTERS [X]
            </button>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-charcoal/30 p-8 font-mono">
            <p className="text-sm uppercase font-bold text-charcoal">
              NO BLANK GARMENTS FOUND MATCHING CRITERIA.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 px-6 py-2 bg-charcoal text-chalk text-xs font-mono uppercase tracking-widest hover:bg-pitch"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-xs font-mono tracking-widest uppercase">LOADING ARCHIVE...</div>}>
      <ShopContent />
    </Suspense>
  );
}
