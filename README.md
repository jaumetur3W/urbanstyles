# URBANSTYLES — Streetwear E-Commerce Platform

Plataforma de comerç electrònic oficial d'**UrbanStyles**, marca independent de roba urbana contemporània amb arrels retro, patronatge *boxy oversized* i teixit de cotó pesat de 240 GSM.

Inspirada en l'estètica editorial de referents del streetwear europeu com Nude Project, aquesta botiga està concebuda amb una arquitectura robusta, mòbil-primer, multilingüe i preparada per a cobraments reals a Espanya.

---

## ⚡ Tecnologies & Stack

- **Framework Web:** Next.js 14 (App Router, Server-Side Rendering & Static Site Generation)
- **Llenguatge:** TypeScript 5 (Mode estricte)
- **Estils & Disseny UI:** Tailwind CSS (Paleta de tons neutres, blanc trencat retro i terracota d'accent)
- **Iconografia:** Lucide React
- **Pagaments & Checkout:** Stripe Checkout SDK (Targeta bancària SSL), PayPal SDK, Contra reemborsament i Recollida
- **SEO & Rendiment:** Schema.org JSON-LD (`Product`, `Breadcrumbs`), `sitemap.xml`, `robots.txt`, OpenGraph & Twitter Cards
- **Accessibilitat:** Normativa WCAG 2.2 AA (contrastos > 4.5:1, estats de focus, compatibilitat amb `prefers-reduced-motion`)

---

## 🚀 Instal·lació i Desenvolupament Local

```bash
# 1. Clonar el repositori
git clone https://github.com/jaumetur3W/urbanstyles.git
cd urbanstyles

# 2. Instal·lar dependències
npm install

# 3. Configurar variables d'entorn
cp .env.example .env.local

# 4. Iniciar el servidor de desenvolupament
npm run dev
```

Accedeix a `http://localhost:3000` al teu navegador.

---

## 💳 Pagaments i Regles de Negoci

1. **Enviaments a Espanya Peninsular:**
   - **Comandes > 50,00 €:** Enviament gratuït aplicat automàticament.
   - **Comandes < 50,00 €:** Tarifa plana estàndard de 4,90 €.
   - Càlculs econòmics re-verificats de manera estricta al servidor (`/api/checkout`).

2. **Control d'Estoc:**
   - Cada producte disposa d'inventari independent per talla (S, M, L, XL, XXL).
   - El sistema impedeix comprar o afegir al carret qualsevol talla amb estoc 0.

3. **Mètodes de Pagament:**
   - **Targeta de crèdit / dèbit:** Integrat amb Stripe Checkout.
   - **PayPal:** Preparat per a credencials PayPal SDK.
   - **Contra reemborsament:** Opcional amb avís de conformitat logística.
   - **Recollida en taller:** Indicat transparentment com a pendent d'habilitació física.

---

## 🌍 Suport Multilingüe

La botiga ofereix canvi d'idioma en calent entre:
- **Valencià / Català (`ca`)**
- **Castellà (`es`)**
- **Anglés (`en`)**

---

## 📦 Desplegament a Producció

El projecte està optimitzat per a desplegar-se amb un sol clic a **Vercel** o en qualsevol proveïdor compatible amb Next.js:

```bash
npm run build
npm run start
```

---

## 📋 Dades Pendents del Negoci

Consulta el fitxer [`PENDING_DATA.md`](./PENDING_DATA.md) per revisar la classificació de recursos, fotografies i claus necessàries abans del llançament comercial públic.
