"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { ProductSize } from "@/types";
import { Search, X } from "lucide-react";

function ShopContent() {
  const { t, language } = useStore();
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Catalog Header */}
      <div className="mb-8 sm:mb-12 border-b border-brand-border pb-6 sm:pb-8">
        <span className="text-[11px] font-mono uppercase tracking-widest text-brand-muted">
          Catàleg Oficial UrbanStyles
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tightest text-brand-dark mt-1">
          {t.shop.title}
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted max-w-xl mt-2">
          {t.shop.subtitle}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-border">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cercar per model, teixit o estil..."
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-brand-border text-xs uppercase tracking-wider text-brand-dark placeholder:text-stone-400 focus:outline-none focus:border-brand-dark"
          />
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-brand-dark"
              aria-label="Netejar cerca"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Controls Desktop */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Category buttons */}
          <div className="inline-flex border border-brand-border bg-white text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-2 transition-colors ${
                selectedCategory === "all"
                  ? "bg-brand-dark text-white"
                  : "text-brand-dark hover:bg-stone-50"
              }`}
            >
              {t.shop.filterAll}
            </button>
            <button
              onClick={() => setSelectedCategory("tees")}
              className={`px-3 py-2 border-l border-brand-border transition-colors ${
                selectedCategory === "tees"
                  ? "bg-brand-dark text-white"
                  : "text-brand-dark hover:bg-stone-50"
              }`}
            >
              {t.shop.filterTees}
            </button>
            <button
              onClick={() => setSelectedCategory("hoodies")}
              className={`px-3 py-2 border-l border-brand-border transition-colors ${
                selectedCategory === "hoodies"
                  ? "bg-brand-dark text-white"
                  : "text-brand-dark hover:bg-stone-50"
              }`}
            >
              {t.shop.filterHoodies}
            </button>
          </div>

          {/* Size Filter Dropdown */}
          <div className="relative">
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value as ProductSize | "all")}
              className="appearance-none bg-white border border-brand-border px-3.5 py-2 pr-8 text-xs font-bold uppercase tracking-wider text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
              aria-label="Filtrar per talla"
            >
              <option value="all">Talla: Totes</option>
              <option value="S">Talla S</option>
              <option value="M">Talla M</option>
              <option value="L">Talla L</option>
              <option value="XL">Talla XL</option>
              <option value="XXL">Talla XXL</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "newest" | "price-asc" | "price-desc" | "name")}
              className="appearance-none bg-white border border-brand-border px-3.5 py-2 pr-8 text-xs font-bold uppercase tracking-wider text-brand-dark focus:outline-none focus:border-brand-dark cursor-pointer"
              aria-label="Ordenar productes"
            >
              <option value="newest">{t.shop.sortNewest}</option>
              <option value="price-asc">{t.shop.sortPriceAsc}</option>
              <option value="price-desc">{t.shop.sortPriceDesc}</option>
              <option value="name">{t.shop.sortName}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active filters pill list */}
      <div className="py-4 flex items-center justify-between text-xs text-brand-muted">
        <div>
          Mostrant <strong className="text-brand-dark">{filteredProducts.length}</strong> {t.shop.itemsCount}
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="ml-3 text-brand-accent hover:underline font-semibold"
            >
              {t.shop.clearFilters}
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white border border-dashed border-brand-border p-8 my-8">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-dark">
            {t.shop.noResults}
          </p>
          <p className="text-xs text-brand-muted mt-2">
            Prova a utilitzar termes més generals o neteja els filtres seleccionats.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-6 px-6 py-2.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
          >
            {t.shop.clearFilters}
          </button>
        </div>
      ) : (
        /* Products Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-xs font-mono tracking-widest uppercase">Carregant catàleg...</div>}>
      <ShopContent />
    </Suspense>
  );
}
