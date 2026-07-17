# Landing Page — Reparación y Mantenimiento de Línea Blanca

> Documento de brief para el desarrollador. Este archivo es la fuente de verdad sobre el negocio, el branding y el estilo visual requerido para la landing page. Está pensado para acompañar (no reemplazar) el prompt inicial ya entregado para modificar la plantilla HTML base, y para servir como contexto cuando itere el proyecto con Claude.

## 📋 Resumen del proyecto

Se va a construir una **landing page** para un negocio de reparación y mantenimiento de electrodomésticos de línea blanca. El punto de partida es una **plantilla HTML base** que ya se está modificando mediante un prompt inicial. A partir de ahí, el desarrollador debe **iterar con Claude** (dándole instrucciones directas, las veces que sea necesario) hasta llegar al resultado final descrito en este documento.

No hay límite de iteraciones: si el resultado no cumple con la dirección de marca o el estilo visual descritos abajo, se debe seguir ajustando con Claude hasta lograrlo.

---

## 🏢 Información del negocio

| Dato | Detalle |
|---|---|
| **Rubro** | Reparación y mantenimiento de electrodomésticos de línea blanca |
| **Nombre de marca** | ⚠️ No existe todavía (ver sección [Branding](#-branding)) |
| **Teléfono** | +52 961 175 0266 |
| **Redes sociales** | No tiene ninguna actualmente |
| **Logo** | No existe todavía (ver sección [Branding](#-branding)) |
| **Experiencia** | Más de 30 años (dato tomado del flyer de referencia) |
| **Cobertura sugerida (a confirmar con cliente)** | La lada 961 corresponde a Tuxtla Gutiérrez, Chiapas, México — confirmar zona real de cobertura antes de publicarla en la web |

### Servicios que ofrece

- Reparación de **refrigeradores**
- Enfriadores, mesas frías, heladeras, freezers *(equipo de refrigeración comercial — sugiere que también atienden pequeños negocios de alimentos, no solo hogares)*
- Lavadoras, secadoras y centros de lavado
- Boilers
- Estufas
- Extractores

### Marcas con las que trabaja (tomado del flyer)

Whirlpool · Samsung · LG · Mabe · GE · Frigidaire · Bosch

Sugerido: usar estas marcas como una franja de "logos de confianza" (trust bar) en la landing, del estilo "trabajamos con equipos de las principales marcas del mercado".

### Diferenciadores / propuesta de valor (tomado del flyer)

- Servicio profesional con **más de 30 años de experiencia**
- **Servicio el mismo día**
- Atención vía telefónica/personalizada (el flyer muestra una operadora con headset, sugiriendo atención directa y rápida)

### Público objetivo

Principalmente **residencial** (dueños de casa/familias), y potencialmente **pequeños negocios de alimentos** (restaurantes, fondas, tiendas con cuartos fríos o mesas frías) por el servicio de enfriadores/mesas frías. El copy debe hablarle a ambos sin sonar exclusivamente doméstico.

### Lo que el negocio NO tiene (importante, no inventar)

- ❌ Nombre de marca definido
- ❌ Logotipo
- ❌ Redes sociales
- ❌ Testimonios/reseñas de clientes documentados
- ❌ Fotos reales propias (solo se cuenta con el flyer genérico de referencia) — **se autoriza usar fotos de internet/Google** como reemplazo temporal, ver sección [Assets disponibles](#-assets-disponibles)

No se debe inventar información falsa (testimonios, ubicaciones exactas, certificaciones, etc.) para rellenar estos huecos. Donde falte contenido real, usar elementos genéricos honestos (años de experiencia, marcas con las que trabaja, cobertura, garantía si aplica) en vez de datos ficticios.

---

## 📁 Assets disponibles

La carpeta `imagenes/` contiene actualmente **un solo archivo**: un flyer que el cliente compartió como referencia de cómo imagina su branding.

![Flyer de referencia del cliente](imagenes/WhatsApp%20Image%202026-07-16%20at%205.58.14%20PM.jpeg)

**Cómo usar este flyer:**
- Es una **referencia de tono, colores y contenido**, no una plantilla de diseño a copiar literalmente. El diseño del flyer en sí es genérico/de stock y **no** debe replicarse tal cual — la landing debe verse mucho más premium y actual que el flyer (ver sección de estilo visual).
- De ahí se extrajo la paleta de colores, los servicios destacados ("Reparación de Refrigeradores y Lavadoras"), las marcas trabajadas y el mensaje de "30 años de experiencia" / "servicio el mismo día".
- Las fotos de personas y electrodomésticos del flyer son imágenes de stock genéricas, **no son fotos reales del negocio**.

**Sobre las fotos de la landing:** como el cliente no tiene fotos propias, el desarrollador **puede buscar y usar imágenes de internet/Google** (técnicos reparando electrodomésticos, refrigeradores, lavadoras, estufas, boilers, extractores, etc.) para ilustrar la página mientras no haya fotos reales del negocio. Al elegirlas, priorizar que:
- Se vean **premium y modernas** (no genéricas tipo flyer/clipart), coherentes con el estilo high-tech/minimal pedido.
- Combinen bien con la paleta de colores de marca.
- Si más adelante el cliente entrega fotos reales, estas deben reemplazar a las de internet.

---

## 🎨 Branding

### Nombre del negocio

El cliente **no cuenta con un nombre de marca**. El desarrollador, iterando con Claude, debe **proponer un nombre** coherente con el estilo premium/corporativo solicitado (ver estilo visual). Algunas líneas de naming a explorar como punto de partida (propuestas, no definitivas — quedan sujetas a validación con el cliente):

- Línea técnica/directa: *TécnicoBlanco*, *ServiExpress Línea Blanca*, *ElectroServicio Pro*
- Línea confianza/experiencia: *ServiHogar 30*, *ReparaMax*, *ExpertosLB*
- Línea premium/corporativa: *Grupo TécnicoLB*, *Prime Electrodomésticos*, *FixPro Home Services*

El nombre elegido debe quedar reflejado consistentemente en el logotipo, el título de la página (`<title>`), el favicon y los metadatos (Open Graph).

### Logo

Actualmente **no existe ningún logotipo**. El desarrollador, iterando con Claude, debe **diseñar/generar un logotipo simple** (isotipo + wordmark, o solo wordmark tipográfico) coherente con el nombre elegido, la paleta de colores y el estilo premium/high-tech/minimal descrito abajo.

Este logotipo se necesita en formato con **fondo transparente (PNG o SVG)** para usarse en:
- El header/nav de la landing
- El favicon
- La **pantalla de carga (loading screen)** con spinner (ver sección de efectos)

> ⚠️ **Nota importante:** si en algún momento se agrega a la carpeta `imagenes/` un archivo de logo adicional (por ejemplo si el cliente lo consigue después) y ese archivo viene con un fondo sólido (blanco, azul, etc.), **hay que quitarle el fondo** y exportarlo con fondo transparente antes de integrarlo a la web. Al día de hoy esa carpeta no contiene ningún logo, solo el flyer.

### Paleta de colores (extraída del flyer de referencia)

Estos tonos se extrajeron visualmente del flyer y deben usarse como base, pero **refinados para verse premium y digital** (no como un flyer impreso):

| Color | Uso en el flyer | Hex aproximado |
|---|---|---|
| Azul marino oscuro | Fondo principal, franjas superior/inferior | `#0B1E36` |
| Azul acero medio | Uniforme del técnico, acentos | `#1F5C99` |
| Azul claro / celeste | Texto "ELECTRODOMÉSTICOS", franja "Reparación de Refrigeradores y Lavadoras" | `#4A8FC2` |
| Blanco | Texto principal, fondos | `#FFFFFF` |
| Gris plateado/metálico | Acabado de los electrodomésticos (acero inoxidable) | `#C7CCD1` |
| Negro / azul casi negro | Franjas superior/inferior del flyer | `#05070D` |

**Recomendación para la web:** usar el azul marino como color primario de marca, el azul acero como secundario, el gris metálico como neutro de apoyo (cards, fondos alternos), blanco/gris muy claro como fondo base, y sumar **un acento moderno** (por ejemplo un azul eléctrico o cian brillante `#3AB0FF`–`#38BDF8`) para botones, hovers y detalles interactivos — esto es lo que le va a dar el toque high-tech que no tiene el flyer original.

### Tipografía sugerida

Para lograr el look premium/corporativo/high-tech pedido, usar una tipografía sans-serif moderna, por ejemplo:
- Encabezados: **Poppins**, **Space Grotesk** o **Manrope** (con buen peso en bold para el hero)
- Cuerpo de texto: **Inter** o **Roboto**

(Sugerencia de partida — el desarrollador/Claude puede ajustar según lo que mejor combine con la plantilla base.)

### Tono de marca

Profesional, confiable y directo, pero **premium y actual** — no genérico ni "de flyer de barrio". Se debe transmitir seriedad corporativa + cercanía (atención rápida, mismo día) sin perder elegancia.

---

## 💻 Estilo visual y de diseño requerido

### Línea de diseño

La landing debe sentirse **premium, enterprise y corporativa de marca**, con un nivel visual **high-tech y elegante**, y al mismo tiempo **minimalista** (espacios limpios, tipografía marcada, poco ruido visual, mucho contraste bien dosificado). Piensa en el nivel de una landing de una empresa de tecnología o servicios profesionales de alta gama, aplicado a un negocio de servicios técnicos del hogar — **no** en el estilo genérico de flyer/volante que se usó como referencia de contenido.

### Efectos y animaciones requeridas

- [ ] **Pantalla de carga (loading screen):** al entrar a la página, mostrar un spinner de carga con el logo del negocio en el centro, antes de revelar el contenido.
- [ ] **Animaciones al hacer scroll:** los elementos de cada sección deben aparecer con animación (fade-in, slide-up, etc.) conforme el usuario baja por la página.
- [ ] **Efecto tipo "máquina de escribir" (typewriter)** en el título principal de la sección Hero.
- [ ] **Efecto de color animado en las letras del título del Hero** (por ejemplo, letras que cambian de color o un gradiente animado), para reforzar el look high-tech.
- [ ] Transiciones e interacciones sutiles en botones/hover (consistentes con el estilo minimal-premium, sin exagerar).

Todos estos efectos deben sentirse *sutiles y elegantes*, no recargados — coherente con el minimalismo pedido.

---

## 🗂️ Estructura sugerida de secciones

1. **Pantalla de carga** (spinner + logo)
2. **Hero:** título con efecto typewriter + color animado, subtítulo con propuesta de valor, CTA principal (llamar / WhatsApp)
3. **Servicios:** refrigeradores, enfriadores/mesas frías/heladeras/freezers, lavadoras/secadoras/centros de lavado, boilers, estufas, extractores
4. **Marcas con las que trabajamos:** franja con logos de Whirlpool, Samsung, LG, Mabe, GE, Frigidaire, Bosch
5. **Por qué elegirnos:** +30 años de experiencia, servicio el mismo día, atención directa
6. **Contacto / CTA final:** teléfono `+52 961 175 0266`, botón de llamada directa y botón de WhatsApp
7. **Footer:** datos de contacto, sin espacio para redes sociales (no tiene)

**Sobre el botón de WhatsApp:** verificar en pruebas si el enlace `wa.me` funciona con o sin el "1" extra después del código de país en números mexicanos (`https://wa.me/529611750266` vs `https://wa.me/5219611750266}`) — probar ambos y usar el que conecte correctamente.

---

## ✅ Instrucciones para el desarrollador

1. Usa este documento como brief de negocio y de marca al iterar sobre la plantilla base con Claude.
2. Puedes darle a Claude tantas instrucciones e iteraciones como sean necesarias hasta que el resultado cumpla con el estilo premium/enterprise/high-tech/minimal descrito, y con los efectos visuales pedidos.
3. Antes de dar por terminada la marca, define junto con Claude un **nombre de negocio** y un **logotipo** (fondo transparente), ya que hoy no existen.
4. No inventes datos del negocio que no estén en este documento (testimonios, ubicaciones exactas, certificaciones, redes sociales, etc.).
5. Para las imágenes del sitio (técnico trabajando, electrodomésticos, etc.), busca fotos en internet/Google que se vean premium y modernas, ya que el cliente no tiene fotos propias por ahora.
6. Prioriza que la landing sea **responsive** (mobile-first, ya que es muy probable que la mayoría del tráfico llegue desde celular para llamar o escribir por WhatsApp).
7. Cuida accesibilidad básica (contraste de color, textos alternativos en imágenes) y SEO básico (title, meta description, Open Graph con el nombre de marca definido).

---

## 📌 Preguntas abiertas para el cliente (pendientes de confirmar)

- Nombre definitivo del negocio
- Ciudad/zona exacta de cobertura (se infiere Tuxtla Gutiérrez, Chiapas por la lada 961, pero debe confirmarse)
- Si maneja garantía en sus servicios (dato común en este tipo de negocios, no confirmado aquí)
- Si más adelante tendrá fotos reales del técnico/trabajos realizados para reemplazar imágenes genéricas
