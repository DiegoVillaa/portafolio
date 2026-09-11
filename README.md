# Portafolio — Diego Villa Duran

Portafolio personal construido con Next.js 14 (App Router), TypeScript y Tailwind CSS, generado a partir del CV.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Editar el contenido

Todo el contenido (perfil, stack, proyectos, experiencia) vive en un solo archivo:

```
data/cv.ts
```

Edita ese archivo para actualizar textos, agregar proyectos o cambiar links — no hace falta tocar los componentes.

## Estructura

```
app/
  layout.tsx      -> fuentes y metadata
  page.tsx         -> ensambla las secciones
  globals.css      -> estilos base
components/
  Hero.tsx
  Stack.tsx
  Projects.tsx
  Experience.tsx
  Contact.tsx
data/
  cv.ts            -> todo el contenido del CV
```

## Deploy

El proyecto está listo para desplegarse en Vercel:

```bash
npm run build
```

o conectando el repo directamente en vercel.com (New Project → importar repo).
