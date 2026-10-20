# agent.md - Contexto para agentes que trabajan en este proyecto

## Descripción general
Landing page estática para un servicio técnico de lavarropas, diseñada para desplegarse en Vercel. Estructura sin build step (solo HTML/CSS/JS), paleta de colores en tonos gris, totalmente en español (rioplatense).

## Estructura del proyecto
```
Servicio/
├── index.html          # Página principal con todas las secciones
├── css/styles.css      # Estilos con variables CSS, paleta gris, responsive
├── js/main.js          # Interacciones: móvil, FAQ, form WhatsApp, scroll spy
├── assets/favicon.svg  # Favicon simple (icono de lavadora)
├── vercel.json         # Configuración de despliegue Vercel
├── README.md           # Este documento (actualizado por el agente)
├── agent.md            # Este archivo (contexto para agentes)
└── memory.md           # Memoria persistente del proyecto
```

## Pila tecnológica
- HTML5 semántico con ARIA labels
- CSS puramente con variables CSS (paleta gris completa)
- JavaScript vanilla (sin dependencias)
- Google Fonts: Inter + DM Sans
- Vercel (deploy estático, framework "Other")

## Convenciones y buenas prácticas
- Todas las etiquetas principales tienen ARIA labels apropiados
- Colores en escala de grises: --gray-50 a --gray-950
- Clases BEM-ish: `.nav__link`, `.service-card`, `.btn--primary`, etc.
- Animaciones `reveal` con IntersectionObserver, respeto a `prefers-reduced-motion`
- Formularios con validación HTML5 + clases `.error` para feedback visual
- Botones: `.btn--primary` (fondo gris oscuro, texto blanco), `.btn--secondary` (borde, texto gris), `.btn--light` (fondo claro, texto oscuro)
- Imágenes con `filter: grayscale(100%)` en marcas, hover a 0%
- Sin JavaScript si el usuario lo tiene desactivado (fallbacks básicos)

## Datos placeholder que deben reemplazarse antes de producción
| Campo | Valor actual | Acción requerida |
|-------|-------------|-----------------|
| Teléfono WhatsApp | `5491112345678` | Reemplazar por el número real del negocio |
| Email | `soporte@serviteclavarropas.com` | Reemplazar con email real |
| Horarios de atención | CABA y GBA horarios genéricos | Ajustar a la realidad del negocio |
| Cobertura geográfica | CABA y Gran Buenos Aires | Actualizar según zona de servicio |
| Márgenes de las marcas | 6 marcas shown | Agregar/quitar según convenio |
| Testimonios | 3 clients genéricos | Reemplazar con testimonios reales |
| Statistic numbers | +20 años, +5000 reparaciones | Verificar precisión |
| Mapa de cobertura | Texto descriptivo | Actualizar con zonas reales |

## Tareas pendientes / checklist de despliegue
- [ ] Reemplazar número de WhatsApp (+54 9 11 1234-5678) por el real
- [ ] Reemplazar email institucional
- [ ] Actualizar horarios de atención si difieren de Lun-Vie 8-19, Sáb 9-14
- [ ] Verificar cobertura geográfica (CABA/GBA) y ajustar texto
- [ ] Subir logo real o reemplazar el SVG actual
- [ ] Revisar que los testimonios sean auténticos
- [ ] Probar formulario WhatsApp en móvil
- [ ] Probar en modo Reduced Motion (should respect)
- [ ] Desplegar en Vercel: `vercel` desde la raíz
- [ ] Confirmar que cleanUrls funcionen (`vercel.json` ya incluido)

## Comandos útiles
- Despliegue rápido: `vercel` (desde la carpeta Servicio)
- Servir localmente: `npx serve .` o `python -m http.server 8000`
- Ver logs de Vercel: `vercel logs`
- Probar modo sin JS: verificar que el contenido básico sea legible