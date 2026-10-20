# Servicio - Landing Page Técnico Lavarropas

## Descripción
Landing page para servicio técnico de lavarropas, diseño en escala de grises, lista para desplegar en Vercel. Estructura estática (HTML/CSS/JS) sin build step, por lo que el despliegue es inmediato.

## Estructura del proyecto
```
Servicio/
├── index.html          # Página principal con hero, servicios, why-us, proceso, testimonios, FAQ, contacto
├── css/styles.css      # Estilos con variables CSS paleta gris, responsive
├── js/main.js          # Interacciones: móvil nav, FAQ accordion, form WhatsApp, scroll header
├── assets/favicon.svg  # Favicon icono lavadora
├── vercel.json         # Configuración Vercel cleanUrls
├── agent.md            # Contexto para agentes IA
├── memory.md           # Memoria persistente decisiones y estado
└── README.md           # Este documento
```

## Tecnologías
- HTML5 semántico, CSS con variables, JavaScript vanilla
- Google Fonts: Inter + DM Sans
- Paleta de colores: escala completa de grises --gray-50 a --gray-950
- Deploy en Vercel: `vercel` desde la raíz

## Despliegue en Vercel
1. Asegurarse de que el archivo `vercel.json` esté en la raíz (ya incluido)
2. Ejecutar: `vercel`
3. O conectar el repositorio a Vercel para despliegues automáticos
4. El sitio será servido como sitio estático "Other"

## Datos por reemplazar antes del lanzamiento
- Número de WhatsApp en `index.html` y `css/styles.css` (línea `5491112345678`)
- Email institucional
- Horarios de atención (actualmente Lun-Vie 8-19, Sáb 9-14)
- Cobertura geográfica (CABA y GBA)
- Testimonios y estadísticas
- Marcas con las que se trabaja

## Comandos útiles
- `npx serve .` - servir localmente
- `python -m http.server 8000` - servir desde la carpeta
- `vercel` - desplegar a Vercel
- `vercel logs` - ver logs de despliegue