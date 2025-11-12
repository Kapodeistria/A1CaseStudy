import { Slide, Heading } from 'spectacle'

const uspCardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  borderTop: '4px solid #E60000',
  height: '100%'
}

export default function ValueA1Slide() {
  return (
    <Slide backgroundColor="#fafafa">
      <Heading fontSize="2.5rem" margin="0 0 2rem 0" style={{ fontWeight: 300, color: '#000' }}>
        What I Bring to A1
      </Heading>

      <div style={{
        background: 'linear-gradient(135deg, #E60000 0%, #FF4444 100%)',
        borderRadius: '16px',
        padding: '2rem',
        color: '#fff',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0', fontWeight: 600 }}>
          My Unique Selling Proposition
        </h3>
        <p style={{ fontSize: '1.2rem', margin: 0, lineHeight: 1.7, fontWeight: 300 }}>
          <strong>Bridge Builder:</strong> I connect technical excellence with business impact,<br/>
          translating complex AI/cloud architectures into tangible value for C-level stakeholders
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={uspCardStyle}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
          <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.75rem 0', fontWeight: 600, color: '#E60000' }}>
            Enterprise AI Expertise
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: 1.6, margin: 0 }}>
            Hands-on experience with Azure AI Foundry, OpenAI integration, and ML pipelines in production environments
          </p>
        </div>

        <div style={uspCardStyle}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
          <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.75rem 0', fontWeight: 600, color: '#E60000' }}>
            Global Perspective
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: 1.6, margin: 0 }}>
            Worked across 6 jurisdictions (EU, CH, UAE, SG, US, UK) with deep understanding of compliance & data sovereignty
          </p>
        </div>

        <div style={uspCardStyle}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
          <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.75rem 0', fontWeight: 600, color: '#E60000' }}>
            Startup to Scale
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: 1.6, margin: 0 }}>
            Experienced full company lifecycles - from 0→1 startup launches to enterprise transformations
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{
          background: '#f0f9ff',
          borderRadius: '12px',
          padding: '1.5rem',
          border: '2px solid #00AEEF'
        }}>
          <h4 style={{ fontSize: '1rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#00AEEF' }}>
            Added Value for A1
          </h4>
          <ul style={{ fontSize: '0.9rem', color: '#333', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.7 }}>
            <li><strong>Customer Success:</strong> Proven track record of $40M+ value creation</li>
            <li><strong>Azure Gold Partnership leverage:</strong> Deep Azure ecosystem knowledge</li>
            <li><strong>Public Sector ready:</strong> GDPR, NIS2, AI Act compliance experience</li>
            <li><strong>Team builder:</strong> Remote-first leadership across cultures</li>
          </ul>
        </div>

        <div style={{
          background: '#dcfce7',
          borderRadius: '12px',
          padding: '1.5rem',
          border: '2px solid #00CC66'
        }}>
          <h4 style={{ fontSize: '1rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#00CC66' }}>
            Perfect Fit for A1
          </h4>
          <ul style={{ fontSize: '0.9rem', color: '#333', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.7 }}>
            <li><strong>Austria connection:</strong> Vienna-based experience (Investment Punk Academy)</li>
            <li><strong>Telco DNA:</strong> Infrastructure background (Infinigate MSP, Colt)</li>
            <li><strong>Innovation mindset:</strong> AI, edge computing, next-gen tech</li>
            <li><strong>Bilingual:</strong> Native German & English</li>
          </ul>
        </div>
      </div>
    </Slide>
  )
}
