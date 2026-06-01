# Zen Posers

Community meditation practice group — Nashville, TN.

## Setup

```bash
# The .npmrc in this project overrides your global CodeArtifact registry
npm install

# Dev server
npm run dev
```

## Before deploying

### 1. Contact form (Web3Forms)
1. Go to [web3forms.com](https://web3forms.com)
2. Enter `zenposers@gmail.com` — they'll email an access key
3. Paste the key in `app/contact-form.js` → `WEB3FORMS_KEY`

Web3Forms is free, includes honeypot spam filtering, and optionally supports
hCaptcha if you want visible CAPTCHA. The honeypot is already wired up.

### 2. Hero image
Drop your image in `/public` (e.g. `hero.jpg`) and replace the SVG placeholder
in `app/page.js` with:

```jsx
import Image from "next/image";
// ...
<Image src="/hero.jpg" alt="Zen Posers" fill className="object-cover" />
```

### 3. Deploy to Vercel
```bash
# Option A: Push to GitHub, connect repo in vercel.com
git init && git add . && git commit -m "init"
# Then connect in Vercel dashboard

# Option B: Vercel CLI
npx vercel
```

## Project structure

```
app/
  layout.js       — Root layout + meta tags
  globals.css     — Tailwind + custom styles
  page.js         — Main single-page content
  nav.js          — Fixed header with scroll spy
  contact-form.js — Web3Forms contact form
public/           — Static assets (put hero image here)
```
