# AI-Enabled Service Hub - Public Sector Presentation

> **React + Spectacle + MDX** presentation for AI-driven digital transformation in the public sector with sovereign cloud infrastructure.

[![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-20%2B-brightgreen.svg)](https://nodejs.org)
[![React](https://img.shields.io/badge/react-18.3-blue.svg)](https://reactjs.org)
[![Spectacle](https://img.shields.io/badge/spectacle-10.1-purple.svg)](https://commerce.nearform.com/open-source/spectacle/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build & Deploy](#build--deploy)
  - [Azure Static Web Apps](#azure-static-web-apps)
  - [Azure Blob Static Website](#azure-blob-static-website)
- [Asset Extraction](#asset-extraction)
- [Customization](#customization)
- [Repository Split](#repository-split)
- [Tech Stack](#tech-stack)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## 🎯 Overview

**Use Case:** Public Sector AI-enabled Service Hub
**Organization:** A1 Telekom Austria
**Theme:** Data Sovereignty, GDPR & AI Act Compliance, Azure Cloud

This presentation showcases a comprehensive solution for digital transformation in the public sector using AI, built on Azure's sovereign cloud infrastructure (Germany North region).

### Key Topics

1. **Context & Challenges** - Digitalization pressure in public sector
2. **Vision & Value** - AI-enabled service hub concept
3. **Architecture** - Azure-native, sovereign cloud design
4. **AI & ML** - Automated application processing use cases
5. **Security & Compliance** - GDPR, AI Act, data sovereignty
6. **Deployment** - Sovereign vs. Hybrid cloud options
7. **TCO & ROI** - 3-year business case (€240K savings, 312% ROI)
8. **Risks & Mitigations** - Comprehensive risk management
9. **Call to Action** - 90-day implementation roadmap

---

## ✨ Features

- **React 18 + TypeScript** - Modern, type-safe development
- **Spectacle 10** - Powerful presentation framework
- **MDX Support** - Write slides in Markdown with React components
- **A1 Branding** - Customizable theme via CSS variables
- **Responsive Design** - Works on desktop, tablet, mobile
- **Static Export** - Deploy as SPA to Azure or any static host
- **Asset Extraction** - Reuse logos/diagrams from parent repo
- **i18n Ready** - German and English translations
- **Repo Split** - Extract subfolder as standalone repo

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ ([Download](https://nodejs.org/))
- **npm** 10+
- Git (for repository split)

### Installation

```bash
# Navigate to presentation folder
cd presentations/public-sector-ai-service-hub

# Install dependencies
npm install

# Extract assets from parent repo (optional)
npm run extract

# Start development server
npm run dev
```

The presentation will open at [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
presentations/public-sector-ai-service-hub/
├── package.json              # Dependencies & scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── index.html                # Entry HTML
├── README.md                 # This file
├── .gitignore                # Git ignore rules
├── .editorconfig             # Editor configuration
│
├── public/
│   ├── favicon.svg           # A1 favicon
│   └── robots.txt            # SEO robots file
│
├── src/
│   ├── main.tsx              # React entry point
│   ├── app.css               # Global styles
│   │
│   ├── theme/
│   │   ├── tokens.css        # CSS variables (branding)
│   │   └── spectacleTheme.ts # Spectacle theme config
│   │
│   ├── components/
│   │   ├── TitleSlide.tsx    # Title slide component
│   │   ├── Section.tsx       # Section divider component
│   │   └── KPI.tsx           # KPI card component
│   │
│   ├── slides/
│   │   ├── 00-title.mdx      # Title slide
│   │   ├── 01-context.mdx    # Context & challenges
│   │   ├── 02-vision.mdx     # Vision & value prop
│   │   ├── 03-architecture.mdx
│   │   ├── 04-data-ml.mdx
│   │   ├── 05-security-compliance.mdx
│   │   ├── 06-deployment.mdx
│   │   ├── 07-tco-roi.mdx
│   │   ├── 08-risks.mdx
│   │   └── 09-cta.mdx        # Call to action
│   │
│   ├── content/
│   │   ├── images/           # Copied logos/diagrams
│   │   └── data/             # JSON/YAML data files
│   │
│   └── i18n/
│       ├── de.ts             # German translations
│       └── en.ts             # English translations
│
└── scripts/
    ├── extract-assets.mjs    # Asset extraction script
    ├── build-and-serve.mjs   # Build + serve script
    └── split-to-new-repo.sh  # Git subtree split script
```

---

## 💻 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Type checking (no emit)
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview

# Extract assets from parent repo
npm run extract

# Build + serve (combined)
npm run serve

# Deploy to Azure (prints instructions)
npm run deploy:azure
```

### Keyboard Shortcuts (Presentation Mode)

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` / `Shift+Space` | Previous slide |
| `↑` / `↓` | Navigate vertical slides |
| `Esc` / `O` | Slide overview mode |
| `F` | Fullscreen |
| `Alt+P` | Presenter mode (with notes) |

---

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

This generates a static site in `dist/` with:
- Minified JavaScript/CSS
- Optimized assets
- Source maps (optional)

### Azure Static Web Apps

**Option 1: Azure Portal**

1. Go to [Azure Portal](https://portal.azure.com)
2. Create **Static Web App** resource
3. Configure:
   - **Name:** `public-sector-ai-hub`
   - **Region:** `Germany West Central` (Frankfurt)
   - **Source:** GitHub/Azure DevOps/Manual
4. Deployment configuration:
   - **App location:** `/presentations/public-sector-ai-service-hub`
   - **Output location:** `dist`
5. Save and wait for deployment

**Option 2: Azure CLI**

```bash
# Login
az login

# Create resource group
az group create \
  --name rg-public-sector-presentation \
  --location germanywestcentral

# Create Static Web App
az staticwebapp create \
  --name public-sector-ai-hub \
  --resource-group rg-public-sector-presentation \
  --source https://github.com/YOUR_ORG/YOUR_REPO \
  --location germanywestcentral \
  --branch main \
  --app-location "/presentations/public-sector-ai-service-hub" \
  --output-location "dist" \
  --login-with-github
```

**Option 3: GitHub Actions** (Automatic)

Azure Static Web Apps auto-generates a GitHub Actions workflow. Example:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
    paths:
      - 'presentations/public-sector-ai-service-hub/**'

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/presentations/public-sector-ai-service-hub"
          output_location: "dist"
```

---

### Azure Blob Static Website

**Step 1: Create Storage Account**

```bash
# Variables
RESOURCE_GROUP="rg-public-sector-presentation"
LOCATION="germanywestcentral"
STORAGE_ACCOUNT="stpublicsectorai"  # Must be globally unique

# Create storage account
az storage account create \
  --name $STORAGE_ACCOUNT \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --sku Standard_LRS \
  --kind StorageV2 \
  --access-tier Hot

# Enable static website hosting
az storage blob service-properties update \
  --account-name $STORAGE_ACCOUNT \
  --static-website \
  --index-document index.html \
  --404-document index.html
```

**Step 2: Upload Build**

```bash
# Build locally
npm run build

# Upload to $web container
az storage blob upload-batch \
  --account-name $STORAGE_ACCOUNT \
  --source ./dist \
  --destination '$web' \
  --overwrite

# Get static website URL
az storage account show \
  --name $STORAGE_ACCOUNT \
  --resource-group $RESOURCE_GROUP \
  --query "primaryEndpoints.web" \
  --output tsv
```

**Step 3: Add Custom Domain + CDN (Optional)**

```bash
# Create Azure CDN profile
az cdn profile create \
  --name cdn-public-sector-ai \
  --resource-group $RESOURCE_GROUP \
  --sku Standard_Microsoft \
  --location germanywestcentral

# Create CDN endpoint
az cdn endpoint create \
  --name public-sector-ai-hub \
  --profile-name cdn-public-sector-ai \
  --resource-group $RESOURCE_GROUP \
  --origin $STORAGE_ACCOUNT.z1.web.core.windows.net \
  --origin-host-header $STORAGE_ACCOUNT.z1.web.core.windows.net
```

---

## 🎨 Asset Extraction

Extract reusable assets (logos, diagrams, markdown) from the parent repository:

```bash
npm run extract
```

This script:
1. Searches `../../` (parent repo root) for assets
2. Finds: `*.png`, `*.svg`, `*.jpg`, `*.md`, `*.json`
3. Copies to `src/content/images/`, `src/content/data/`
4. Generates `src/content/asset-manifest.json`

**Customization:**

Edit `scripts/extract-assets.mjs` to adjust:
- `CONFIG.patterns` - File patterns to search
- `CONFIG.exclude` - Directories to skip
- `CONFIG.targets` - Destination folders

---

## 🎨 Customization

### Change Branding

Edit `src/theme/tokens.css`:

```css
:root {
  --brand-primary: #E60000;  /* Your primary color */
  --brand-bg: #0B0B0B;       /* Background color */
  --brand-text: #FFFFFF;     /* Text color */
  --accent-1: #00AEEF;       /* Accent color */
}
```

### Add New Slides

1. Create new MDX file in `src/slides/`:

```mdx
// src/slides/10-new-slide.mdx
import { Section } from '../components/Section'

<Section title="New Topic" subtitle="Details" color="secondary" icon="🚀" />
```

2. Import in `src/main.tsx`:

```tsx
import NewSlide from './slides/10-new-slide.mdx'

// Add to Deck
<Deck>
  {/* ... existing slides ... */}
  <NewSlide />
</Deck>
```

### Customize Components

Components are in `src/components/`:
- `TitleSlide.tsx` - Title slide layout
- `Section.tsx` - Section divider slides
- `KPI.tsx` - KPI cards with metrics

Example: Add a new component:

```tsx
// src/components/Quote.tsx
import React from 'react'
import { Text, FlexBox } from 'spectacle'

interface QuoteProps {
  text: string
  author: string
}

export const Quote: React.FC<QuoteProps> = ({ text, author }) => (
  <FlexBox flexDirection="column" alignItems="center">
    <Text fontSize="2xl" color="quinary" style={{ fontStyle: 'italic' }}>
      "{text}"
    </Text>
    <Text fontSize="lg" color="secondary" margin="1rem 0 0 0">
      — {author}
    </Text>
  </FlexBox>
)
```

---

## 🔀 Repository Split

To extract this presentation as a standalone repository:

```bash
# Make script executable (if not already)
chmod +x scripts/split-to-new-repo.sh

# Run split script
./scripts/split-to-new-repo.sh git@github.com:YOUR_ORG/new-presentation.git
```

This uses `git subtree split` to:
1. Create temp branch with only this subfolder's history
2. Push to new remote as `main` branch
3. Clean up temp branch

**Alternative: `git filter-repo`** (more powerful, requires installation)

```bash
# Install git-filter-repo
pip install git-filter-repo

# Clone parent repo
git clone git@github.com:original/repo.git new-presentation
cd new-presentation

# Filter to keep only subfolder
git filter-repo --path presentations/public-sector-ai-service-hub --path-rename presentations/public-sector-ai-service-hub:

# Add new remote and push
git remote add origin git@github.com:YOUR_ORG/new-presentation.git
git push -u origin main
```

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 18.3.1 |
| **Language** | TypeScript | 5.4.5 |
| **Build Tool** | Vite | 5.2.10 |
| **Presentation** | Spectacle | 10.1.8 |
| **Slides** | MDX | 3.0.1 |
| **Styling** | CSS Variables | - |
| **Node** | Node.js | 20+ |

### Why This Stack?

- **Spectacle**: Built by FormidableLabs, production-grade presentation framework
- **MDX**: Allows mixing Markdown + React components
- **Vite**: Lightning-fast dev server & build times
- **TypeScript**: Type safety for large codebases
- **CSS Variables**: Easy theme customization without rebuilding

---

## ⚙️ Configuration

### Environment Variables (Optional)

Create `.env.local`:

```bash
# Deployment
VITE_APP_URL=https://public-sector-ai-hub.azurestaticapps.net

# Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Feature flags
VITE_ENABLE_PRESENTER_MODE=true
```

### Vite Configuration

`vite.config.ts`:
- **Base URL**: Change for subdirectory hosting
- **Build output**: Customize `outDir`, `assetsDir`
- **Plugins**: MDX, React support

### TypeScript Configuration

`tsconfig.json`:
- **Path aliases**: `@/`, `@components/`, `@theme/`
- **Strict mode**: Enabled
- **JSX**: React 18 automatic runtime

---

## 🐛 Troubleshooting

### Issue: `npm install` fails with peer dependency warnings

**Solution:**
```bash
npm install --legacy-peer-deps
```

### Issue: MDX slides not rendering

**Solution:**
- Ensure `.mdx` files have correct syntax
- Check imports in `main.tsx`
- Verify MDX plugin in `vite.config.ts`

### Issue: CSS variables not applied

**Solution:**
- Import `tokens.css` in `main.tsx`
- Check browser DevTools for CSS loading
- Clear Vite cache: `rm -rf node_modules/.vite`

### Issue: Build fails with "Cannot find module"

**Solution:**
- Run `npm run type-check` to identify issues
- Check path aliases in `tsconfig.json`
- Ensure all imports use correct relative paths

### Issue: Assets not found after deployment

**Solution:**
- Use relative paths in code: `./images/logo.svg`
- Set `base: './'` in `vite.config.ts`
- Check Azure storage CORS settings

---

## 📊 Performance

### Build Stats (Typical)

- **Bundle Size**: ~800 KB (gzipped: ~250 KB)
- **Build Time**: 5-10 seconds
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

### Optimization Tips

1. **Code Splitting**: Already configured in `vite.config.ts`
2. **Image Optimization**: Use WebP/AVIF formats
3. **Lazy Loading**: Spectacle handles slide lazy loading
4. **CDN**: Enable Azure CDN for global distribution

---

## 📝 License

**UNLICENSED** - Proprietary software for A1 Telekom Austria.

For questions or licensing inquiries, contact:
- **Email**: kapodeistria@pm.me
- **Organization**: A1 Telekom Austria

---

## 👥 Authors

**Christos Kapodistrias**
Elite Solution Architect
A1 Telekom Austria

---

## 🙏 Acknowledgments

- [Spectacle](https://commerce.nearform.com/open-source/spectacle/) by FormidableLabs
- [Vite](https://vitejs.dev/) by Evan You
- [MDX](https://mdxjs.com/) by Titus Wormer

---

## 📚 Additional Resources

- [Spectacle Documentation](https://commerce.nearform.com/open-source/spectacle/)
- [Azure Static Web Apps Docs](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [Azure Blob Storage Static Websites](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)
- [Vite Configuration Reference](https://vitejs.dev/config/)
- [MDX Syntax Guide](https://mdxjs.com/docs/what-is-mdx/)

---

**Ready to present!** 🎉

Run `npm run dev` and navigate to [http://localhost:5173](http://localhost:5173) to see your presentation.

For questions or issues, please open an issue in the repository or contact the maintainer.
