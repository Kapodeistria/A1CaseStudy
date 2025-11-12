# Azure Deployment Guide

Dieses Dokument beschreibt, wie du die AI Service Hub Präsentation in Azure Static Web Apps deployen kannst.

## Voraussetzungen

### 1. Azure CLI installieren

**macOS:**
```bash
brew install azure-cli
```

**Windows:**
```powershell
winget install Microsoft.AzureCLI
```

Oder downloade von: https://docs.microsoft.com/cli/azure/install-azure-cli

### 2. Node.js installieren

Die Anwendung benötigt Node.js 18 oder höher.

**macOS:**
```bash
brew install node
```

**Windows:**
Downloade von: https://nodejs.org/

### 3. Azure Account

Du benötigst einen aktiven Azure Account. Erstelle einen kostenlosen Account hier:
https://azure.microsoft.com/free/

## Deployment-Optionen

### Option 1: Automatisches Deployment (Empfohlen)

#### Für macOS/Linux:

```bash
# Ausführbar machen (nur beim ersten Mal nötig)
chmod +x deploy.sh

# Deployment starten
./deploy.sh

# Mit benutzerdefinierten Parametern
./deploy.sh -g meine-resource-group -l westeurope
```

#### Für Windows (PowerShell):

```powershell
# Deployment starten
./deploy.ps1

# Mit benutzerdefinierten Parametern
./deploy.ps1 -ResourceGroupName "meine-resource-group" -Location "westeurope"
```

Das Skript wird:
1. ✅ Prüfen ob du in Azure eingeloggt bist (falls nicht, startet es `az login`)
2. ✅ Die Resource Group erstellen (falls nicht vorhanden)
3. ✅ Die Azure Infrastruktur via Bicep deployen
4. ✅ Die Anwendung bauen (`npm install` + `npm run build`)
5. ✅ Die App zu Azure Static Web Apps deployen
6. ✅ Die URL ausgeben, unter der deine App erreichbar ist

### Option 2: Manuelles Deployment

#### Schritt 1: Azure Login

```bash
az login
```

#### Schritt 2: Resource Group erstellen

```bash
az group create \
  --name rg-ai-service-hub-presentation \
  --location westeurope
```

#### Schritt 3: Infrastruktur deployen

```bash
az deployment group create \
  --name deployment-$(date +%Y%m%d-%H%M%S) \
  --resource-group rg-ai-service-hub-presentation \
  --template-file infrastructure/main.bicep \
  --parameters infrastructure/parameters.json
```

#### Schritt 4: Deployment Token abrufen

```bash
DEPLOYMENT_TOKEN=$(az deployment group show \
  --name <deployment-name> \
  --resource-group rg-ai-service-hub-presentation \
  --query "properties.outputs.staticWebAppDeploymentToken.value" \
  --output tsv)
```

#### Schritt 5: App bauen

```bash
npm install
npm run build
```

#### Schritt 6: Zu Azure deployen

```bash
npx @azure/static-web-apps-cli deploy ./dist \
  --deployment-token $DEPLOYMENT_TOKEN \
  --env production
```

## Kostenübersicht

### Azure Static Web Apps - Free Tier

Der **Free Tier** beinhaltet:
- ✅ **0,50 GB** Storage
- ✅ **100 GB** Bandwidth pro Monat
- ✅ **Custom domains** mit kostenlosem SSL
- ✅ **Automatische HTTPS** Weiterleitung
- ✅ **Global CDN** Distribution
- ✅ **Unbegrenzte** Environments (Preview)

**Kosten: 0€ / Monat** (für die meisten Präsentations-Use-Cases vollkommen ausreichend!)

### Alternative: Azure App Service

Falls du mehr Features brauchst, ist der **Basic B1** Plan eine Option:
- **Kosten:** ~13€ / Monat
- **Features:** Mehr Control, Custom deployment slots, VNet integration

## Infrastruktur-Details

### Erstellte Ressourcen

Das Bicep-Template erstellt:

1. **Azure Static Web App** (`Microsoft.Web/staticSites`)
   - Name: `ai-service-hub-presentation` (konfigurierbar)
   - SKU: `Free` (upgradeBAR auf `Standard`)
   - Location: `westeurope` (konfigurierbar)

### Konfiguration anpassen

Bearbeite [infrastructure/parameters.json](infrastructure/parameters.json):

```json
{
  "parameters": {
    "staticWebAppName": {
      "value": "dein-app-name"
    },
    "location": {
      "value": "westeurope"
    },
    "sku": {
      "value": "Free"
    }
  }
}
```

Verfügbare Locations:
- `westeurope` (Amsterdam)
- `northeurope` (Dublin)
- `eastus2` (Virginia, USA)
- `westus2` (Washington, USA)
- `centralus` (Iowa, USA)

## Nach dem Deployment

### 1. URL abrufen

```bash
az staticwebapp show \
  --name ai-service-hub-presentation \
  --resource-group rg-ai-service-hub-presentation \
  --query "defaultHostname" \
  --output tsv
```

### 2. Custom Domain hinzufügen

Im Azure Portal:
1. Navigiere zu deiner Static Web App
2. **Settings** → **Custom domains**
3. Klicke auf **Add**
4. Folge den Anweisungen für DNS-Konfiguration

### 3. Environment Variables setzen

Falls benötigt:

```bash
az staticwebapp appsettings set \
  --name ai-service-hub-presentation \
  --resource-group rg-ai-service-hub-presentation \
  --setting-names "KEY1=value1" "KEY2=value2"
```

## CI/CD mit GitHub Actions

Für automatische Deployments bei jedem Git Push, kannst du GitHub Actions nutzen.

Erstelle `.github/workflows/azure-static-web-apps.yml`:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true

      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          api_location: ""
          output_location: "dist"
```

Den API Token findest du im Azure Portal unter Static Web App → **Manage deployment token**.

## Troubleshooting

### "az: command not found"

Azure CLI ist nicht installiert oder nicht im PATH.
```bash
# macOS
brew install azure-cli

# Nach Installation Terminal neu starten
```

### "npm: command not found"

Node.js ist nicht installiert.
```bash
# macOS
brew install node
```

### Deployment schlägt fehl

1. Prüfe ob du eingeloggt bist: `az account show`
2. Prüfe ob du die richtigen Permissions hast
3. Schau in die Azure Portal Logs

### Build-Fehler

```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install

# Cache leeren
rm -rf dist .vite
npm run build
```

## Nützliche Befehle

```bash
# Deployment Logs anschauen
az staticwebapp show \
  --name ai-service-hub-presentation \
  --resource-group rg-ai-service-hub-presentation

# Static Web App löschen
az staticwebapp delete \
  --name ai-service-hub-presentation \
  --resource-group rg-ai-service-hub-presentation

# Resource Group löschen (inkl. aller Ressourcen)
az group delete \
  --name rg-ai-service-hub-presentation \
  --yes --no-wait
```

## Support

Bei Problemen:
1. Prüfe die [Azure Static Web Apps Dokumentation](https://docs.microsoft.com/azure/static-web-apps/)
2. Schau in die [Azure CLI Referenz](https://docs.microsoft.com/cli/azure/)
3. Erstelle ein Issue im Repository
