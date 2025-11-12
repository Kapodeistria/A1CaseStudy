import { Slide, Heading } from 'spectacle'

const achievementCardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  border: '2px solid rgba(230, 0, 0, 0.15)',
  flex: 1,
  minWidth: '280px'
}

export default function AchievementsSlide() {
  return (
    <Slide backgroundColor="#fafafa">
      <Heading fontSize="2.5rem" margin="0 0 2rem 0" style={{ fontWeight: 300, color: '#000' }}>
        Key Achievements & Impact
      </Heading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={achievementCardStyle}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
          <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.75rem 0', fontWeight: 600, color: '#E60000' }}>
            Revenue Generation
          </h3>
          <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.7, margin: 0 }}>
            Led digital transformation initiatives generating <strong>$40M+ revenue</strong> across multiple ventures
          </p>
        </div>

        <div style={achievementCardStyle}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
          <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.75rem 0', fontWeight: 600, color: '#E60000' }}>
            Team Leadership
          </h3>
          <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.7, margin: 0 }}>
            Managed cross-functional teams of <strong>60+ developers</strong> in remote-first environments
          </p>
        </div>

        <div style={achievementCardStyle}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏗️</div>
          <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.75rem 0', fontWeight: 600, color: '#E60000' }}>
            Enterprise Architecture
          </h3>
          <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.7, margin: 0 }}>
            Designed scalable <strong>Azure & AWS architectures</strong> for regulated industries
          </p>
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
        borderRadius: '16px',
        padding: '2rem',
        border: '2px solid #00AEEF'
      }}>
        <h4 style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#00AEEF', textAlign: 'center' }}>
          Technical Expertise Highlights
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 0.5rem 0', fontWeight: 600 }}>AI & Cloud</p>
            <ul style={{ fontSize: '0.85rem', color: '#333', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>Azure AI Foundry</li>
              <li>OpenAI & LLM Integration</li>
              <li>Machine Learning pipelines</li>
              <li>Edge computing</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 0.5rem 0', fontWeight: 600 }}>Architecture</p>
            <ul style={{ fontSize: '0.85rem', color: '#333', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>Microservices & Event-driven</li>
              <li>Kubernetes & Docker</li>
              <li>Serverless (Lambda, Workers)</li>
              <li>Well-Architected Frameworks</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 0.5rem 0', fontWeight: 600 }}>Enterprise</p>
            <ul style={{ fontSize: '0.85rem', color: '#333', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>CRM Development</li>
              <li>Security Compliance</li>
              <li>Microsoft Purview</li>
              <li>Scaled Agile (SAFe)</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  )
}
