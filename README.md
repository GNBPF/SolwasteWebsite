# Solwaste - Building India's Zero-Waste Future

<div align="center">

![Solwaste Logo](public/SolwasteLogoLight.png)

**Turning Organic Waste into Compost & Biogas Energy**

[![Website](https://img.shields.io/badge/Website-solwaste.co-2C3E2C?style=for-the-badge)](https://www.solwaste.co)
[![License](https://img.shields.io/badge/License-Proprietary-D4AF37?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

[🌐 Visit Website](https://www.solwaste.co) · [📱 Download App](#app) · [🏢 For Societies](#solutions) · [🛒 Shop](#shop)

</div>

---

## 🌱 About Solwaste

Solwaste is India's leading organic waste management company, empowering households, societies, and businesses to transform waste into valuable resources. We design and manufacture smart composting machines and biogas plants that turn organic waste into nutrient-rich compost and clean cooking energy.

**Our Mission:** Making India waste-neutral, one household at a time.

**Website:** [www.solwaste.co](https://www.solwaste.co)

---

## ✨ Features

### 🏠 **For Households**
- Track daily green habits with the Solwaste App
- Learn ancient Indian waste wisdom (Ghar Ke Nuskhe)
- Monitor your personal environmental impact
- Share your sustainability journey on social media

### 🏢 **For Societies & Businesses**
- **OTC (Organic Trash Composter)** - Automated composting systems for residential complexes
- **Biogas Plants** - Convert food waste into cooking gas and electricity
- Real-time impact tracking and analytics
- 24/7 IoT monitoring and maintenance support

### 📱 **Solwaste App** (Coming Soon)
- Join your society's sustainability circle
- Track collective waste diversion
- Get AI-powered waste management tips
- View real-time data from installed machines

### 🛍️ **Online Shop**
- Premium compost from verified Solwaste machines
- Organic fertilizers and soil amendments
- Eco-friendly gardening products
- Home composting kits

---

## 🚀 Tech Stack

### **Frontend Framework**
- **React 19.2.1** - Modern UI library with TypeScript
- **React Router DOM 6.22.3** - Client-side routing with SPA fallback
- **Framer Motion 12.23.25** - Smooth animations and transitions

### **Styling**
- **Tailwind CSS** (CDN) - Utility-first CSS framework
- **Google Fonts** - DM Sans (Google Sans alternative), Poppins

### **3D & Interactions**
- **Three.js 0.181.2** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### **AI Integration**
- **Google Gemini AI** - Smart waste management recommendations
- **Voice-powered query system** - Ask waste-related questions

### **SEO & Performance**
- Dynamic meta tags for all pages
- Open Graph & Twitter Cards integration
- JSON-LD structured data (Organization, Product, Service)
- Sitemap.xml and robots.txt for search engines

### **Build Tools**
- **Vite 6.2.0** - Fast development and optimized production builds
- **TypeScript 5.8.2** - Type-safe development

---

## 📂 Project Structure

```
SolwasteWebsite/
├── components/           # Reusable React components
│   ├── Navbar.tsx       # Navigation bar with mobile responsiveness
│   ├── Footer.tsx       # Site-wide footer with links
│   ├── SEO.tsx          # Dynamic SEO meta tags manager
│   ├── HeroSection.tsx  # Homepage hero with 3D background
│   ├── ThreeScene.tsx   # Three.js 3D animations
│   ├── VentSection.tsx  # AI-powered query form
│   ├── ImpactSection.tsx # Environmental impact metrics
│   └── PartnersSection.tsx # Client testimonials
│
├── pages/               # Page components
│   ├── Home.tsx         # Homepage with all sections
│   ├── SolutionsPage.tsx # Solutions overview
│   ├── OTCPage.tsx      # OTC Composter details
│   ├── BiogasPage.tsx   # Biogas Plant details
│   ├── AppPage.tsx      # Mobile app preview & waitlist
│   └── ShopPage.tsx     # E-commerce store
│
├── services/            # API integrations
│   └── geminiService.ts # Google Gemini AI service
│
├── public/              # Static assets
│   ├── images/          # Product photos, screenshots
│   ├── videos/          # Demo videos
│   ├── sitemap.xml      # Search engine sitemap
│   ├── robots.txt       # Crawler instructions
│   ├── _redirects       # Netlify SPA routing
│   └── favicon.ico      # Site favicon
│
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment config
├── netlify.toml         # Netlify deployment config
└── package.json         # Dependencies and scripts
```

---

## 🛠️ Getting Started

### **Prerequisites**
- Node.js 16+ and npm
- Git for version control

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/SolwasteWebsite.git
   cd SolwasteWebsite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```bash
   GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view in browser.

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

The website is configured for seamless deployment on multiple platforms:

### **Vercel** (Recommended)
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add `GEMINI_API_KEY` in environment variables
4. Deploy automatically

### **Netlify**
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables

### **Custom Server**
Ensure your server redirects all routes to `index.html` for SPA routing:

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🎨 Design System

### **Color Palette**
- **Moss Green** (#2C3E2C) - Primary brand color
- **Cream** (#F5F5F0) - Background and light surfaces
- **Gold** (#D4AF37) - Accents and CTAs
- **Charcoal** (#1A1A1A) - Text and dark elements

### **Typography**
- **DM Sans** (Google Sans alternative) - Body text, headings
- **Poppins Semi Bold** - Logo and brand text

### **Responsive Breakpoints**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, solutions overview, impact metrics, partners |
| **Solutions** | `/solutions` | OTC and Biogas systems comparison |
| **OTC** | `/otc` | Organic Trash Composter product details |
| **Biogas** | `/biogas` | Biogas Plant specifications and case studies |
| **App** | `/app` | Mobile app preview and waitlist signup |
| **Shop** | `/shop` | E-commerce store for compost and products |

---

## 🔑 Key Features Implementation

### **1. SEO Optimization**
- Dynamic meta tags per page (title, description, keywords)
- Open Graph tags for social media sharing
- JSON-LD structured data for rich snippets
- Sitemap.xml for search engine crawling

### **2. AI-Powered Query System**
- Voice recording and text input support
- Google Gemini AI integration for smart responses
- Real-time waste management recommendations

### **3. 3D Animations**
- Three.js-powered background scenes
- Interactive product visualizations
- Smooth Framer Motion transitions

### **4. Mobile App Waitlist**
- Email collection with validation
- Modal popup with app screenshots
- Feature preview and launch notifications

---

## 🧪 Scripts

```bash
# Development
npm run dev          # Start development server on port 3000

# Production
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally
```

---

## 🤝 Contributing

This is a proprietary project for Solwaste. For inquiries about partnerships or collaborations, please contact us at:

**Email:** info@solwaste.co  
**Website:** [www.solwaste.co](https://www.solwaste.co)  
**Phone:** +91 XXXXX XXXXX

---

## 📄 License

© 2025 Solwaste. All rights reserved.

This is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit permission from Solwaste.

---

## 🌍 Join the Movement

Visit **[www.solwaste.co](https://www.solwaste.co)** to learn more about our mission and how you can contribute to building a zero-waste India.

**Together, we're composting our way to a cleaner tomorrow.** 🌱

---

<div align="center">

Made with 💚 by the Solwaste Team

[Website](https://www.solwaste.co) · [LinkedIn](#) · [Instagram](#) · [Twitter](#)

</div>
