# PolicyGlobal — Global Insurance & Finance News

A premium, professional Next.js 14 news website covering global insurance, finance, banking, fintech, and economic regulation.

## 🚀 Tech Stack

- **Framework**: Next.js 14 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Static JSON files (`content/news/YYYY-MM-DD.json`)
- **Deployment**: Vercel (auto-deploy on push)

## 📁 Project Structure

```
policyglobal/
├── app/                         # Next.js App Router pages
│   ├── page.tsx                 # Homepage
│   ├── news/[date]/[slug]/      # Article pages
│   ├── daily/[date]/            # Daily archive pages
│   ├── category/[categorySlug]/ # Category pages
│   ├── country/[countrySlug]/   # Country pages
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── disclaimer/              # Disclaimer page
│   ├── privacy-policy/          # Privacy policy
│   ├── terms/                   # Terms of use
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # Robots.txt
├── components/                  # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NewsCard.tsx
│   ├── FeaturedNewsCard.tsx
│   ├── CategoryBadge.tsx
│   ├── CountryBadge.tsx
│   ├── SourceBadge.tsx
│   ├── AdSlot.tsx
│   ├── RelatedNews.tsx
│   ├── DailyArchive.tsx
│   ├── SearchBar.tsx
│   ├── NewsletterBox.tsx
│   └── Breadcrumbs.tsx
├── lib/
│   ├── news.ts                  # Data utility functions
│   └── validate.ts              # JSON validation
└── content/
    └── news/
        └── 2026-06-10.json      # Daily news JSON
```

## ⚡ Getting Started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📰 Daily Publishing Workflow

**Every day**, create a new JSON file in `content/news/`:

```bash
# File naming: YYYY-MM-DD.json
content/news/2026-06-10.json
content/news/2026-06-11.json
content/news/2026-06-12.json
```

Each file contains an array of 15 news items following this schema:

```json
[
  {
    "id": "2026-06-10-001",
    "date": "2026-06-10",
    "title": "SEO-friendly title",
    "slug": "seo-friendly-slug",
    "summary": "2-3 line summary.",
    "description": "Full original description...",
    "category": "Insurance",
    "country": "United States",
    "source_name": "Reuters",
    "source_url": "https://...",
    "image_url": "https://...",
    "image_alt": "Alt text",
    "video_url": "",
    "published_at": "2026-06-10T09:00:00Z",
    "verified_at": "2026-06-10T12:00:00Z",
    "verification_status": "Verified",
    "key_points": ["Point 1", "Point 2", "Point 3"],
    "why_it_matters": "Why this matters...",
    "tags": ["insurance", "regulation"],
    "reading_time": "4 min read"
  }
]
```

Then push to GitHub and Vercel auto-deploys:

```bash
git add content/news/2026-06-11.json
git commit -m "Daily brief: June 11, 2026"
git push
```

## 🌐 URL Structure

| Page | URL |
|------|-----|
| Homepage | `/` |
| Article | `/news/2026-06-10/us-auto-insurance-premiums-rise` |
| Daily archive | `/daily/2026-06-10` |
| Category | `/category/insurance` |
| Country | `/country/united-states` |
| About | `/about` |
| Disclaimer | `/disclaimer` |

## 📊 Categories

Insurance · Personal Finance · Banking · Markets · FinTech · Regulation · Economy · Healthcare Insurance · Auto Insurance · Life Insurance · Loans & Mortgage

## 🌍 Countries

United States · India · United Kingdom · Canada · Australia · UAE · Singapore · Germany · France · Japan · South Korea

## 💰 Monetization

Ad slots are pre-built via `components/AdSlot.tsx`. To activate:
1. Sign up for Google AdSense or similar
2. Replace the placeholder content in `AdSlot.tsx` with real ad code
3. Slots: Top banner · Sidebar (×2) · In-feed native · Article middle · Article bottom

## 🔍 SEO Features

- Dynamic `<title>` and `<meta description>` per page
- Open Graph + Twitter Card metadata
- JSON-LD NewsArticle structured data on article pages
- Auto-generated `/sitemap.xml`
- Auto-generated `/robots.txt`
- Canonical URLs
- Breadcrumb navigation
- Mobile-first responsive design
- Core Web Vitals optimised (static generation, image optimisation)

## 🛡️ Trust Features

- `SourceBadge` component: shows source, verification status, original link
- `verification_status: "Verified"` displayed on all verified stories
- Visible disclaimer on every article page
- "No AI-generated claims without source" footer trust bar
- Separate `/disclaimer` and `/privacy-policy` pages

## 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/policyglobal.git
git push -u origin main

# 2. Import in Vercel dashboard
# https://vercel.com/new → Import Git Repository

# 3. Vercel auto-detects Next.js — no config needed
# 4. Every push to main = automatic deploy
```

## 📄 License

© 2026 PolicyGlobal. All rights reserved.
