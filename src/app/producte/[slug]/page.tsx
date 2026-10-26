import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Producte no trobat",
    };
  }

  return {
    title: `${product.name} | Streetwear 240 GSM`,
    description: product.description.ca,
    openGraph: {
      title: `${product.name} - UrbanStyles`,
      description: product.tagline.ca,
      images: [
        {
          url: product.images[0].url,
          width: 1000,
          height: 1250,
          alt: product.images[0].alt,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Schema.org structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => img.url),
    description: product.description.ca,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "UrbanStyles",
    },
    offers: {
      "@type": "Offer",
      url: `https://urbanstyles.es/producte/${product.slug}`,
      priceCurrency: "EUR",
      price: product.price.toFixed(2),
      availability:
        product.variants.some((v) => v.stock > 0)
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "UrbanStyles",
      },
    },
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}

