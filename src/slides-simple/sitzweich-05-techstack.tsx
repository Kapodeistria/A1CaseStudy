import { Slide, Heading, Text, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const cardStyle = {
  background: '#FFFFFF',
  borderRadius: '18px',
  padding: '1.5rem',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
  border: '1px solid rgba(15, 23, 42, 0.06)',
  flex: 1,
  minWidth: '240px'
}

const badgeStyle = (color: string) => ({
  display: 'inline-block',
  padding: '0.35rem 0.9rem',
  borderRadius: '999px',
  background: `${color}22`,
  color,
  fontWeight: 600,
  fontSize: '0.75rem',
  marginRight: '0.4rem',
  marginBottom: '0.5rem'
})

export default function TechStackSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading fontSize="clamp(2rem, 3vw, 2.6rem)" margin="0 0 2rem 0" style={{ fontWeight: 400, letterSpacing: '-0.02em' }}>
            Technologie-Bausteine · Azure + A1 Sovereign Layer
          </Heading>

          <Text
            fontSize="1rem"
            margin="0 0 2rem 0"
            style={{ color: '#5F6368', lineHeight: 1.8 }}
          >
            Azure Adaptive Cloud verbindet Cloud, Edge und Sovereign Infrastructure: Azure Arc als Control Plane, IoT Operations für OT-Integration,
            Azure ML/AI Foundry für Computer Vision und A1/Exoscale für EU-Datensouveränität.
          </Text>

          <FlexBox flexDirection="row" style={{ gap: '1.25rem', flexWrap: 'wrap' as const, marginBottom: '1.25rem' }}>
            <div style={cardStyle}>
              <Text fontSize="1.2rem" style={{ fontWeight: 600, color: '#E60000', marginBottom: '0.5rem' }}>AI & MLOps</Text>
              <div>
                <span style={badgeStyle('#E60000')}>Azure AI Foundry</span>
                <span style={badgeStyle('#E60000')}>Azure ML AutoML</span>
                <span style={badgeStyle('#E60000')}>Azure Fabric</span>
              </div>
              <Text fontSize="0.9rem" style={{ color: '#4B5563', lineHeight: 1.6 }}>
                1.800+ Modelle (GPT-4o, Phi-3-vision), AutoML für YOLO/Mask R-CNN, Fabric Data Lakehouse & KPI-Dashboards.
              </Text>
            </div>

            <div style={cardStyle}>
              <Text fontSize="1.2rem" style={{ fontWeight: 600, color: '#00AEEF', marginBottom: '0.5rem' }}>Edge & Integration</Text>
              <div>
                <span style={badgeStyle('#00AEEF')}>Azure IoT Operations</span>
                <span style={badgeStyle('#00AEEF')}>Azure IoT Edge</span>
                <span style={badgeStyle('#00AEEF')}>Azure Stack Edge</span>
              </div>
              <Text fontSize="0.9rem" style={{ color: '#4B5563', lineHeight: 1.6 }}>
                OPC UA / MQTT / ONVIF Konnektivität, ONNX Runtime Container, sub-100ms Reaktionszeit direkt in der Fertigung.
              </Text>
            </div>

            <div style={cardStyle}>
              <Text fontSize="1.2rem" style={{ fontWeight: 600, color: '#00CC66', marginBottom: '0.5rem' }}>Security & Governance</Text>
              <div>
                <span style={badgeStyle('#00CC66')}>Zero Trust</span>
                <span style={badgeStyle('#00CC66')}>Microsoft Purview</span>
                <span style={badgeStyle('#00CC66')}>Entra ID</span>
                <span style={badgeStyle('#00CC66')}>Defender for Cloud</span>
              </div>
              <Text fontSize="0.9rem" style={{ color: '#4B5563', lineHeight: 1.6 }}>
                AI Act & GDPR Controls, Sensitivitäts-Policies, RBAC, 24/7 SOC Monitoring inkl. Transformation Office KPIs.
              </Text>
            </div>
          </FlexBox>

          <FlexBox flexDirection="row" style={{ gap: '1.25rem', flexWrap: 'wrap' as const }}>
            <div style={{ ...cardStyle, border: '1px solid rgba(230, 0, 0, 0.3)' }}>
              <Text fontSize="1.2rem" style={{ fontWeight: 600, color: '#E60000', marginBottom: '0.5rem' }}>Hybrid Infrastruktur</Text>
              <div>
                <span style={badgeStyle('#E60000')}>Azure Arc</span>
                <span style={badgeStyle('#E60000')}>A1 Cloud / Exoscale</span>
                <span style={badgeStyle('#E60000')}>ExpressRoute / Private Connect</span>
              </div>
              <Text fontSize="0.9rem" style={{ color: '#4B5563', lineHeight: 1.6 }}>
                Arc-managed GPU Nodes, GitOps Deployment, 17–32% Kostenreduktion durch Hybrid-Workload-Verteilung.
              </Text>
            </div>
            <div style={cardStyle}>
              <Text fontSize="1.2rem" style={{ fontWeight: 600, color: '#0F172A', marginBottom: '0.5rem' }}>Data & Apps</Text>
              <div>
                <span style={badgeStyle('#0F172A')}>Power BI</span>
                <span style={badgeStyle('#0F172A')}>Teams / Copilot</span>
                <span style={badgeStyle('#0F172A')}>SAP Integration</span>
              </div>
              <Text fontSize="0.9rem" style={{ color: '#4B5563', lineHeight: 1.6 }}>
                Role-based Dashboards, Copilot SOP Assistants, SAP/MES Rückmeldungen via Logic Apps & Event Grid.
              </Text>
            </div>
          </FlexBox>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
