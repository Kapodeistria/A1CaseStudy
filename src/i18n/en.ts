/**
 * English Translations
 * Public Sector AI Service Hub
 */

import type { Translations } from './de'

export const en: Translations = {
  common: {
    org: 'A1 Telekom Austria',
    brandPrimary: '#E60000',
    accentBlue: '#00AEEF',
    close: 'Close',
    next: 'Next',
    previous: 'Previous',
    loading: 'Loading...'
  },

  presentation: {
    title: 'AI-Enabled Service Hub',
    subtitle: 'Digital transformation in the public sector with sovereign data infrastructure'
  },

  sections: {
    context: 'Context & Challenges',
    vision: 'Vision & Value Proposition',
    architecture: 'Architecture',
    dataML: 'AI & Machine Learning',
    security: 'Security & Compliance',
    deployment: 'Deployment & Operations',
    tco: 'TCO & ROI',
    risks: 'Risks & Mitigations',
    cta: 'Call to Action'
  },

  kpis: {
    processReduction: '70% Process Time Reduction',
    availability: '24/7 Availability',
    compliance: '100% GDPR & AI Act Compliance',
    roi: '312% ROI after 3 years',
    breakEven: '18 Months Break-Even'
  },

  features: {
    aiAssistants: 'AI Assistants',
    aiAssistantsDesc: 'GPT-4 based chatbots for citizen inquiries, document analysis with Form Recognizer, automated application review',
    dataSovereignty: 'Data Sovereignty',
    dataSovereigntyDesc: 'Azure Germany/Austria Regions, end-to-end encryption, Confidential Computing for AI workloads',
    analytics: 'Analytics & Insights',
    analyticsDesc: 'Real-time dashboards, predictive analytics for resource planning, transparency reports for citizens'
  },

  deployment: {
    fullSovereign: 'Full Sovereign',
    fullSovereignDesc: 'Azure Germany North (Frankfurt), 100% of data in EU, highest compliance',
    hybridCloud: 'Hybrid Cloud',
    hybridCloudDesc: 'Azure Arc integration, on-premises for legacy systems, gradual migration possible'
  },

  contact: {
    email: 'public-sector@a1.at',
    phone: '+43 50 664 0',
    bookWorkshop: 'Book Workshop',
    contactUs: 'Contact Us'
  }
}

export default en
