import { Collection, Product } from "@/types";

// TWO UNIFIED CANONICAL IMAGES SHARED ACROSS ALL PRODUCTS (AS REQUESTED)
const UNIFIED_PRIMARY_IMAGE = {
  url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85",
  alt: "UrbanStyles Atelier Heavyweight Blank Essential - Primary Lookbook",
  isPrimary: true,
};

const UNIFIED_HOVER_IMAGE = {
  url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=85",
  alt: "UrbanStyles Atelier Heavyweight Blank Essential - Hover Detail View",
};

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
    itemCount: 16,
  },
];

export const PRODUCTS: Product[] = [
  // 01. Washed Black
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
      ca: "La camiseta bàsica definitiva en negre rentat mineral. Superfície llisa neta de cotó pesat de 240 GSM amb patronatge boxy relaxat i coll gruixut de doble costura que no cedeix.",
      es: "La camiseta básica definitiva en negro lavado mineral. Superficie lisa limpia de algodón pesado de 240 GSM con patronaje boxy relajado y cuello grueso de doble costura que no cede.",
      en: "The definitive plain heavyweight tee in washed black. Dense 240 GSM combed cotton jersey, boxy cut, dropped shoulders, and sturdy shape-retaining ribbed collar.",
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
      { size: "XXL", stock: 0 },
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
        ca: "Llavar a 30°C. Assecat natural.",
        es: "Lavar a 30°C. Secado natural.",
        en: "Machine wash cold at 30°C. Hang dry.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },

  // 02. Raw Off-White
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
      ca: "Pesa fonamental del fons d'armari en blanc trencat llet. Teixit ultra-dens de 250 GSM opac i amb pes, sense cap transparència.",
      es: "Prenda fundamental del fondo de armario en blanco roto leche. Tejido ultra-denso de 250 GSM opaco y con peso, sin ninguna transparencia.",
      en: "The essential blank wardrobe foundation in chalk off-white. Ultra-dense 250 GSM jersey offering complete opacity and structured drape.",
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
        ca: "Oversized net amb màniga fins al colze.",
        es: "Oversized limpio con manga hasta el codo.",
        en: "Clean oversized drape with elbow-length sleeves.",
      },
      care: {
        ca: "Llavar amb colors clars a 30°C.",
        es: "Lavar con colores claros a 30°C.",
        en: "Machine wash with light colors at 30°C.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },

  // 03. Concrete Gray
  {
    id: "prod-03",
    slug: "essential-heavyweight-tee-concrete-gray",
    name: "Essential Heavyweight Tee — Concrete Gray",
    tagline: {
      ca: "Camiseta bàsica llisa gris ciment melange d'alta densitat",
      es: "Camiseta básica lisa gris cemento jaspeado de alta densidad",
      en: "Blank concrete heather gray heavyweight t-shirt",
    },
    description: {
      ca: "To ciment industrial atemporal. Mescla subtil de cotó gris melange amb acabat suau i tacte sec, completament llisa.",
      es: "Tono cemento industrial atemporal. Mezcla sutil de algodón gris melange con acabado suave y tacto seco, completamente lisa.",
      en: "An architectural everyday blank in heather concrete gray. Tactile dry handfeel, zero logos, designed to anchor any minimalist rotation.",
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
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },

  // 04. Muted Olive
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
      ca: "To oliva fosc militar tenyit en peça amb rentat enzimàtic. Aconsegueix una profunditat de color terrosa sense cap impressió.",
      es: "Tono oliva oscuro militar teñido en prenda con lavado enzimático. Consigue una profundidad de color terrosa sin ninguna impresión.",
      en: "A clean blank statement in muted olive green. Enzyme-washed to create tonal depth and a broken-in feel from day one.",
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
        ca: "Llavar en fred amb colors foscos.",
        es: "Lavar en frío con colores oscuros.",
        en: "Wash cold inside out with dark colors.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },

  // 05. Warm Sand
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
      ca: "To arena desèrtica sobre cotó pesat de 240 GSM. Lluminositat càlida i caràcter atemporal sense logos.",
      es: "Tono arena desértica sobre algodón pesado de 240 GSM. Luminosidad cálida y carácter atemporal sin logos.",
      en: "A warm, neutral desert sand shade on 240 GSM dense jersey. Timeless warmth to elevate any plain layering fit.",
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
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },

  // 06. Vintage Navy
  {
    id: "prod-06",
    slug: "essential-heavyweight-tee-vintage-navy",
    name: "Essential Heavyweight Tee — Vintage Navy",
    tagline: {
      ca: "Camiseta bàsica llisa blau marí rentat 240 GSM",
      es: "Camiseta básica lisa azul marino lavado 240 GSM",
      en: "Blank vintage washed dark navy blue heavyweight tee",
    },
    description: {
      ca: "Blau marí fosc amb rentat mineral que suavitza el to fins a una tonalitat de nit urbana. Tall boxy ampli i costures reforçades.",
      es: "Azul marino oscuro con lavado mineral que suaviza el tono hacia una tonalidad de noche urbana. Corte boxy amplio y costuras reforzadas.",
      en: "Subdued deep vintage navy treated with mineral softening. Square boxy silhouette with reinforced seams.",
    },
    price: 39.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Blau Marí Rentat / Vintage Navy",
        es: "Azul Marino Lavado / Vintage Navy",
        en: "Vintage Dark Navy",
      },
      hex: "#1E2530",
    },
    variants: [
      { size: "S", stock: 12 },
      { size: "M", stock: 22 },
      { size: "L", stock: 16 },
      { size: "XL", stock: 8 },
      { size: "XXL", stock: 2 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Penteinat",
        es: "100% Algodón Peinado",
        en: "100% Combed Heavy Cotton",
      },
      weight: "240 GSM",
      fit: {
        ca: "Boxy fit estructurat.",
        es: "Boxy fit estructurado.",
        en: "Structured boxy fit.",
      },
      care: {
        ca: "Llavar del revés a 30°C.",
        es: "Lavar del revés a 30°C.",
        en: "Machine wash cold inside out.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },

  // 07. Aged Earth Brown
  {
    id: "prod-07",
    slug: "essential-heavyweight-tee-aged-brown",
    name: "Essential Heavyweight Tee — Aged Earth Brown",
    tagline: {
      ca: "Camiseta bàsica llisa marró terra fosc d'arrel brutalista",
      es: "Camiseta básica lisa marrón tierra oscuro de raíz brutalista",
      en: "Blank aged earth brown heavyweight boxy tee",
    },
    description: {
      ca: "Color xocolata amarga terrosa amb desgast vintage als extrems del coll i vora. Sense cap gràfic, pura textura.",
      es: "Color chocolate amargo terroso con desgaste vintage en los extremos del cuello y bajo. Sin ningún gráfico, pura textura.",
      en: "Dark bitter earth brown with subtle distress wash at hems. Completely plain, pure raw texture.",
    },
    price: 39.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Marró Terra / Aged Earth Brown",
        es: "Marrón Tierra / Aged Earth Brown",
        en: "Aged Earth Brown",
      },
      hex: "#3D312A",
    },
    variants: [
      { size: "S", stock: 9 },
      { size: "M", stock: 15 },
      { size: "L", stock: 14 },
      { size: "XL", stock: 6 },
      { size: "XXL", stock: 0 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Orgànic Garment-Dyed",
        es: "100% Algodón Orgánico Garment-Dyed",
        en: "100% Organic Garment-Dyed Cotton",
      },
      weight: "240 GSM",
      fit: {
        ca: "Relaxed boxy.",
        es: "Relaxed boxy.",
        en: "Relaxed boxy cut.",
      },
      care: {
        ca: "Llavar a baixa temperatura.",
        es: "Lavar a baja temperatura.",
        en: "Cool gentle wash.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },

  // 08. Dusty Charcoal
  {
    id: "prod-08",
    slug: "essential-heavyweight-tee-dusty-charcoal",
    name: "Essential Heavyweight Tee — Dusty Charcoal",
    tagline: {
      ca: "Camiseta bàsica llisa grafit mineral 240 GSM",
      es: "Camiseta básica lisa grafito mineral 240 GSM",
      en: "Blank dusty charcoal mineral wash heavyweight tee",
    },
    description: {
      ca: "Entremig del negre i el gris antracita. Tintat amb pigments de sutge mineral per a un to fumat impecable.",
      es: "A medio camino entre el negro y el gris antracita. Tintado con pigmentos de hollín mineral para un tono ahumado impecable.",
      en: "Midway between deep pitch black and raw charcoal. Mineral soot pigments create an effortless smoky haze.",
    },
    price: 39.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Grafit Fumat / Dusty Charcoal",
        es: "Grafito Ahumado / Dusty Charcoal",
        en: "Dusty Charcoal",
      },
      hex: "#2B2B2D",
    },
    variants: [
      { size: "S", stock: 14 },
      { size: "M", stock: 20 },
      { size: "L", stock: 18 },
      { size: "XL", stock: 10 },
      { size: "XXL", stock: 3 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Penteinat",
        es: "100% Algodón Peinado",
        en: "100% Combed Heavy Cotton",
      },
      weight: "240 GSM",
      fit: {
        ca: "Tall boxy americà.",
        es: "Corte boxy americano.",
        en: "American boxy proportions.",
      },
      care: {
        ca: "Llavar a màquina en fred.",
        es: "Lavar a máquina en frío.",
        en: "Machine wash cold.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },

  // 09. Cropped Boxy Tee — Chalk Bone
  {
    id: "prod-09",
    slug: "cropped-boxy-tee-chalk-bone",
    name: "Cropped Boxy Tee — Chalk Bone",
    tagline: {
      ca: "Camiseta bàsica de tall curt truncat 'cropped' en cotó 250 GSM",
      es: "Camiseta básica de corte corto truncado 'cropped' en algodón 250 GSM",
      en: "Blank wide cropped heavyweight tee in 250 GSM chalk bone",
    },
    description: {
      ca: "Silueta contemporània truncada: pit ampli i llargada reduïda que descansa just sobre el cinturó. Patronatge d'alta costura urbana en blanc os.",
      es: "Silueta contemporánea truncada: pecho amplio y longitud reducida que descansa justo sobre el cinturón. Patronaje de alta costura urbana en blanco hueso.",
      en: "The modern wide-and-short silhouette: generous chest width with a cropped hem sitting flush above the beltline. High-fashion streetwear patterning in chalk bone.",
    },
    price: 42.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Blanc Os / Chalk Bone",
        es: "Blanco Hueso / Chalk Bone",
        en: "Chalk Bone",
      },
      hex: "#EDEAE1",
    },
    variants: [
      { size: "S", stock: 12 },
      { size: "M", stock: 24 },
      { size: "L", stock: 16 },
      { size: "XL", stock: 8 },
      { size: "XXL", stock: 0 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Orgànic Ultra-Pesat",
        es: "100% Algodón Orgánico Ultra-Pesado",
        en: "100% Ultra-Heavyweight Organic Cotton",
      },
      weight: "250 GSM",
      fit: {
        ca: "Cropped boxy fit (ample de pit, cos curt).",
        es: "Cropped boxy fit (ancho de pecho, cuerpo corto).",
        en: "Cropped boxy fit (wide body, truncated length).",
      },
      care: {
        ca: "Llavar a 30°C del revés.",
        es: "Lavar a 30°C del revés.",
        en: "Wash cold inside out.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },

  // 10. Cropped Boxy Tee — Pitch Black
  {
    id: "prod-10",
    slug: "cropped-boxy-tee-pitch-black",
    name: "Cropped Boxy Tee — Pitch Black",
    tagline: {
      ca: "Camiseta bàsica de tall truncat en negre profund pur 250 GSM",
      es: "Camiseta básica de corte truncado en negro profundo puro 250 GSM",
      en: "Blank wide cropped heavyweight tee in 250 GSM pitch black",
    },
    description: {
      ca: "La silueta cropped en la seua versió més fosca. Caiguda recta rígida, espatlla caiguda pronunciada i vora inferior neta sense doblec visible.",
      es: "La silueta cropped en su versión más oscura. Caída recta rígida, hombro caído pronunciado y bajo limpio sin dobladillo visible.",
      en: "The structured cropped silhouette rendered in deep pitch black. Rigid drape, dropped shoulders, and sharp clean waistline.",
    },
    price: 42.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Negre Profund / Pitch Black",
        es: "Negro Profundo / Pitch Black",
        en: "Pitch Black",
      },
      hex: "#0A0A0A",
    },
    variants: [
      { size: "S", stock: 16 },
      { size: "M", stock: 26 },
      { size: "L", stock: 20 },
      { size: "XL", stock: 10 },
      { size: "XXL", stock: 4 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Penteinat Dense Jersey",
        es: "100% Algodón Peinado Dense Jersey",
        en: "100% Dense Combed Jersey Cotton",
      },
      weight: "250 GSM",
      fit: {
        ca: "Cropped boxy.",
        es: "Cropped boxy.",
        en: "Cropped boxy.",
      },
      care: {
        ca: "Llavar en fred.",
        es: "Lavar en frío.",
        en: "Cold gentle wash.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },

  // 11. Heavy Ribbed Tank — Raw White
  {
    id: "prod-11",
    slug: "heavy-ribbed-tank-raw-white",
    name: "Heavy Ribbed Tank Top — Raw White",
    tagline: {
      ca: "Samarreta de tirants bàsica llisa de canalé pesat 280 GSM",
      es: "Camiseta de tirantes básica lisa de canalé pesado 280 GSM",
      en: "Blank 280 GSM heavy ribbed cotton tank top in raw white",
    },
    description: {
      ca: "Bàsic d'estiu i entretemps d'alta densitat. Cotó acanalat 2x1 de 280 GSM amb coll tancat i tirant ample que estilitza la silueta.",
      es: "Básico de verano y entretiempo de alta densidad. Algodón acanalado 2x1 de 280 GSM con cuello cerrado y tirante ancho que estiliza la silueta.",
      en: "Heavyweight summer and layering blank. Dense 280 GSM 2x1 rib knit with a higher neckline and structured wide straps.",
    },
    price: 29.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Blanc Crut / Raw White",
        es: "Blanco Crudo / Raw White",
        en: "Raw White",
      },
      hex: "#F9F8F5",
    },
    variants: [
      { size: "S", stock: 15 },
      { size: "M", stock: 25 },
      { size: "L", stock: 20 },
      { size: "XL", stock: 10 },
      { size: "XXL", stock: 2 },
    ],
    details: {
      composition: {
        ca: "95% Cotó Orgànic, 5% Elastà d'Ajust Ferm",
        es: "95% Algodón Orgánico, 5% Elastano de Ajuste Firme",
        en: "95% Organic Cotton, 5% Elastic Sturdy Fit",
      },
      weight: "280 GSM Heavy Rib Knit",
      fit: {
        ca: "Ajustat al tors amb caiguda sòlida.",
        es: "Ajustado al torso con caída sólida.",
        en: "Fitted torso with heavy body.",
      },
      care: {
        ca: "Llavar a 30°C.",
        es: "Lavar a 30°C.",
        en: "Machine wash at 30°C.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },

  // 12. Heavy Ribbed Tank — Washed Black
  {
    id: "prod-12",
    slug: "heavy-ribbed-tank-washed-black",
    name: "Heavy Ribbed Tank Top — Washed Black",
    tagline: {
      ca: "Samarreta de tirants bàsica llisa de canalé en negre rentat 280 GSM",
      es: "Camiseta de tirantes básica lisa de canalé en negro lavado 280 GSM",
      en: "Blank 280 GSM heavy ribbed cotton tank top in washed black",
    },
    description: {
      ca: "La versió en negre rentat de la nostra samarreta de tirants de canalé 280 GSM. Elàstica, ferma i sense deformacions.",
      es: "La versión en negro lavado de nuestra camiseta de tirantes de canalé 280 GSM. Elástica, firme y sin deformaciones.",
      en: "The washed black rendition of our 280 GSM heavy rib tank. Clean lines, resilient ribbing that retains tension.",
    },
    price: 29.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "tees",
    color: {
      name: {
        ca: "Negre Rentat / Washed Black",
        es: "Negro Lavado / Washed Black",
        en: "Washed Black",
      },
      hex: "#1A1A1A",
    },
    variants: [
      { size: "S", stock: 18 },
      { size: "M", stock: 30 },
      { size: "L", stock: 22 },
      { size: "XL", stock: 12 },
      { size: "XXL", stock: 4 },
    ],
    details: {
      composition: {
        ca: "95% Cotó Penteinat, 5% Elastà",
        es: "95% Algodón Peinado, 5% Elastano",
        en: "95% Combed Cotton, 5% Elastane",
      },
      weight: "280 GSM Ribbed",
      fit: {
        ca: "Ajust estructurat.",
        es: "Ajuste estructurado.",
        en: "Structured fitted silhouette.",
      },
      care: {
        ca: "Llavar en fred.",
        es: "Lavar en frío.",
        en: "Machine wash cold.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },

  // 13. Heavy Studio Blank Hoodie — Pitch Black
  {
    id: "prod-13",
    slug: "heavy-studio-hoodie-pitch-black",
    name: "Heavy Studio Blank Hoodie — Pitch Black",
    tagline: {
      ca: "Dessuadora bàsica llisa de 450 GSM sense cordons ni dissenys",
      es: "Sudadera básica lisa de 450 GSM sin cordones ni diseños",
      en: "Blank 450 GSM heavyweight fleece hoodie with zero prints",
    },
    description: {
      ca: "La dessuadora pesada per excel·lència. Teixit de 450 GSM ultra-gruixut amb folre raspallat càlid. Sense cordons a la caputxa, sense estampats ni brodats exteriors.",
      es: "La sudadera pesada por excelencia. Tejido de 450 GSM ultra-grueso con forro cepillado cálido. Sin cordones en la capucha, sin estampados ni bordados exteriores.",
      en: "The heavyweight blank fleece staple. Ultra-thick 450 GSM cross-grain fleece, stringless double-layered hood, and zero exterior graphics.",
    },
    price: 75.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "hoodies",
    color: {
      name: {
        ca: "Negre Intens / Pitch Black",
        es: "Negro Intenso / Pitch Black",
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
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },

  // 14. Heavy Studio Blank Hoodie — Heather Gray
  {
    id: "prod-14",
    slug: "heavy-studio-hoodie-washed-gray",
    name: "Heavy Studio Blank Hoodie — Heather Gray",
    tagline: {
      ca: "Dessuadora bàsica llisa de 450 GSM gris ciment clàssic",
      es: "Sudadera básica lisa de 450 GSM gris cemento clásico",
      en: "Blank 450 GSM heavyweight fleece hoodie in classic heather gray",
    },
    description: {
      ca: "La clàssica dessuadora d'atletisme universitari reconvertida en patró d'streetwear contemporani. Folre interior ultra-suau de 450 GSM en gris ciment melange.",
      es: "La clásica sudadera de atletismo universitario reconvertida en patrón de streetwear contemporáneo. Forro interior ultra-suave de 450 GSM en gris cemento melange.",
      en: "The collegiate athletic staple reimagined through boxy avant-garde proportions. Thick 450 GSM brushed heather gray fleece.",
    },
    price: 75.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "hoodies",
    color: {
      name: {
        ca: "Gris Ciment / Heather Gray",
        es: "Gris Cemento / Heather Gray",
        en: "Heather Ash Gray",
      },
      hex: "#9E9E9E",
    },
    variants: [
      { size: "S", stock: 10 },
      { size: "M", stock: 18 },
      { size: "L", stock: 14 },
      { size: "XL", stock: 6 },
      { size: "XXL", stock: 0 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Americà Raspallat",
        es: "100% Algodón Americano Cepillado",
        en: "100% American Brushed Cotton Fleece",
      },
      weight: "450 GSM",
      fit: {
        ca: "Oversized amb caiguda ferma.",
        es: "Oversized con caída firme.",
        en: "Sturdy oversized silhouette.",
      },
      care: {
        ca: "Llavar a 30°C.",
        es: "Lavar a 30°C.",
        en: "Machine wash at 30°C.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: true,
    isDropExclusive: false,
    published: true,
  },

  // 15. Heavyweight Boxy Crewneck — Washed Black
  {
    id: "prod-15",
    slug: "heavy-studio-crewneck-washed-black",
    name: "Heavyweight Boxy Crewneck — Washed Black",
    tagline: {
      ca: "Dessuadora bàsica de coll rodó llisa de 400 GSM sense gràfics",
      es: "Sudadera básica de cuello redondo lisa de 400 GSM sin gráficos",
      en: "Blank 400 GSM heavyweight boxy crewneck in washed black",
    },
    description: {
      ca: "Dessuadora de coll rodó clàssica d'alta densitat (400 GSM). Acabada amb punys acanalats amples i caiguda ampla sobre l'esquena.",
      es: "Sudadera de cuello redondo clásica de alta densidad (400 GSM). Acabada con puños acanalados anchos y caída amplia sobre la espalda.",
      en: "The minimalist crewneck staple. 400 GSM dense fleece with wide ribbed cuffs and relaxed dropped shoulders.",
    },
    price: 65.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "hoodies",
    color: {
      name: {
        ca: "Negre Rentat / Washed Black",
        es: "Negro Lavado / Washed Black",
        en: "Washed Black",
      },
      hex: "#1C1C1D",
    },
    variants: [
      { size: "S", stock: 12 },
      { size: "M", stock: 20 },
      { size: "L", stock: 16 },
      { size: "XL", stock: 8 },
      { size: "XXL", stock: 2 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Penteinat",
        es: "100% Algodón Peinado",
        en: "100% Heavy Combed Cotton",
      },
      weight: "400 GSM Heavy Fleece",
      fit: {
        ca: "Boxy relaxat.",
        es: "Boxy relajado.",
        en: "Relaxed boxy.",
      },
      care: {
        ca: "Llavar del revés.",
        es: "Lavar del revés.",
        en: "Wash inside out cold.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: false,
    isDropExclusive: false,
    published: true,
  },

  // 16. Heavyweight Boxy Crewneck — Raw Bone
  {
    id: "prod-16",
    slug: "heavy-studio-crewneck-raw-bone",
    name: "Heavyweight Boxy Crewneck — Raw Bone",
    tagline: {
      ca: "Dessuadora bàsica de coll rodó en to blanc os 400 GSM",
      es: "Sudadera básica de cuello redondo en tono blanco hueso 400 GSM",
      en: "Blank 400 GSM heavyweight boxy crewneck in raw bone",
    },
    description: {
      ca: "La puresa de la dessuadora de coll rodó en blanc os natural. Teixit raspallat gruixut de 400 GSM, net i sense marques.",
      es: "La pureza de la sudadera de cuello redondo en blanco hueso natural. Tejido cepillado grueso de 400 GSM, limpio y sin marcas.",
      en: "Pure minimalist comfort. Thick 400 GSM raw bone fleece with zero exterior branding.",
    },
    price: 65.0,
    currency: "EUR",
    collectionId: "the-blank-capsule",
    category: "hoodies",
    color: {
      name: {
        ca: "Blanc Os / Raw Bone",
        es: "Blanco Hueso / Raw Bone",
        en: "Raw Bone",
      },
      hex: "#EFECE4",
    },
    variants: [
      { size: "S", stock: 14 },
      { size: "M", stock: 22 },
      { size: "L", stock: 18 },
      { size: "XL", stock: 10 },
      { size: "XXL", stock: 4 },
    ],
    details: {
      composition: {
        ca: "100% Cotó Americà Orgànic",
        es: "100% Algodón Americano Orgánico",
        en: "100% Organic Heavy Cotton",
      },
      weight: "400 GSM",
      fit: {
        ca: "Boxy fit.",
        es: "Boxy fit.",
        en: "Boxy fit.",
      },
      care: {
        ca: "Llavar a 30°C.",
        es: "Lavar a 30°C.",
        en: "Machine wash at 30°C.",
      },
    },
    images: [UNIFIED_PRIMARY_IMAGE, UNIFIED_HOVER_IMAGE],
    isNewArrival: false,
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
