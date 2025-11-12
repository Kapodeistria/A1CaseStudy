# GitHub Actions Setup Guide

Diese Anleitung erklärt, wie du automatische Deployments über GitHub Actions einrichtest.

## Voraussetzungen

- GitHub Account
- Git Repository für dieses Projekt
- Azure Static Web App (bereits erstellt ✅)

## Schritt-für-Schritt Anleitung

### 1. Git Repository initialisieren

Falls noch nicht geschehen:

```bash
cd /Users/ck/Library/CloudStorage/ProtonDrive-kapodeistria@pm.me-folder/abt/presentations/public-sector-ai-service-hub

# Git initialisieren
git init

# .gitignore erstellen
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
package-lock.json

# Build output
dist/
*.zip

# Environment files
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*

# Azure
.azure/
EOF

# Erste Commit
git add .
git commit -m "Initial commit: AI Service Hub Presentation

- React + TypeScript + Vite setup
- Spectacle presentation framework
- A1 Telekom branding
- Navigation overlay with timer
- Azure Static Web Apps deployment config
- GitHub Actions CI/CD workflow

🤖 Generated with Claude Code"
```

### 2. GitHub Repository erstellen

1. Gehe zu https://github.com/new
2. Repository Name: `ai-service-hub-presentation` (oder eigener Name)
3. Visibility: `Private` oder `Public`
4. **NICHT** "Initialize with README" anklicken
5. Klicke auf "Create repository"

### 3. Repository verbinden

```bash
# Remote hinzufügen (ersetze USERNAME mit deinem GitHub Username)
git remote add origin https://github.com/USERNAME/ai-service-hub-presentation.git

# Branch auf main umbenennen (falls nötig)
git branch -M main

# Push zu GitHub
git push -u origin main
```

### 4. Azure Deployment Token als GitHub Secret hinzufügen

**Deployment Token:**
```
bc778af7a70b728400a11d48d9f1c5abd70106560609560cee0ae19b01c8bf2803-2d8f05ca-4739-4030-9263-aa4d1c0123530032406045a1dc03
```

**Schritte:**

1. Gehe zu deinem GitHub Repository
2. Klicke auf **Settings** → **Secrets and variables** → **Actions**
3. Klicke auf **New repository secret**
4. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. Secret: Füge den Deployment Token oben ein
6. Klicke auf **Add secret**

### 5. Workflow testen

Der Workflow wird automatisch ausgeführt bei:
- Jedem `git push` zum `main` Branch
- Pull Requests
- Manuell über GitHub Actions Tab

**Manuell ausführen:**
1. Gehe zu **Actions** Tab in deinem Repository
2. Wähle "Azure Static Web Apps CI/CD"
3. Klicke auf "Run workflow"
4. Wähle Branch `main`
5. Klicke auf "Run workflow"

### 6. Deployment Status überprüfen

1. Gehe zum **Actions** Tab
2. Klicke auf den laufenden Workflow
3. Beobachte den Build- und Deployment-Prozess
4. Nach Erfolg ist deine App live unter:
   **https://nice-ground-045a1dc03.3.azurestaticapps.net**

## Workflow Features

### Automatisches Deployment
- ✅ Automatischer Build bei jedem Push
- ✅ Dependency Caching für schnellere Builds
- ✅ TypeScript Type Checking
- ✅ Vite Production Build
- ✅ Deployment zu Azure

### Preview Deployments
- ✅ Automatische Preview-URLs für Pull Requests
- ✅ Automatisches Cleanup beim PR-Close

### Manual Trigger
- ✅ Manueller Workflow-Start über GitHub UI

## Troubleshooting

### Secret nicht gefunden
Stelle sicher, dass der Secret Name **exakt** `AZURE_STATIC_WEB_APPS_API_TOKEN` lautet.

### Build schlägt fehl
Prüfe die Logs im Actions Tab. Häufige Probleme:
- Fehlende Dependencies: `npm ci` schlägt fehl
- TypeScript Fehler: `npm run build` schlägt fehl
- Node Version: Workflow nutzt Node 20

### Deployment schlägt fehl
- Prüfe ob der Deployment Token noch gültig ist
- Prüfe ob die Azure Static Web App noch existiert

## Nächste Schritte

### Custom Domain hinzufügen
1. Gehe zu Azure Portal
2. Öffne deine Static Web App
3. **Settings** → **Custom domains**
4. Folge den Anweisungen

### Environment Variables
Falls benötigt, füge in Azure Portal hinzu:
**Configuration** → **Application settings**

### Branch Protection
Schütze deinen `main` Branch:
1. **Settings** → **Branches**
2. **Add branch protection rule**
3. Branch name pattern: `main`
4. Enable: "Require status checks to pass before merging"
5. Select: "Build and Deploy Job"

## Hilfreiche Links

- [Azure Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Docs](https://docs.github.com/actions)
- [Vite Docs](https://vitejs.dev/)
- [Spectacle Docs](https://formidable.com/open-source/spectacle/)
