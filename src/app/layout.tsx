import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanstyles.es"),
  title: {
    default: "UrbanStyles | Streetwear Contemporani & Roba Urbana Retro",
    template: "%s | UrbanStyles",
  },
  description:
    "Marca independent de streetwear inspirada en l'estètica retro dels anys 90. Camisetes pesades de 240 GSM, patronatge boxy oversized i producció acurada. Enviaments a Espanya gratuïts a partir de 50€.",
  keywords: [
    "UrbanStyles",
    "streetwear Espanya",
    "camisetes streetwear",
    "retro streetwear",
    "boxy tee",
    "heavyweight cotton 240 gsm",
    "moda urbana",
    "ropa streetwear valencia",
  ],
  authors: [{ name: "UrbanStyles Studio" }],
  creator: "UrbanStyles",
  publisher: "UrbanStyles",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "UrbanStyles | Streetwear Contemporani & Roba Urbana Retro",
    description:
      "Descobreix Drop 01: Retro Horizons. Camisetes pesades de 240 GSM amb patronatge boxy i acabats vintage.",
    url: "https://urbanstyles.es",
    siteName: "UrbanStyles",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "UrbanStyles - Drop 01 Retro Horizons",
      },
    ],
    locale: "ca_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanStyles | Streetwear Contemporani",
    description: "Camisetes pesades de 240 GSM i estètica retro urbana.",
    images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://urbanstyles.es" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-brand-bg text-brand-dark selection:bg-brand-dark selection:text-white">
        <StoreProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
