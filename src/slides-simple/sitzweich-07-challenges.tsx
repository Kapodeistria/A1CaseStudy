import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const challengeCardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '1.75rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  border: '2px solid rgba(230, 0, 0, 0.15)',
  flex: 1,
  minWidth: '280px'
}

const solutionBadgeStyle = {
  display: 'inline-block',
  padding: '0.3rem 0.8rem',
  borderRadius: '999px',
  background: 'rgba(0, 204, 102, 0.15)',
  color: '#00CC66',
  fontWeight: 600,
  fontSize: '0.75rem',
  marginRight: '0.5rem',
  marginTop: '0.5rem'
}

export default function ChallengesSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading fontSize="2.5rem" margin="0 0 2rem 0" style={{ fontWeight: 300, color: '#000' }}>
            Herausforderungen & Lösungsansätze
          </Heading>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div style={challengeCardStyle}>
          <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#E60000' }}>
            🔐 Security & Datenschutz
          </h3>
          <p style={{ fontSize: '0.9rem', margin: '0 0 1rem 0', color: '#666', lineHeight: 1.6 }}>
            <strong>Problem:</strong> Kamera-System erfasst Mitarbeiter → GDPR Art. 35 (DPIA) + Betriebsrat-Zustimmung erforderlich
          </p>
          <div>
            <span style={solutionBadgeStyle}>Zero Trust Architecture</span>
            <span style={solutionBadgeStyle}>Edge Anonymization</span>
            <span style={solutionBadgeStyle}>Austria East Region</span>
            <span style={solutionBadgeStyle}>Purview Governance</span>
          </div>
        </div>

        <div style={challengeCardStyle}>
          <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#E60000' }}>
            ⚖️ AI Act Compliance
          </h3>
          <p style={{ fontSize: '0.9rem', margin: '0 0 1rem 0', color: '#666', lineHeight: 1.6 }}>
            <strong>Problem:</strong> High-Risk AI System (Workplace Monitoring) → Dokumentation, Transparenz, Human Oversight
          </p>
          <div>
            <span style={solutionBadgeStyle}>Model Cards</span>
            <span style={solutionBadgeStyle}>Explainable AI</span>
            <span style={solutionBadgeStyle}>Audit Logging</span>
            <span style={solutionBadgeStyle}>Risk Assessment</span>
          </div>
        </div>

        <div style={challengeCardStyle}>
          <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#E60000' }}>
            🔌 Legacy Integration
          </h3>
          <p style={{ fontSize: '0.9rem', margin: '0 0 1rem 0', color: '#666', lineHeight: 1.6 }}>
            <strong>Problem:</strong> SAP-, SPS- und Produktionssysteme → sichere Anbindung ohne Cloud-Exposition
          </p>
          <div>
            <span style={solutionBadgeStyle}>OPC UA Gateway</span>
            <span style={solutionBadgeStyle}>Azure IoT Hub</span>
            <span style={solutionBadgeStyle}>Logic Apps</span>
            <span style={solutionBadgeStyle}>Private Link</span>
          </div>
        </div>

        <div style={challengeCardStyle}>
          <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#E60000' }}>
            👥 Change Management
          </h3>
          <p style={{ fontSize: '0.9rem', margin: '0 0 1rem 0', color: '#666', lineHeight: 1.6 }}>
            <strong>Problem:</strong> Mitarbeiter-Akzeptanz für KI-Überwachung → Transparenz & Partizipation essentiell
          </p>
          <div>
            <span style={solutionBadgeStyle}>Pilot-Phase (3 Monate)</span>
            <span style={solutionBadgeStyle}>Training & Workshops</span>
            <span style={solutionBadgeStyle}>Transparenz-Dashboard</span>
            <span style={solutionBadgeStyle}>Betriebsrat Early Involvement</span>
          </div>
        </div>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#f0f9ff',
          borderRadius: '8px',
          border: '2px solid #00AEEF',
          textAlign: 'center' as const
        }}>
          <p style={{ fontSize: '1rem', color: '#0369a1', margin: 0, fontWeight: 500 }}>
            <strong>A1 Begleitung:</strong> Transformation Office (10/20/70-Regel), 24/7 SOC, DPIA-Support, NIS2-konforme Infrastruktur & Upskilling Pfade
          </p>
        </div>
      </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
