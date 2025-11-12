# AI Service Hub Presentation

Moderne, interaktive Präsentation für den Public Sector AI Service Hub von A1 Telekom Austria.

## 🎯 Features

- **3 Präsentationsversionen:**
  - Personal Deck (Persönliche Vorstellung)
  - Tech Deck (Detaillierte Case Study)
  - Board Deck (Executive Summary)

- **Interactive Navigation:**
  - Slide-by-Slide Navigation
  - Präsentations-Timer
  - Slide-Indikatoren
  - Keyboard Shortcuts
  - Responsive Design

- **A1 Branding:**
  - A1 Farben und Typography
  - Moderne Glasmorphism UI
  - Animationen und Transitions

## 🚀 Live Demo

**Production (Azure App Service):** https://a1-casestudy-ai.azurewebsites.net
**Backup (Azure Static Web Apps):** https://agreeable-pond-027b9ca03.3.azurestaticapps.net

Both deployments provide redundancy and high availability.

### Routen:
- `/` - Version Selector
- `/personal` - Personal Presentation
- `/case-study` - Tech Deep Dive
- `/case-study-board` - Board Presentation

## 💻 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Presentation:** Spectacle
- **Styling:** CSS Variables + Tailwind-inspired classes
- **Animation:** Framer Motion
- **Routing:** React Router
- **Hosting:** Azure App Service + Azure Static Web Apps (redundant deployment)

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

```bash
npm run dev
```

Öffne [http://localhost:5173](http://localhost:5173) im Browser.

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── NavigationOverlay.tsx
│   ├── InfoCard.tsx
│   └── ...
├── slides/             # Slide components
│   ├── slides-simple/  # Tech deck slides
│   ├── slides-personal/ # Personal presentation
│   └── slides-board/   # Board presentation
├── theme/              # Theme configuration
│   ├── spectacleTheme.tsx
│   └── tokens.css
└── App.tsx            # Main app & routing
```

## 🚢 Deployment

### Automatic Deployment (GitHub Actions)

Siehe [GITHUB_SETUP.md](GITHUB_SETUP.md) für detaillierte Anweisungen.

### Manual Deployment

Siehe [DEPLOYMENT.md](DEPLOYMENT.md) für Azure CLI Deployment.

### Quick Deploy

```bash
# Build the app
npm run build

# Deploy using the script
./deploy.sh
```

## 🎨 Customization

### Theme Colors

Bearbeite `src/theme/tokens.css`:

```css
:root {
  --brand-primary: #E60000;    /* A1 Red */
  --accent-1: #00AEEF;         /* A1 Cyan */
  /* ... */
}
```

### Adding Slides

1. Erstelle neue Slide-Komponente in `src/slides/`
2. Importiere in `src/App.tsx`
3. Füge zur entsprechenden `<Deck>` hinzu

### Navigation Overlay

Anpassungen in `src/components/NavigationOverlay.tsx` und `.css`

## 📝 Keyboard Shortcuts

- `←` / `→` - Vorherige/Nächste Slide
- `Home` - Erste Slide
- `End` - Letzte Slide
- `F` - Fullscreen Toggle
- `O` - Overview Mode

## 🌐 Browser Support

- Chrome/Edge (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)

## 📄 License

Copyright © 2025 A1 Telekom Austria

## 👤 Author

Christos Kapodistrias
- Email: kapodeistria@pm.me

## 🙏 Acknowledgments

- Built with [Spectacle](https://formidable.com/open-source/spectacle/)
- Powered by [Vite](https://vitejs.dev/)
- Hosted on [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)
- Generated with [Claude Code](https://claude.com/claude-code)
