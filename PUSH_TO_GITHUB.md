# GitHub Push Instructions

## Repository bereit zum Pushen!

Dein Code ist bereits committed und bereit für GitHub. Der Remote ist konfiguriert auf:
```
https://github.com/Kapodeistria/A1CaseStudy.git
```

## Option 1: Push via Terminal (Einfachste Methode)

Öffne Terminal und führe aus:

```bash
cd "/Users/ck/Library/CloudStorage/ProtonDrive-kapodeistria@pm.me-folder/abt/presentations/public-sector-ai-service-hub"

# GitHub wird nach deinem Username und Personal Access Token fragen
git push -u origin main
```

### GitHub Credentials:
- **Username:** Kapodeistria
- **Password:** Verwende einen **Personal Access Token** (NICHT dein GitHub Passwort!)

### Personal Access Token erstellen:
1. Gehe zu: https://github.com/settings/tokens/new
2. Note: "A1 Case Study Deployment"
3. Expiration: 90 days (oder länger)
4. Scopes: `repo` (alle Checkboxen unter "repo")
5. Klicke "Generate token"
6. **KOPIERE DEN TOKEN SOFORT** - er wird nur einmal angezeigt!
7. Verwende diesen Token als Passwort beim `git push`

## Option 2: SSH Key Setup (Dauerhaft)

Falls du SSH bevorzugst:

```bash
# SSH Key generieren (falls nicht vorhanden)
ssh-keygen -t ed25519 -C "kapodeistria@pm.me"

# Key zu SSH Agent hinzufügen
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Public Key anzeigen und kopieren
cat ~/.ssh/id_ed25519.pub
```

Dann:
1. Gehe zu: https://github.com/settings/ssh/new
2. Title: "MacBook"
3. Key: Füge den kopierten Public Key ein
4. Klicke "Add SSH key"

Remote URL ändern:
```bash
git remote set-url origin git@github.com:Kapodeistria/A1CaseStudy.git
git push -u origin main
```

## Nach erfolgreichem Push

### 1. GitHub Secret hinzufügen

Gehe zu: https://github.com/Kapodeistria/A1CaseStudy/settings/secrets/actions

Klicke **New repository secret**:
- Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
- Secret:
```
bc778af7a70b728400a11d48d9f1c5abd70106560609560cee0ae19b01c8bf2803-2d8f05ca-4739-4030-9263-aa4d1c0123530032406045a1dc03
```

### 2. GitHub Actions Workflow starten

Der Workflow startet automatisch nach dem Push!

Überwache den Deployment:
- Gehe zu: https://github.com/Kapodeistria/A1CaseStudy/actions
- Der Workflow "Azure Static Web Apps CI/CD" sollte laufen
- Nach ca. 2-3 Minuten ist die App live

### 3. Live URL überprüfen

Nach erfolgreichem Deployment:
**https://nice-ground-045a1dc03.3.azurestaticapps.net**

### Routen:
- `/` - Version Selector
- `/personal` - Personal Presentation
- `/case-study` - Tech Deep Dive
- `/case-study-board` - Board Presentation

## Troubleshooting

### "Permission denied (publickey)"
→ Verwende HTTPS statt SSH oder füge SSH Key hinzu (siehe oben)

### "Authentication failed"
→ Verwende Personal Access Token statt Passwort (siehe Option 1)

### Workflow schlägt fehl
→ Überprüfe ob das GitHub Secret korrekt hinzugefügt wurde

### Build Fehler
→ Alle TypeScript Fehler sollten behoben sein, aber prüfe die Logs:
  https://github.com/Kapodeistria/A1CaseStudy/actions

## Status

✅ Git Repository initialisiert
✅ Code committed (6c87a52 - feat: Add Navigation Overlay and Azure Deployment)
✅ Remote configured (https://github.com/Kapodeistria/A1CaseStudy.git)
✅ Azure Static Web App deployed
✅ GitHub Actions Workflow konfiguriert
✅ Deployment Token generiert

⏳ **Nächster Schritt:** Git Push ausführen (siehe oben)
