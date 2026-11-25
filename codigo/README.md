# Silvina Paola · sitio web

Next.js (App Router) + TypeScript + Tailwind CSS. Una página, en español (`/es`) e inglés (`/en`).

## Correr el proyecto

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

En Vercel no hace falta configurar nada. Si más adelante hay dominio propio, definir
`NEXT_PUBLIC_SITE_URL=https://dominio.com` (se usa en Open Graph y URLs canónicas).

## Reemplazar fotos

Reemplazar el archivo en `public/images/` con el mismo nombre. No importan las dimensiones: cada
foto se recorta a una proporción fija.

- `portada/hero.png` y `sobre-mi/retrato.png` son PNG transparentes con bordes difuminados. Si el
  original es `.jpg`, copiarlo a la carpeta y cambiar la ruta en `images` de `lib/content.ts`.
- `portada/og.jpg` (1200×630) es la imagen al compartir el enlace; se reemplaza aparte.
- El EPK está en `public/epk/`. Si cambia de nombre, actualizar `links.epk` en `lib/content.ts`.
- Si la foto nueva muestra otra cosa, actualizar su texto `alt` en los diccionarios.

## Editar textos y enlaces

- Textos: `dictionaries/es.json` y `dictionaries/en.json`.
- Enlaces, videos, canciones, redes y rutas de fotos: `lib/content.ts`.
- Colores, tamaños y sombras: `@theme` en `app/globals.css`.

## Agregar un idioma (portugués, italiano…)

1. Copiar `dictionaries/es.json` como `dictionaries/pt.json` y traducir los valores (no las claves).
2. En `lib/i18n.ts`, importarlo y sumarlo a `dictionaries`:
   `const dictionaries = { es, en, pt }`.

La ruta `/pt`, el selector y los metadatos se generan solos.

La redirección de `/` a `/es` está en `proxy.ts` (el nombre de `middleware` desde Next 16).
