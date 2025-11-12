/**
 * German (Deutsch) Translations
 * Public Sector AI Service Hub
 */

export const de = {
  common: {
    org: 'A1 Telekom Austria',
    brandPrimary: '#E60000',
    accentBlue: '#00AEEF',
    close: 'Schließen',
    next: 'Weiter',
    previous: 'Zurück',
    loading: 'Lädt...'
  },

  presentation: {
    title: 'AI-Enabled Service Hub',
    subtitle: 'Digitale Transformation im öffentlichen Sektor mit souveräner Daten-Infrastruktur'
  },

  sections: {
    context: 'Kontext & Herausforderungen',
    vision: 'Vision & Value Proposition',
    architecture: 'Architektur',
    dataML: 'AI & Machine Learning',
    security: 'Security & Compliance',
    deployment: 'Deployment & Operations',
    tco: 'TCO & ROI',
    risks: 'Risiken & Mitigations',
    cta: 'Call to Action'
  },

  kpis: {
    processReduction: '70% Prozesszeit-Reduktion',
    availability: '24/7 Verfügbarkeit',
    compliance: '100% GDPR & AI Act Compliance',
    roi: '312% ROI nach 3 Jahren',
    breakEven: '18 Monate Break-Even'
  },

  features: {
    aiAssistants: 'AI-Assistenten',
    aiAssistantsDesc: 'GPT-4 basierte Chatbots für Bürgeranfragen, Dokumentenanalyse mit Form Recognizer, automatische Antragsprüfung',
    dataSovereignty: 'Daten-Souveränität',
    dataSovereigntyDesc: 'Azure Germany/Austria Regions, Ende-zu-Ende Verschlüsselung, Confidential Computing für KI-Workloads',
    analytics: 'Analytics & Insights',
    analyticsDesc: 'Echtzeit-Dashboards, Predictive Analytics für Ressourcenplanung, Transparenz-Reports für Bürger'
  },

  deployment: {
    fullSovereign: 'Full Sovereign',
    fullSovereignDesc: 'Azure Germany North (Frankfurt), 100% der Daten in EU, Höchste Compliance',
    hybridCloud: 'Hybrid Cloud',
    hybridCloudDesc: 'Azure Arc Integration, On-Premises für Legacy-Systeme, Schrittweise Migration möglich'
  },

  contact: {
    email: 'public-sector@a1.at',
    phone: '+43 50 664 0',
    bookWorkshop: 'Workshop buchen',
    contactUs: 'Kontakt aufnehmen'
  }
}

export type Translations = typeof de

export default de
