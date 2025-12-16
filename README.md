# Solwaste Website

Official website for Solwaste - Turning Organic Waste into Compost & Biogas Energy.

## Tech Stack

- React 19.2.1 with TypeScript
- React Router DOM 6.22.3
- Framer Motion 12.23.25
- Tailwind CSS (CDN)
- Three.js with @react-three/fiber
- Vite

## Run Locally

**Prerequisites:** Node.js 16+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env` file:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `/components` - Reusable React components
- `/pages` - Page components (Home, Solutions, OTC, Biogas, App, Shop)
- `/services` - API services (Gemini AI integration)
- `/public` - Static assets (images, videos, 3D models)

## License

© 2025 Solwaste. All rights reserved.
