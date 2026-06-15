# PetitionIQ UI - React Conversion

A professional React conversion of the PetitionIQ landing page. Built with modern tooling, component-based architecture, and responsive design.

## 🚀 Features

- **React 18** - Latest React with concurrent rendering
- **Vite** - Lightning-fast build tool and dev server
- **Component-Based Architecture** - Modular, reusable components
- **Responsive Design** - Mobile-first approach with Tailwind-ready CSS
- **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data
- **Accessibility** - WCAG compliant with skip links and semantic HTML
- **Modern Tooling** - ESLint, Vite, modern JavaScript features

## 📁 Project Structure

```
PetitionIQ-UI/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Top navigation bar
│   │   ├── Navigation.css
│   │   ├── CookieBar.jsx           # Cookie consent banner
│   │   ├── CookieBar.css
│   │   └── sections/
│   │       ├── Hero.jsx            # Hero section with sample panel
│   │       ├── Hero.css
│   │       ├── TrustBar.jsx        # Trust indicators bar
│   │       ├── TrustBar.css
│   │       ├── Tiers.jsx           # Pricing/service tiers
│   │       ├── Tiers.css
│   │       ├── Proof.jsx           # Founder card & platform features
│   │       ├── Proof.css
│   │       ├── Evaluator.jsx       # How it works section
│   │       └── Evaluator.css
│   ├── App.jsx                     # Main app component
│   ├── App.css
│   ├── index.css                   # Global styles & brand tokens
│   └── main.jsx                    # React entry point
├── index.html                      # HTML template with SEO
├── package.json
├── vite.config.js
├── .eslintrc.json
├── .gitignore
└── README.md
```

## 🎨 Design System

### Brand Colors
- **Navy**: `#0f2a4f`
- **Navy Deep**: `#081a34`
- **Gold**: `#c59c38`
- **Gray**: `#f2f4f7`
- **Green**: `#1e6b3a`

### Typography
- **Display Font**: Playfair Display (serif)
- **Body Font**: Inter (sans-serif)

### Spacing Scale
- Base unit: 8px
- Section padding: 88px

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts development server at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Generates optimized build in `dist/` directory

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

## 📦 Key Dependencies

- **react**: ^18.2.0 - UI library
- **react-dom**: ^18.2.0 - React DOM renderer
- **vite**: ^5.0.8 - Build tool & dev server

## 🎯 Components Overview

### Navigation
Fixed header with logo and navigation links. Includes mobile hamburger menu support.

### Hero
Full-viewport hero section with animated gradient backgrounds and sample evaluation panel.

### TrustBar
Small bar highlighting key trust indicators and features.

### Tiers
Four-column pricing tiers showing different service levels (Stage A-C).

### Proof
Section showcasing founder credentials and platform features.

### Evaluator
Interactive "how it works" section with step-by-step navigation.

### CookieBar
Fixed bottom banner for cookie consent management with localStorage persistence.

## 🌐 SEO Features

- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data
- Semantic HTML markup
- Skip to main content link

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Skip link for keyboard navigation
- Proper heading hierarchy
- Color contrast compliance

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Connect GitHub repository to Netlify for automatic deployments.

### Traditional Hosting
```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## 🔄 Component Usage Example

```jsx
import Hero from './components/sections/Hero'

function App() {
  return (
    <main>
      <Hero />
    </main>
  )
}

export default App
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 📄 License

MIT

## 👨‍💻 Author

SHAIK IMTIAZ ALI - PetitionIQ Development Team

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📞 Support

For issues or questions, please create a GitHub issue in the repository.
