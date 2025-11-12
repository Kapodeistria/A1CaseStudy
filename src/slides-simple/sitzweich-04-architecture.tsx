import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

interface Layer {
  id: string
  icon: string
  title: string
  description: string
  highlights: string[]
  badge: string
  badgeColor: string
  accent: string
}

const layers: Layer[] = [
  {
    id: 'edge',
    icon: '🏭',
    title: 'Layer 1 · Edge & Data',
    description: 'Azure IoT Operations · OPC UA / ONVIF Gateways · 4K Vision mit LED Lighting',
    highlights: ['<50 ms Latenz über IoT Edge', 'Telemetrie → Fabric/Delta Lake'],
    badge: '🔴 RESTRICTED',
    badgeColor: '#E60000',
    accent: '#00AEEF'
  },
  {
    id: 'ml',
    icon: '🤖',
    title: 'Layer 2 · AI & ML',
    description: 'Azure AI Foundry, Azure ML AutoML, Model Registry & Prompt Flows',
    highlights: ['Vision Transformers, YOLOv5/v8, Mask/Faster R-CNN', 'MLOps GitOps via Azure DevOps'],
    badge: '🟠 ANONYMIZED',
    badgeColor: '#FF8C00',
    accent: '#E60000'
  },
  {
    id: 'app',
    icon: '📊',
    title: 'Layer 3 · Application',
    description: 'Power BI / Fabric, Copilot Studio, Web Portal + SAP Events',
    highlights: ['Role-based Insights + KPI Heatmaps', 'SAP/S4 + MES Rückschreiben via Logic Apps'],
    badge: '🟢 AGGREGATED',
    badgeColor: '#00A878',
    accent: '#00CC66'
  },
  {
    id: 'sec',
    icon: '🔐',
    title: 'Layer 4 · Security & Governance',
    description: 'Zero Trust · Microsoft Purview · Entra ID · Azure Arc · Defender for Cloud',
    highlights: ['Sovereign A1 Layer / Exoscale angebunden', 'E2E Audit, DPIA & AI Act Controls'],
    badge: '🟡 CONTROLLED',
    badgeColor: '#D97706',
    accent: '#FFB81C'
  }
]

export default function ArchitectureSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Heading
            fontSize="clamp(2.2rem, 3vw, 3rem)"
            margin="0"
            style={{
              fontWeight: 400,
              color: '#0F0F0F',
              letterSpacing: '-0.03em'
            }}
          >
            4-Layer Smart Factory Architektur
          </Heading>

          <p style={{ color: '#5F6368', fontSize: '1rem', margin: 0 }}>
            Von Sensor bis Vorstandsetage · Azure-basierte Referenzarchitektur für Sitzweich AG
          </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {layers.map((layer) => (
            <div
              key={layer.id}
              style={{
                border: `1px solid rgba(15, 23, 42, 0.08)`,
                borderRadius: '18px',
                padding: '1.5rem',
                boxShadow: '0 18px 35px rgba(15, 23, 42, 0.08)',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontWeight: 600,
                    color: layer.accent,
                    fontSize: '0.95rem'
                  }}
                >
                  {layer.icon} {layer.title}
                </span>
                <span
                  style={{
                    padding: '0.2rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: `1px solid ${layer.badgeColor}33`,
                    color: layer.badgeColor,
                    background: `${layer.badgeColor}10`
                  }}
                >
                  {layer.badge}
                </span>
              </div>

              <p style={{ color: '#4B5563', fontSize: '0.95rem', margin: 0 }}>{layer.description}</p>

              <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.06)', paddingTop: '0.75rem' }}>
                {layer.highlights.map((item) => (
                  <p
                    key={item}
                    style={{
                      margin: '0.15rem 0',
                      fontSize: '0.9rem',
                      color: '#1F2937',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        background: layer.accent,
                        borderRadius: '999px'
                      }}
                    />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

          <div
            style={{
              marginTop: '1rem',
              padding: '1.5rem',
              borderRadius: '18px',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              background: '#F9FAFB',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <p style={{ margin: 0, color: '#0F172A', fontWeight: 600 }}>
              🇦🇹 Datenhoheit & Compliance
            </p>
            <p style={{ margin: 0, color: '#4B5563', fontSize: '0.95rem' }}>
              Alle sensiblen Daten bleiben in Austria East (Wien) · A1 Sovereign Cloud Layer · AI Act ready
            </p>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
