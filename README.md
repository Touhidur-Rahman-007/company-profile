## Aureus Corporation - Company Profile Website

A modern, SEO-optimized company profile website built with Next.js 14, React, and TypeScript.

### Features

- 🎨 Modern, professional design with elegant animations
- 📱 Fully responsive across all devices
- ⚡ Optimized for performance and SEO
- 🔍 Comprehensive structured data for search engines
- 🖼️ Optimized images with Next.js Image component
- 🎯 Accessibility-focused (ARIA labels, semantic HTML)
- 🌐 Social media meta tags (Open Graph, Twitter Cards)

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS with styled-jsx
- **Fonts**: Google Fonts (Playfair Display, Source Sans 3)

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### SEO Optimizations

- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card meta tags
- Structured data (JSON-LD) for Organization
- Sitemap.xml
- Robots.txt
- Optimized images with alt text
- Semantic HTML structure
- Mobile-friendly responsive design

### Project Structure

```
company-profile/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   └── CompanyProfile.tsx  # Main component
├── public/
│   ├── images/          # Image assets
│   ├── robots.txt       # Search engine instructions
│   ├── sitemap.xml      # Site structure
│   └── manifest.json    # PWA manifest
├── package.json
├── next.config.js
└── tsconfig.json
```

### Deployment

Deploy to Vercel:

```bash
npm run build
```

Or use:
- Vercel
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### License

© 2024 Aureus Corporation. All rights reserved.
