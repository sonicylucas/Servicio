# memory.md - Memoria persistente del proyecto "Servicio Técnico Lavarropas"

## Estado actual (2026-10-20)
- Proyecto recién creado, estructura base completada
- Todos los archivos fundamentales presentes: index.html, css/styles.css, js/main.js, assets/favicon.svg, vercel.json
- Contenido en español (rioplatense) con copywriting orientado a conversión
- Paleta de colores completamente en escala de grises (sin tonos de color adicionales)
- Sitio estático puro: no requiere build step, deploy directo en Vercel

## Decisiones clave tomadas
1. **Sitio estático sin framework**: index.html puro + CSS + JS vanilla. No se usa React, Next.js ni ningún otro framework. Esto reduce complejidad, costo y tiempo de despliegue en Vercel.
2. **Paleta monocromática grises**: Solicitud explícita del usuario "de color gris". Se usa toda la escala --gray-50 a --gray-950. Sin acento de color, los únicos toques de "color" son el contraste texto/fondo.
3. **Formulario → WhatsApp**: Al no tener backend, el formulario genera un enlace wa.me pre-lleno y lo abre en pestaña nueva. Datos del usuario se incluyen en el mensaje.
4. **Estructura de sección única (single page)**: Navegación ancla-based con IDs en cada sección (`#inicio`, `#servicios`, `#por-que`, `#proceso`, `#faq`, `#contacto`). Links de navegación interna.
5. **Responsive-first**: Breakpoints en 960px, 768px, 640px, 480px. Mobile-first en los componentes críticos (nav, grid services, formulario).
6. **IntersectionObserver para reveal**: Las animaciones de aparición solo se activan cuando el elemento entra al viewport. Fallback instantáneo si el usuario tiene `prefers-reduced-motion` o JS desactivado.
7. **FAQ nativo `<details>`**: Usado en lugar de componente JS complejo. Accesibilidad nativa, keyboard accessible, graceful degradation.
8. **Favicon SVG inline**: Ligero, sin dependencias externas. Coincide con el icono de lavadora usado en el header.

## Estructura de colores (variables CSS)
```
--gray-50: #f8f9fa    (fondo general)
--gray-100: #f1f3f5   (cartas, cards, forms bg)
--gray-200: #e2e5e9   (bordes, hover states)
--gray-300: #c7cbd1   (texto secundario, labels)
--gray-400: #9aa0a8   (marcas grayscale, hover)
--gray-500: #6f757d   (texto terciario)
--gray-600: #4b5056   (links, hover, números stats)
--gray-700: #2a2d31   (fondos de sección, headers)
--gray-800: #1c1e21   (header sticky, hero bg)
--gray-900: #111214   (hero gradient oscuro)
--gray-950: #0a0a0b   (acentos más oscuros)
```

## Fuentes
- Inter: pesos 400, 500, 600, 700 (cuerpo, títulos, highlights)
- DM Sans: pesos 400, 500, 600, 700 (alternativa, usados en botones y small text)

## Puntos de quiebre (breakpoints)
- Desktop: >960px - grids de 4 columnas (services, why-us), 3 columns (brands)
- Tablet: 768-960px - grids de 2 columnas, nav horizontal intacto
- Mobile: <768px - grids 1 columna, nav hamburger, form 100%

## Próximos pasos recomendados
1. Reemplazar datos placeholder (teléfono, email, testimonios)
2. Agregar Google Analytics o seguimiento de conversiones (opcional - Vercel Analytics)
3. Probar en dispositivos reales (especialmente Android móvil)
4. Verificar que el formulario WhatsApp funcione con operadoras locales
5. Considerar agregar schema.org LocalBusiness JSON-LD para SEO (puede añadirse en <head> de index.html)
6. Si el negocio tiene reseñas de Google, considerar agregar un carousel de testimonios con calificación

## Changelog
- **2026-10-20**: Proyecto inicial creado. index.html con estructura completa de landing page (hero, servicios, why-us, proceso, testimonios, FAQ, contacto). css/styles.css con paleta gris completa y responsive. js/main.js con móvil, FAQ, form WhatsApp, scroll header. assets/favicon.svg y vercel.json añadidos. agent.md y memory.md completados.