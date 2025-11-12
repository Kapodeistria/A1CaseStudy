import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const stackLayerStyle = {
  background: '#fff',
  padding: '1rem 1.5rem',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
  border: '1px solid #e0e0e0',
  marginBottom: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

export default function ComplianceSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading fontSize="2.5rem" margin="0 0 2rem 0" style={{ fontWeight: 300, color: '#000' }}>
            Compliance & Governance Stack
          </Heading>

          <div style={{ maxWidth: '900px', margin: '0 auto 2rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #E60000 0%, #D32F2F 100%)',
          color: '#fff',
          padding: '1.5rem',
          borderRadius: '12px 12px 0 0',
          textAlign: 'center' as const,
          boxShadow: '0 4px 12px rgba(230, 0, 0, 0.2)'
        }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 600 }}>
            🇦🇹 A1 Sovereign Cloud Layer
          </h3>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.95 }}>
            Austria East (Wien) + Exoscale · 100% EU Datensouveränität
          </p>
        </div>

        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '0 0 12px 12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={stackLayerStyle}>
            <div>
              <strong style={{ color: '#E60000', fontSize: '1rem' }}>Zero Trust Architecture</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                Continuous Verification · Least Privilege · Micro-Segmentation
              </p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>🔐</span>
          </div>

          <div style={stackLayerStyle}>
            <div>
              <strong style={{ color: '#00AEEF', fontSize: '1rem' }}>Microsoft Purview</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                Data Governance · Classification · DLP Policies · Audit Trails
              </p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>📋</span>
          </div>

          <div style={stackLayerStyle}>
            <div>
              <strong style={{ color: '#00CC66', fontSize: '1rem' }}>Entra ID (Azure AD)</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                Identity Management · MFA · Conditional Access · Role-Based Access
              </p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>👤</span>
          </div>

          <div style={stackLayerStyle}>
            <div>
              <strong style={{ color: '#FFB81C', fontSize: '1rem' }}>Azure Arc & Key Vault</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                Hybrid Governance · Secrets Management · HSM-backed Encryption
              </p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>🔑</span>
          </div>

          <div style={stackLayerStyle}>
            <div>
              <strong style={{ color: '#9333ea', fontSize: '1rem' }}>Explainable AI & Model Cards</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                AI Act Compliance · Transparency · Risk Assessment · Human Oversight
              </p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>🤖</span>
          </div>

          <div style={stackLayerStyle}>
            <div>
              <strong style={{ color: '#059669', fontSize: '1rem' }}>24/7 Audit Logging</strong>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                Azure Monitor · Sentinel SIEM · Compliance Reporting · Incident Response
              </p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
          </div>
        </div>
        </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
        <div style={{
          background: '#dcfce7',
          padding: '1rem',
          borderRadius: '8px',
          borderLeft: '4px solid #00CC66'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#166534' }}>
            ✅ <strong>GDPR-konform:</strong> Recht auf Vergessenwerden, Datenportabilität, Privacy by Design
          </p>
        </div>
        <div style={{
          background: '#fef3c7',
          padding: '1rem',
          borderRadius: '8px',
          borderLeft: '4px solid #FFB81C'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400e' }}>
            ✅ <strong>AI Act Ready:</strong> High-Risk AI System (Workplace Monitoring) dokumentiert & auditierbar
          </p>
        </div>
        </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'linear-gradient(90deg, #f0f9ff, #fef3c7)',
            borderRadius: '8px',
            textAlign: 'center' as const,
            border: '2px solid #00AEEF'
          }}>
            <p style={{ margin: 0, fontSize: '1rem', color: '#000', fontWeight: 600 }}>
              🛡️ <strong>A1 Managed Service:</strong> Alle AI Workloads in Austria East Region mit 24/7 SOC & Compliance Monitoring
            </p>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
