# Northstar AI Landing Page

A premium, production-ready landing page for a hackathon project built with semantic HTML, CSS, and vanilla JavaScript.

## Project

Northstar AI is a polished AI automation platform concept designed to feel modern, premium, and conversion-focused. The experience combines motion, responsive layout, accessibility, and modular front-end architecture.

## Features

- Premium AI SaaS aesthetic with glassmorphism, soft gradients, and floating cards
- Responsive hero, trust, features, pricing, testimonials, FAQ, and CTA sections
- Dynamic pricing logic with currency and billing toggle updates
- Mobile/desktop feature accordion state persistence
- Scroll reveal, progress bar, shimmer loading state, and smooth scrolling
- SEO-friendly structure with accessible buttons, labels, and semantic HTML

## Architecture

- HTML structure is split into semantic sections for hero, trust, features, pricing, testimonials, FAQ, CTA, and footer
- CSS is modularized into style, animations, and responsive layers using CSS variables and performance-friendly transitions
- JavaScript is split into pricing, accordion, and app modules for maintainability

## Folder Structure

```text
project/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── pricing.js
│   ├── accordion.js
│   └── app.js
├── assets/
│   └── svg/
└── README.md
```

## How to Run

Open the project locally with any static server.

### Option 1: Python

```bash
cd /path/to/hackthon
python -m http.server 8000
```

Then open http://127.0.0.1:8000/ in your browser.

### Option 2: VS Code Live Server

1. Open the folder in VS Code
2. Install the Live Server extension
3. Right-click on index.html and choose Open with Live Server

## Performance

- Uses transform and opacity-based animations for smooth rendering
- Avoids layout-thrashing properties such as width, height, top, and left during motion
- Uses Intersection Observer for scroll-based reveal effects

## SEO

- Includes title, meta description, keywords, Open Graph, Twitter card metadata, canonical, robots, and theme-color tags
- Uses semantic headings, descriptive alt text, and accessible button labels

## Accessibility

- Keyboard-friendly buttons and links
- Visible focus styles
- ARIA attributes for accordion and FAQ panels
- High contrast palette and screen-reader friendly content structure

## Deployment

The project can be deployed directly to GitHub Pages by publishing the workspace root.

1. Push the project to GitHub
2. Open the repository settings
3. Navigate to Pages
4. Select the main branch and publish the site
