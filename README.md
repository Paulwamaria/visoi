# Visoi Machineries

React website for Visoi Machineries, a Nakuru-based agricultural machinery business offering machine fabrication, sales, delivery, installation, training, and maintenance support.

## Overview

The site presents Visoi's machinery catalogue, featured products, contact options, gallery, promotional banners, and support information. It is built with Create React App, React Bootstrap, MDB React components, Font Awesome icons, and local image assets.

## Key Features

- Product-focused homepage with calls to action
- Machinery gallery and carousel
- Featured machine sections for posho mills, chaff cutters, shellers, mixers, carpet driers, and charcoal presses
- Contact page with phone, email, WhatsApp, social links, catalogue, and business hours
- Responsive navigation and footer with visible logo branding
- Mobile-friendly carousel captions and footer machine thumbnails
- Embedded video preview with local thumbnail

## Tech Stack

- React 18
- Create React App / React Scripts
- React Router
- React Bootstrap and Bootstrap 5
- MDB React
- React Player
- Font Awesome

## Project Structure

```text
src/
  components/       Page and layout components
  styles/           Component-specific CSS
  assets/images/    Product and homepage images
  assets/gallery/   Gallery and footer machine images
public/
  logo.png          Site logo
  _redirects        Netlify routing support
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Deployment

The app builds to the `build/` directory:

```bash
npm run build
```

The `public/_redirects` file supports client-side routing on Netlify.

## Notes

- The production build currently uses `cross-env CI=false react-scripts build`, so warnings do not fail deployment.
- Browserlist may report that `caniuse-lite` is outdated during builds. This is a dependency metadata warning, not a compile failure.
- Keep product images optimized before adding them to `src/assets` to avoid unnecessary bundle size growth.
