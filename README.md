# Grill Street 140° Website

Premium, conversion-focused multi-page website for Grill Street 140° (Grill Street Outdoor Kitchens & Grill Store) in McAllen, Texas.

## Stack
- Next.js App Router + React + TypeScript
- Tailwind CSS

## Pages
- Home
- Outdoor Kitchens
- Grills & Products
- Showroom
- Gallery
- Financing
- Events
- About
- Contact

## Local development
```bash
npm install
npm run dev
```

## Replace images
All images use remote placeholder URLs in the components and page files. Replace the `src` values with your own hosted images, or add files to `public/` and reference them as `/your-image.jpg`.

## Edit content
- Global business data: `lib/site-data.ts`
- Navigation labels / bilingual strings: `data/i18n.json`
- Page content: `app/**/page.tsx`
- Reusable UI: `components/`

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Accept the default Next.js settings.
4. Deploy.
