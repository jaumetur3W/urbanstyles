import { Collection, Product } from "@/types";

export const COLLECTIONS: Collection[] = [
  {
    id: "drop-01",
    slug: "drop-01-retro-horizons",
    name: {
      ca: "Drop 01: Retro Horizons",
      es: "Drop 01: Retro Horizons",
      en: "Drop 01: Retro Horizons",
    },
    season: "FOUNDATIONAL CAPSULE 2026",
    description: {
      ca: "La nostra primera entrega. Inspirada en la cultura club dels anys 90, les tipografies crues i el cotó pesat de 240 GSM amb rentat vintage.",
      es: "Nuestra primera entrega. Inspirada en la cultura club de los años 90, las tipografías crudas y el algodón pesado de 240 GSM con lavado vintage.",
      en: "Our inaugural capsule drop. Rooted in 90s club culture, distressed raw lettering, and 240 GSM vintage-washed heavy cotton.",
    },
    coverImage: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1800&q=85",
    itemCount: 6,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    slug: "acid-dreamer-heavyweight-tee",
    name: "Acid Dreamer Heavyweight Tee",
    tagline: {
      ca: "Camiseta de cotó pesat 240 GSM amb gràfica tipogràfica posterior",
      es: "Camiseta de algodón pesado 240 GSM con gráfica tipográfica posterior",
      en: "240 GSM heavyweight cotton tee with back typographic statement",
    },
    description: {
      ca: "Camiseta streetwear de tall ampli 'boxy fit' confeccionada amb 100% cotó orgànic d'alt gramatge (240 GSM). Tractament de rentat mineral amb textura desgastada suau al tacte. Serigrafia artesanal d'alta densitat a l'esquena i monograma subtil al pit.",
      es: "Camiseta streetwear de corte amplio 'boxy fit' confeccionada con 100% algodón orgánico de alto gramaje (240 GSM). Tratamiento de lavado mineral con textura desgastada suave al tacto. Serigrafía artesanal de alta densidad en espalda y monograma sutil en pecho.",
      en: "Boxy-cut streetwear tee crafted from 100% organic heavy cotton (240 GSM). Mineral vintage wash treatment offering a broken-in handfeel. High-density screenprint on back and minimalist chest branding.",
    },
    price: 42.0,
    compareAtPrice: 50.0,
    currency: "EUR",
    collectionId: "drop-01",
    category: "tees",
    color: {
      name: {
        ca: "Negre Desgastat / Washed Black",
        es: "Negro Desgastado / Washed Black",
        en: "Washed Black / Charcoal",
      },
      hex: "#1A1A1A",
    },
    variants: [
      { size: "S", stock: 12 },
      { size: "M", stock: 24 },
      { size: "L", stock: 18 },
      { size: "XL", stock: 8 },
      { size: "XXL", stock: 0 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Orgànic Penteinat",
        es: "100% Algodón Orgánico Peinado",
        en: "100% Combed Organic Cotton",
      },
      weight: "240 GSM Heavyweight Jersey",
      fit: {
        ca: "Boxy fit amb espatlla caiguda. Si prefereixes un estil més ajustat, demana una talla menys.",
        es: "Boxy fit con hombro caído. Si prefieres un estilo más ajustado, pide una talla menos.",
        en: "Boxy fit with dropped shoulders. Size down for a regular fit.",
      },
      care: {
        ca: "Llavar del revés a màxim 30°C. No utilitzar assecadora. Planxar a baixa temperatura del revés.",
        es: "Lavar del revés a máximo 30°C. No usar secadora. Planchar a baja temperatura del revés.",
        en: "Machine wash cold inside out (30°C max). Do not tumble dry. Cool iron on reverse.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
        alt: "Acid Dreamer Heavyweight Tee - Lookbook Editorial Frontal",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=85",
        alt: "Acid Dreamer Heavyweight Tee - Detall Serigrafia Esquena",
      },
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
        alt: "Acid Dreamer Heavyweight Tee - Textura Cotó 240 GSM",
      },
    ],
    isNewArrival: true,
    isDropExclusive: true,
    published: true,
  },
  {
    id: "prod-02",
    slug: "echoes-92-vintage-washed-tee",
    name: "Echoes of '92 Vintage Washed Tee",
    tagline: {
      ca: "Inspirada en l'escena rave urbana de principis dels 90",
      es: "Inspirada en la escena rave urbana de principios de los 90",
      en: "Inspired by early 90s European rave and counter-culture",
    },
    description: {
      ca: "Pesa insígnia de la col·lecció Drop 01. Teixit de cotó premium amb tintura en peça i rentat a la pedra per aconseguir un aspecte retro autèntic. Coll acanalat reforçat d'1.2 polzades que manté la forma.",
      es: "Prenda insignia de la colección Drop 01. Tejido de algodón premium con tintura en prenda y lavado a la piedra para un aspecto retro auténtico. Cuello acanalado reforzado de 1.2 pulgadas que mantiene la forma.",
      en: "Signature statement piece from Drop 01. Premium cotton fabric piece-dyed and stone-washed for an authentic retro look. 1.2-inch reinforced ribbed collar that preserves its shape.",
    },
    price: 45.0,
    currency: "EUR",
    collectionId: "drop-01",
    category: "tees",
    color: {
      name: {
        ca: "Blanc Trencat Vintage / Off-White",
        es: "Blanco Roto Vintage / Off-White",
        en: "Off-White Chalk",
      },
      hex: "#F2EFE9",
    },
    variants: [
      { size: "S", stock: 15 },
      { size: "M", stock: 30 },
      { size: "L", stock: 25 },
      { size: "XL", stock: 14 },
      { size: "XXL", stock: 5 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Orgànic amb tintura natural",
        es: "100% Algodón Orgánico con tintura natural",
        en: "100% Organic Cotton with natural garment dye",
      },
      weight: "250 GSM Ultra-Heavyweight",
      fit: {
        ca: "Oversized relaxat amb màniga ampla fins al colze.",
        es: "Oversized relajado con manga ancha hasta el codo.",
        en: "Relaxed oversized with elbow-length sleeves.",
      },
      care: {
        ca: "Llavar amb colors similars a 30°C. Assecat natural a l'ombra.",
        es: "Lavar con colores similares a 30°C. Secado natural a la sombra.",
        en: "Wash with like colors at 30°C. Hang dry in shade.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=85",
        alt: "Echoes of '92 Vintage Washed Tee - Model Lookbook Estudi",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&w=1000&q=85",
        alt: "Echoes of '92 Vintage Washed Tee - Estilisme Carrer i Caiguda",
      },
      {
        url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=85",
        alt: "Echoes of '92 Vintage Washed Tee - Detall Coll Acanalat",
      },
    ],
    isNewArrival: true,
    isDropExclusive: true,
    published: true,
  },
  {
    id: "prod-03",
    slug: "club-nocturne-boxy-tee",
    name: "Club Nocturne Boxy Tee",
    tagline: {
      ca: "Minimalisme fosc amb tipografia tonal refractària",
      es: "Minimalismo oscuro con tipografía tonal refractaria",
      en: "Dark minimalism featuring tonal refractive print",
    },
    description: {
      ca: "Concebuda per a la nit urbana. Estructura rectangular, caiguda recta i estampat tonal subtil al revers. Un bàsic de caràcter industrial que combina amb qualsevol conjunt de carrer.",
      es: "Concebida para la noche urbana. Estructura rectangular, caída recta y estampado tonal sutil en el reverso. Un básico de carácter industrial que combina con cualquier conjunto urbano.",
      en: "Engineered for nocturnal cityscapes. Clean rectangular drape with subtle tonal screenprint on the reverse. An industrial staple that anchors any streetwear fit.",
    },
    price: 42.0,
    currency: "EUR",
    collectionId: "drop-01",
    category: "tees",
    color: {
      name: {
        ca: "Gris Ciment / Concrete Gray",
        es: "Gris Cemento / Concrete Gray",
        en: "Concrete Heather Gray",
      },
      hex: "#75787B",
    },
    variants: [
      { size: "S", stock: 10 },
      { size: "M", stock: 20 },
      { size: "L", stock: 15 },
      { size: "XL", stock: 10 },
      { size: "XXL", stock: 4 },
    ],
    details: {
      composition: {
        ca: "100% Cotó d'alta densitat",
        es: "100% Algodón de alta densidad",
        en: "100% High-Density Carded Cotton",
      },
      weight: "240 GSM",
      fit: {
        ca: "Boxy fit clàssic. Ample de pit i llarg truncat 'cropped length'.",
        es: "Boxy fit clásico. Ancho de pecho y largo truncado 'cropped length'.",
        en: "Classic boxy fit. Wide chest with slightly cropped body length.",
      },
      care: {
        ca: "Llavar a màquina 30°C. No usar lleixiu ni assecadora.",
        es: "Lavar a máquina 30°C. No usar lejía ni secadora.",
        en: "Machine wash at 30°C. Do not bleach or tumble dry.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=1000&q=85",
        alt: "Club Nocturne Boxy Tee - Lookbook Model Urbà",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?auto=format&fit=crop&w=1000&q=85",
        alt: "Club Nocturne Boxy Tee - Estilisme Urbà Nocturn",
      },
      {
        url: "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?auto=format&fit=crop&w=1000&q=85",
        alt: "Club Nocturne Boxy Tee - Detall Patronatge",
      },
    ],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },
  {
    id: "prod-04",
    slug: "archive-monogram-raw-tee",
    name: "Archive Monogram Raw Tee",
    tagline: {
      ca: "El monograma original d'UrbanStyles en serigrafia d'arxiu",
      es: "El monograma original de UrbanStyles en serigrafía de archivo",
      en: "UrbanStyles original archive monogram in vintage screenprint",
    },
    description: {
      ca: "Puresa de línies i caràcter retro. Presenta l'emblema fundacional 'US' d'UrbanStyles en format brodat d'alta precisió al pit i etiqueta teixida al baix inferior.",
      es: "Pureza de líneas y carácter retro. Presenta el emblema fundacional 'US' de UrbanStyles en formato bordado de alta precisión en el pecho y etiqueta tejida en el bajo.",
      en: "Clean lines meet heritage aesthetic. Features the foundational 'US' emblem with precision chain-stitch chest embroidery and woven hem label.",
    },
    price: 39.0,
    currency: "EUR",
    collectionId: "drop-01",
    category: "tees",
    color: {
      name: {
        ca: "Verd Oliva / Muted Olive",
        es: "Verde Oliva / Muted Olive",
        en: "Military Olive Green",
      },
      hex: "#4B5320",
    },
    variants: [
      { size: "S", stock: 8 },
      { size: "M", stock: 16 },
      { size: "L", stock: 12 },
      { size: "XL", stock: 6 },
      { size: "XXL", stock: 0 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Penteinat",
        es: "100% Algodón Peinado",
        en: "100% Ringspun Cotton",
      },
      weight: "230 GSM",
      fit: {
        ca: "Relaxed urban cut amb costures dobles reforçades.",
        es: "Relaxed urban cut con costuras dobles reforzadas.",
        en: "Relaxed urban cut with reinforced twin-needle stitching.",
      },
      care: {
        ca: "Llavar del revés amb aigua freda.",
        es: "Lavar del revés con agua fría.",
        en: "Wash cold inside-out.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?auto=format&fit=crop&w=1000&q=85",
        alt: "Archive Monogram Raw Tee - Estètica Eme Studios Lookbook",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=1000&q=85",
        alt: "Archive Monogram Raw Tee - Perspectiva Moda Carrer",
      },
      {
        url: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1000&q=85",
        alt: "Archive Monogram Raw Tee - Detall Brodat d'Arxiu",
      },
    ],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },
  {
    id: "prod-05",
    slug: "solar-drift-vintage-tee",
    name: "Solar Drift Distressed Tee",
    tagline: {
      ca: "Degradat solar retro amb tractament d'envellit manual",
      es: "Degradado solar retro con tratamiento de envejecido manual",
      en: "Sun-faded retro wash with handcrafted vintage treatment",
    },
    description: {
      ca: "Camiseta amb procés d'envellit a mà que imita dècades d'exposició al sol californià i a l'asfalt. Cada unitat té matisos irrepetibles en el desgast del coll i punys.",
      es: "Camiseta con proceso de envejecido a mano que imita décadas de exposición al sol y al asfalto. Cada unidad tiene matices irrepetibles en el desgaste de cuello y puños.",
      en: "Hand-distressed treatment emulating years of sun fade and pavement wear. Each individual piece exhibits unique distressing across collar and hems.",
    },
    price: 44.0,
    currency: "EUR",
    collectionId: "drop-01",
    category: "tees",
    color: {
      name: {
        ca: "Terracota Rentat / Sun-Baked Terracotta",
        es: "Terracota Lavado / Sun-Baked Terracotta",
        en: "Sun-Baked Terracotta",
      },
      hex: "#C25E3E",
    },
    variants: [
      { size: "S", stock: 10 },
      { size: "M", stock: 18 },
      { size: "L", stock: 14 },
      { size: "XL", stock: 8 },
      { size: "XXL", stock: 2 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Orgànic Premium",
        es: "100% Algodón Orgánico Premium",
        en: "100% Organic Heavy Cotton",
      },
      weight: "240 GSM",
      fit: {
        ca: "Boxy relaxat.",
        es: "Boxy relajado.",
        en: "Relaxed boxy.",
      },
      care: {
        ca: "Llavar a màxima suavitat a 30°C.",
        es: "Lavar en ciclo suave a 30°C.",
        en: "Gentle cycle at 30°C.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=1000&q=85",
        alt: "Solar Drift Distressed Tee - Vista Lookbook Editorial",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=1000&q=85",
        alt: "Solar Drift Distressed Tee - Detall Llum Càlida i Color",
      },
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
        alt: "Solar Drift Distressed Tee - Detall Desgastat Vintage",
      },
    ],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },
  {
    id: "prod-06",
    slug: "heavy-studio-hoodie",
    name: "Heavy Studio Vintage Hoodie",
    tagline: {
      ca: "Dessuadora ultra-pesada de 450 GSM amb caputxa de doble capa",
      es: "Sudadera ultra-pesada de 450 GSM con capucha de doble capa",
      en: "450 GSM ultra-heavyweight fleece hoodie with double-layer hood",
    },
    description: {
      ca: "La companya perfecta per a les camisetes de Drop 01. Teixit de 450 GSM sense cordons a la caputxa per a una línia purista, butxaca de cangur ampla i canalé d'ajust ferm.",
      es: "La compañera perfecta para las camisetas de Drop 01. Tejido de 450 GSM sin cordones en la capucha para una línea purista, bolsillo de canguro amplio y canalé de ajuste firme.",
      en: "The heavyweight staple designed to pair with Drop 01 tees. 450 GSM cross-grain fleece, clean stringless hood silhouette, oversized kangaroo pouch, and sturdy ribbing.",
    },
    price: 79.0,
    currency: "EUR",
    collectionId: "drop-01",
    category: "hoodies",
    color: {
      name: {
        ca: "Negre Carboni / Carbon Black",
        es: "Negro Carbón / Carbon Black",
        en: "Carbon Pitch Black",
      },
      hex: "#121214",
    },
    variants: [
      { size: "S", stock: 6 },
      { size: "M", stock: 12 },
      { size: "L", stock: 15 },
      { size: "XL", stock: 7 },
      { size: "XXL", stock: 3 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Americà Raspallat",
        es: "100% Algodón Americano Cepillado",
        en: "100% Heavy Brushed Fleece Cotton",
      },
      weight: "450 GSM Ultra-Heavyweight",
      fit: {
        ca: "Oversized amb caiguda estructurada.",
        es: "Oversized con caída estructurada.",
        en: "Structured oversized silhouette.",
      },
      care: {
        ca: "Llavar en fred. Assecar en horitzontal.",
        es: "Lavar en frío. Secar en plano.",
        en: "Cold wash. Lay flat to dry.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=85",
        alt: "Heavy Studio Vintage Hoodie - Model Oversize Nude Project Fit",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1000&q=85",
        alt: "Heavy Studio Vintage Hoodie - Esquena i Silueta Caputxa Doble",
      },
      {
        url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85",
        alt: "Heavy Studio Vintage Hoodie - Detall Butxaca Cangur i Acabats",
      },
    ],
    isNewArrival: true,
    isDropExclusive: true,
    published: true,
  },
];

export const SHIPPING_POLICY = {
  freeShippingThreshold: 50.0,
  standardShippingRate: 4.90,
  estimatedDays: "2-4 dies laborables a Espanya peninsular",
  returnsWindowDays: 14,
};
