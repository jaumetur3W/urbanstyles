import { Collection, Product } from "@/types";

export const COLLECTIONS: Collection[] = [
  {
    id: "the-blank-capsule",
    slug: "the-blank-capsule",
    name: {
      ca: "The Blank Capsule: Bàsics Pesats Atemporals",
      es: "The Blank Capsule: Básicos Pesados Atemporales",
      en: "The Blank Capsule: Timeless Heavyweight Basics",
    },
    season: "ESSENTIALS COLLECTION 2026",
    description: {
      ca: "Peces bàsiques completament llises, concebudes sense estampats ni gràfics. Protagonisme absolut per a la silueta boxy, la caiguda estructural i el cotó pesat de 240 GSM.",
      es: "Prendas básicas completamente lisas, concebidas sin estampados ni gráficos. Protagonismo absoluto para la silueta boxy, la caída estructural y el algodón pesado de 240 GSM.",
      en: "Pure minimalist blanks with zero prints or graphics. Engineered around our signature boxy cut, structured drape, and 240 GSM heavyweight organic cotton.",
    },
    coverImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1800&q=85",
    itemCount: 6,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    slug: "essential-heavyweight-tee-washed-black",
    name: "Essential Heavyweight Tee — Washed Black",
    tagline: {
      ca: "Camiseta bàsica llisa de cotó pesat 240 GSM sense estampats",
      es: "Camiseta básica lisa de algodón pesado 240 GSM sin estampados",
      en: "Blank 240 GSM heavyweight cotton tee with no prints or graphics",
    },
    description: {
      ca: "La camiseta bàsica definitiva. Confeccionada amb 100% cotó orgànic d'alt gramatge (240 GSM) en to negre carbó rentat a la pedra. Superfície neta sense cap gràfic ni estampat: tota l'atenció se centra en el patronatge boxy oversize, l'espatlla caiguda i el coll acanalat gruixut que no es deforma.",
      es: "La camiseta básica definitiva. Confeccionada con 100% algodón orgánico de alto gramaje (240 GSM) en tono negro carbón lavado a la piedra. Superficie limpia sin ningún gráfico ni estampado: toda la atención se centra en el patronaje boxy oversize, el hombro caído y el cuello acanalado grueso que no se deforma.",
      en: "The definitive plain heavyweight tee. Crafted from 100% organic cotton (240 GSM) with a vintage mineral stone wash. Clean surface free from any logos or graphics, highlighting our relaxed boxy silhouette, dropped shoulders, and sturdy shape-retaining ribbed collar.",
    },
    price: 39.0,
    compareAtPrice: 45.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Negre Rentat / Washed Black",
        es: "Negro Lavado / Washed Black",
        en: "Washed Black / Charcoal",
      },
      hex: "#1A1A1A",
    },
    variants: [
      { size: "S", stock: 15 },
      { size: "M", stock: 28 },
      { size: "L", stock: 22 },
      { size: "XL", stock: 12 },
      { size: "XXL", stock: 0 }, // Esgotat per a comprovació d'estoc
    ],
    details: {
      composition: {
        ca: "100% Cotó Orgànic Penteinat (Sense Estampats)",
        es: "100% Algodón Orgánico Peinado (Sin Estampados)",
        en: "100% Combed Organic Cotton (Blank / Plain)",
      },
      weight: "240 GSM Heavyweight Jersey",
      fit: {
        ca: "Boxy fit amb caiguda folgada estructurada.",
        es: "Boxy fit con caída holgada estructurada.",
        en: "Boxy fit with structured dropped shoulders.",
      },
      care: {
        ca: "Llavar a 30°C. Assecat natural a l'ombra.",
        es: "Lavar a 30°C. Secado natural a la sombra.",
        en: "Machine wash cold at 30°C. Hang dry.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Washed Black - Camiseta Bàsica Llisa Negra",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Washed Black - Detall Coll i Teixit Llis",
      },
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Washed Black - Textura Cotó Pesat",
      },
    ],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },
  {
    id: "prod-02",
    slug: "essential-heavyweight-tee-raw-white",
    name: "Essential Heavyweight Tee — Raw Off-White",
    tagline: {
      ca: "Camiseta bàsica llisa blanc trencat vintage en cotó 250 GSM",
      es: "Camiseta básica lisa blanco roto vintage en algodón 250 GSM",
      en: "Blank vintage off-white tee in ultra-dense 250 GSM cotton",
    },
    description: {
      ca: "Pesa fonamental del fons d'armari contemporani. Blanc trencat llet sense emblanquiment agressiu químic, completament llisa. El teixit dens de 250 GSM té cos i opacitat total, evitant transparències.",
      es: "Prenda fundamental del fondo de armario contemporáneo. Blanco roto leche sin blanqueo agresivo químico, completamente lisa. El tejido denso de 250 GSM tiene cuerpo y opacidad total, evitando transparencias.",
      en: "The essential blank wardrobe foundation. Unbleached chalk off-white shade, entirely plain. The dense 250 GSM jersey offers complete opacity and heavy drape without being transparent.",
    },
    price: 39.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Blanc Trencat Brut / Raw Off-White",
        es: "Blanco Roto Crudo / Raw Off-White",
        en: "Raw Off-White Chalk",
      },
      hex: "#F4F1EA",
    },
    variants: [
      { size: "S", stock: 18 },
      { size: "M", stock: 32 },
      { size: "L", stock: 26 },
      { size: "XL", stock: 14 },
      { size: "XXL", stock: 6 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Orgànic Crut Sense Tintura Sintètica",
        es: "100% Algodón Orgánico Crudo Sin Tintura Sintética",
        en: "100% Organic Raw Cotton (Undyed)",
      },
      weight: "250 GSM Ultra-Dense Jersey",
      fit: {
        ca: "Oversized net amb màniga fins a l'alçada del colze.",
        es: "Oversized limpio con manga hasta la altura del codo.",
        en: "Clean oversized drape with elbow-length sleeves.",
      },
      care: {
        ca: "Llavar amb roba clara a 30°C.",
        es: "Lavar con ropa clara a 30°C.",
        en: "Machine wash with light colors at 30°C.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Raw Off-White - Camiseta Bàsica Llisa Blanca",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Raw Off-White - Detall Pla Minimalista",
      },
      {
        url: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Raw Off-White - Estilisme i Caiguda",
      },
    ],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },
  {
    id: "prod-03",
    slug: "essential-heavyweight-tee-concrete-gray",
    name: "Essential Heavyweight Tee — Concrete Gray",
    tagline: {
      ca: "Camiseta bàsica llisa gris ciment marbre sense marques",
      es: "Camiseta básica lisa gris cemento jaspeado sin marcas",
      en: "Blank concrete heather gray heavyweight t-shirt",
    },
    description: {
      ca: "Un bàsic de caràcter arquitectònic. Confeccionada amb una mescla subtil de cotó gris ciment melange d'acabat suau. Sense logotips visibles, ideal per combinar amb pantalons sastre, texans amples o xandall.",
      es: "Un básico de carácter arquitectónico. Confeccionada con una mezcla sutil de algodón gris cemento melange de acabado suave. Sin logotipos visibles, ideal para combinar con sastrería, vaqueros anchos o chándal.",
      en: "An architectural everyday blank. Crafted from a refined heather gray cotton with a dry, tactile handfeel. Zero outer branding, perfect for pairing with tailored trousers, baggy denim, or sweatpants.",
    },
    price: 39.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Gris Ciment / Concrete Gray",
        es: "Gris Cemento / Concrete Gray",
        en: "Concrete Heather Gray",
      },
      hex: "#828585",
    },
    variants: [
      { size: "S", stock: 12 },
      { size: "M", stock: 20 },
      { size: "L", stock: 18 },
      { size: "XL", stock: 10 },
      { size: "XXL", stock: 4 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Penteinat d'Alta Densitat",
        es: "100% Algodón Peinado de Alta Densidad",
        en: "100% High-Density Combed Cotton",
      },
      weight: "240 GSM",
      fit: {
        ca: "Boxy fit de proporció quadrada.",
        es: "Boxy fit de proporción cuadrada.",
        en: "Square-proportioned boxy fit.",
      },
      care: {
        ca: "Llavar en cicle suau a 30°C.",
        es: "Lavar en ciclo suave a 30°C.",
        en: "Gentle wash cycle at 30°C.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Concrete Gray - Camiseta Bàsica Llisa Grisa",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Concrete Gray - Lookbook Model Bàsic",
      },
    ],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },
  {
    id: "prod-04",
    slug: "essential-heavyweight-tee-muted-olive",
    name: "Essential Heavyweight Tee — Muted Olive",
    tagline: {
      ca: "Camiseta bàsica llisa verd militar rentat 240 GSM",
      es: "Camiseta básica lisa verde militar lavado 240 GSM",
      en: "Blank vintage washed military olive green heavyweight tee",
    },
    description: {
      ca: "Camiseta completament neta en verd oliva fosc. Tintada en peça i rentada amb àcid orgànic per oferir una tonalitat terrosa única i un tacte envellit des del primer ús. Sense cap estampat.",
      es: "Camiseta completamente limpia en verde oliva oscuro. Tintada en prenda y lavada con ácido orgánico para ofrecer una tonalidad terrosa única y un tacto envejecido desde la primera puesta. Sin ningún estampado.",
      en: "A clean blank statement in muted olive. Garment-dyed and enzyme-washed to create subtle tonal depth and a broken-in feel from day one. Free from prints or tags.",
    },
    price: 39.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Verd Oliva Desgastat / Muted Olive",
        es: "Verde Oliva Desgastado / Muted Olive",
        en: "Military Muted Olive",
      },
      hex: "#4D5343",
    },
    variants: [
      { size: "S", stock: 10 },
      { size: "M", stock: 18 },
      { size: "L", stock: 15 },
      { size: "XL", stock: 8 },
      { size: "XXL", stock: 0 },
    ],
    details: {
      composition: {
        ca: "100% Cotó amb Tintura en Peça",
        es: "100% Algodón con Tintura en Prenda",
        en: "100% Garment-Dyed Heavy Cotton",
      },
      weight: "240 GSM",
      fit: {
        ca: "Tall relaxat d'espatlles baixes.",
        es: "Corte relajado de hombros caídos.",
        en: "Relaxed drop-shoulder cut.",
      },
      care: {
        ca: "Llavar amb colors foscos del revés.",
        es: "Lavar con colores oscuros del revés.",
        en: "Wash cold inside out with dark colors.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Muted Olive - Camiseta Bàsica Llisa Verd Oliva",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Muted Olive - Detall Acabats i Teixit Llis",
      },
    ],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },
  {
    id: "prod-05",
    slug: "essential-heavyweight-tee-warm-sand",
    name: "Essential Heavyweight Tee — Warm Sand",
    tagline: {
      ca: "Camiseta bàsica llisa arena càlida en cotó pur 240 GSM",
      es: "Camiseta básica lisa arena cálida en algodón puro 240 GSM",
      en: "Blank warm sand / taupe heavyweight boxy t-shirt",
    },
    description: {
      ca: "To càlid mediterrani neutre. Color arena desèrtica sobre cotó pesat de 240 GSM, completament llis. Aporta lluminositat i caràcter atemporal a qualsevol combinació.",
      es: "Tono cálido mediterráneo neutro. Color arena desértica sobre algodón pesado de 240 GSM, completamente liso. Aporta luminosidad y carácter atemporal a cualquier combinación.",
      en: "A warm, neutral earthy tone. Desert sand shade on 240 GSM dense jersey, completely plain with zero branding. Delivers timeless warmth to any minimalist fit.",
    },
    price: 39.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Arena Càlida / Warm Sand",
        es: "Arena Cálida / Warm Sand",
        en: "Warm Desert Sand / Taupe",
      },
      hex: "#C5B39A",
    },
    variants: [
      { size: "S", stock: 14 },
      { size: "M", stock: 24 },
      { size: "L", stock: 20 },
      { size: "XL", stock: 10 },
      { size: "XXL", stock: 5 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Orgànic",
        es: "100% Algodón Orgánico",
        en: "100% Organic Heavy Cotton",
      },
      weight: "240 GSM",
      fit: {
        ca: "Boxy fit clàssic.",
        es: "Boxy fit clásico.",
        en: "Classic boxy fit.",
      },
      care: {
        ca: "Llavar a màquina 30°C.",
        es: "Lavar a máquina 30°C.",
        en: "Machine wash at 30°C.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Warm Sand - Camiseta Bàsica Llisa Arena",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavyweight Tee Warm Sand - Textura Teixit Llis",
      },
    ],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },
  {
    id: "prod-06",
    slug: "essential-heavyweight-hoodie-pure-black",
    name: "Essential Heavy Studio Hoodie — Pure Black",
    tagline: {
      ca: "Dessuadora bàsica llisa de 450 GSM sense cordons ni dissenys",
      es: "Sudadera básica lisa de 450 GSM sin cordones ni diseños",
      en: "Blank 450 GSM heavyweight fleece hoodie with zero prints",
    },
    description: {
      ca: "La dessuadora pesada per excel·lència. Teixit de 450 GSM ultra-gruixut amb folre raspallat càlid. Disseny completament purista: sense cordons a la caputxa, sense estampats ni brodats exteriors. Butxaca de cangur discreta i canalé d'ajust sòlid a la cintura.",
      es: "La sudadera pesada por excelencia. Tejido de 450 GSM ultra-grueso con forro cepillado cálido. Diseño completamente purista: sin cordones en la capucha, sin estampados ni bordados exteriores. Bolsillo de canguro discreto y canalé de ajuste sólido en cintura.",
      en: "The heavyweight blank fleece staple. Ultra-thick 450 GSM cross-grain fleece with brushed interior. Stringless double-layered hood, zero exterior prints or branding, spacious kangaroo pouch, and sturdy waist ribbing.",
    },
    price: 75.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "hoodies",
    color: {
      name: {
        ca: "Negre Intens / Pure Black",
        es: "Negro Intenso / Pure Black",
        en: "Pure Pitch Black",
      },
      hex: "#101012",
    },
    variants: [
      { size: "S", stock: 8 },
      { size: "M", stock: 16 },
      { size: "L", stock: 18 },
      { size: "XL", stock: 8 },
      { size: "XXL", stock: 4 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Americà de 450 GSM",
        es: "100% Algodón Americano de 450 GSM",
        en: "100% Heavy Brushed Fleece Cotton (Blank)",
      },
      weight: "450 GSM Ultra-Heavyweight",
      fit: {
        ca: "Silueta oversized amb caiguda estructurada.",
        es: "Silueta oversized con caída estructurada.",
        en: "Structured boxy oversized silhouette.",
      },
      care: {
        ca: "Llavar en fred. Assecar en pla.",
        es: "Lavar en frío. Secar en plano.",
        en: "Cold wash. Lay flat to dry.",
      },
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavy Studio Hoodie Pure Black - Dessuadora Bàsica Llisa Negra",
        isPrimary: true,
      },
      {
        url: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85",
        alt: "Essential Heavy Studio Hoodie Pure Black - Model i Caiguda",
      },
    ],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },
];

export const SHIPPING_POLICY = {
  freeShippingThreshold: 50.0,
  standardShippingRate: 4.90,
  estimatedDays: "2-4 dies laborables a Espanya peninsular",
  returnsWindowDays: 14,
};
