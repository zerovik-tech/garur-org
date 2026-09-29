# Garur Civil Society — Official Site

A single-page Next.js 14 site for [Garur Civil Society](https://github.com/zerovik-tech/garur-org), a non-profit in Garur, Bageshwar (Uttarakhand) working on legal aid, education, public awareness, and health.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with brand palette sampled from the official logo
  - Orange `#F08C28` · Navy `#001478` · Green `#3C7800`
- **React 18**

## Sections (single page)

1. Hero — name, mission tagline, location
2. About — who we are
3. Focus Areas — Legal Aid · Education · Public Awareness · Health
4. Our Journey — milestones
5. Founder — D.K. Joshi, Advocate
6. Donate — UPI deep link + QR
7. Footer

## Donate

The Donate section uses a UPI deep link (`upi://pay?...`) decoded from the official QR, with the QR shown alongside as a fallback.

- **UPI ID:** `QR919319805337-6623@unionbankofindia`
- **Payee:** `GARUR CIVIL SOCIETY`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Ready for Vercel — import this repo at [vercel.com/new](https://vercel.com/new), framework auto-detected as Next.js. No environment variables required.

## Logo & assets

- `public/logo.jpg` — official Garur Civil Society logo
- `public/donation-qr.jpeg` — UPI donation QR
