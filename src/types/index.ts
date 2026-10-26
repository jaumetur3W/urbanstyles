export type Language = 'ca' | 'es' | 'en';

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductVariantStock {
  size: ProductSize;
  stock: number;
}

export interface LocalizedString {
  ca: string;
  es: string;
  en: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  price: number; // in EUR (e.g. 42.00)
  compareAtPrice?: number;
  currency: 'EUR';
  images: {
    url: string;
    alt: string;
    isPrimary?: boolean;
  }[];
  collectionId: string;
  category: 'tees' | 'hoodies' | 'knitwear' | 'accessories';
  variants: ProductVariantStock[];
  color: {
    name: LocalizedString;
    hex: string;
  };
  details: {
    composition: LocalizedString;
    weight: string; // e.g. "240 GSM Heavyweight Cotton"
    fit: LocalizedString; // e.g. "Boxy / Relaxed Streetwear Fit"
    care: LocalizedString;
  };
  isNewArrival?: boolean;
  isDropExclusive?: boolean;
  published: boolean;
}

export interface Collection {
  id: string;
  slug: string;
  name: LocalizedString;
  season: string;
  description: LocalizedString;
  coverImage: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  selectedSize: ProductSize;
  quantity: number;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  postalCode: string;
  city: string;
  province: string;
  country: string; // Defaults to "ES"
  notes?: string;
}

export type PaymentMethodType = 'stripe' | 'paypal' | 'pickup' | 'cod';

export interface Order {
  id: string;
  orderNumber: string;
  items: {
    productId: string;
    productName: string;
    productSlug: string;
    image: string;
    size: ProductSize;
    unitPrice: number;
    quantity: number;
    total: number;
  }[];
  subtotal: number;
  shippingCost: number;
  freeShippingApplied: boolean;
  total: number;
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethodType;
  paymentStatus: 'pending' | 'completed' | 'failed' | 'requires_action';
  createdAt: string;
}

