# REGISTRE DE DADES I DECISIONS PENDENTS — URBANSTYLES

Aquest document manté la traçabilitat exhaustiva de totes les dades del negoci, recursos, credencials i requeriments necessaris abans del llançament comercial definitiu d'UrbanStyles.

## Classificació de Dades
- **[CONFIRMADA]**: Dada aportada pel client o validada formalment.
- **[DECISIÓ TÈCNICA]**: Decisió d'arquitectura o disseny presa per l'equip per garantir el funcionament.
- **[PROVISIONAL]**: Valor o recurs temporal que permet operar i provar la botiga; pendent de revisió final.
- **[PENDENT]**: Dada necessària que no bloqueja el desenvolupament de la interfície però sí el llançament al públic.
- **[BLOQUEJANT]**: Requisit legal o tècnic que impedeix obrir la botiga a clients reals fins que no siga aportat.

---

| Item | Concepte | Estat | Descripció i Acció Requerida |
| :--- | :--- | :--- | :--- |
| **01** | **Marca i Posicionament** | `[CONFIRMADA]` | Marca: UrbanStyles. Streetwear contemporani amb arrels retro (240 GSM cotó pesat). Referència: Nude Project. |
| **02** | **Catàleg Real de Camisetes** | `[PROVISIONAL]` | S'ha creat l'arquitectura i el Drop 01 ("Retro Horizons") amb 6 models complets (Acid Dreamer, Echoes of '92, Club Nocturne, Archive Monogram, Solar Drift, Heavy Studio Hoodie). Pendent de confirmar el llistat d'articles finals de producció del client. |
| **03** | **Preus i Moneda** | `[PROVISIONAL]` | Preus establerts provisionalment entre 39,00 € i 79,00 € (EUR) amb IVA inclòs. Pendent de confirmació de l'escandall i marge comercial definitiu. |
| **04** | **Talles i Control d'Estoc** | `[DECISIÓ TÈCNICA]` | Matriu de talles S, M, L, XL, XXL amb quantitats individuals per variant. El sistema bloqueja la compra si `stock == 0` (ex. XXL en Acid Dreamer). Pendent d'introduir l'inventari físic real. |
| **05** | **Fotografies Pròpies de Producte** | `[PROVISIONAL]` | S'utilitzen fotografies de moda d'alta resolució i llicència lliure representatives de l'estil oversize retro. Pendent de realitzar la sessió de fotos pròpia (lookbook de campanya i fotos d'estudi amb fons neutre). |
| **06** | **Logotip i Identitat Gràfica** | `[DECISIÓ TÈCNICA]` | Wordmark tipogràfic contemporani minimalista (pal sec en majúscules d'alta densitat). Pendent que el client aporte arxius vectorials (SVG/AI) de marca si en disposa d'uns propis creats per agència. |
| **07** | **Idiomes Definitius** | `[CONFIRMADA]` | S'ha implementat suport complet multilingüe en Valencià (`ca`), Castellà (`es`) i Anglés (`en`) amb selector actiu i canvi en calent. Pendent de validació estilística pel client. |
| **08** | **Passarel·la de Pagaments (Stripe)** | `[PENDENT]` / `[BLOQUEJANT]` | Codi i rutes de servidor preparades a `/api/checkout`. Cal donar d'alta el compte de Stripe de l'empresa i afegir les claus reals (`STRIPE_SECRET_KEY` i `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`) abans de començar a cobrar. |
| **09** | **Pagament per PayPal** | `[PENDENT]` | Opcions preparades a la interfície. Cal crear l'aplicació a PayPal Developer i aportar `NEXT_PUBLIC_PAYPAL_CLIENT_ID`. |
| **10** | **Contra Reemborsament i Recollida** | `[PENDENT]` | El selector està preparat al checkout, però s'ha marcat com a opció amb condicions especials. Cal confirmar l'acord amb el transportista (ex. Correos Express, GLS, SEUR) i comissions de cobrament en mà. Per a recollida física, cal confirmar si existeix punt o taller habilitat. |
| **11** | **Condicions d'Enviament (>50€ Gratuït)** | `[CONFIRMADA]` | S'ha programat la regla estricta: comandes &gt;= 50,00 € tenen enviament gratuït a Espanya peninsular. Per a comandes inferiors, tarifa de 4,90 €. Pendent de confirmar tarifes per a Balears, Canàries, Ceuta i Melilla. |
| **12** | **Xarxes Socials Oficials** | `[PENDENT]` | Pendent de confirmació dels perfils exactes d'Instagram i TikTok (ex. `@urbanstyles.es` o similar). No s'han publicat enllaços inventats. |
| **13** | **Ubicació Física** | `[CONFIRMADA]` | UrbanStyles opera com a marca exclusivament digital (DNVB) sense botiga permanent oberta al públic. S'ha documentat amb total transparència a la pàgina de contacte i al peu de pàgina. |
| **14** | **Dades Fiscals i Documents Legals** | `[BLOQUEJANT]` | S'han redactat les plantilles completes d'Avís Legal, Política de Privadesa (RGPD), Política de Cookies i Política de Devolucions (14 dies). Cal afegir el NIF/CIF i la Raó Social de l'empresa abans de la venda al públic. |
| **15** | **Domini i Desplegament** | `[PENDENT]` | Projecte preparat per a desplegament immediat a Vercel, Netlify o servidor Node.js/Docker. Pendent de connectar el domini `urbanstyles.es` quan siga contractat. |

---

*Document generat com a part de l'auditoria i desenvolupament d'UrbanStyles.*

