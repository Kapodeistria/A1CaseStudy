import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const pyramidLevelStyle = (bgColor: string, borderColor: string) => ({
  background: bgColor,
  border: `3px solid ${borderColor}`,
  borderRadius: '12px',
  padding: '1.5rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  marginBottom: '1rem'
})

export default function PrivacyPyramidSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading fontSize="2.5rem" margin="0 0 2rem 0" style={{ fontWeight: 300, color: '#000' }}>
            Data Privacy Pyramid
          </Heading>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Level 1: HIGH - Red */}
        <div style={pyramidLevelStyle('#fff5f5', '#E60000')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '2rem' }}>🔴</span>
            <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 600, color: '#E60000' }}>
              HIGH SENSITIVITY
            </h3>
            <span style={{ 
              marginLeft: 'auto',
              background: '#E60000',
              color: '#fff',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}>GDPR + AI Act</span>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#333', fontSize: '0.95rem', lineHeight: 1.8 }}>
            <li>• <strong>Mitarbeiter-Bilder:</strong> Werkstatt-Kameras erfassen Personen → Anonymisierung via Edge</li>
            <li>• <strong>Betriebsgeheimnisse:</strong> Produktionsdaten, CAD-Files → On-Prem verschlüsselt</li>
            <li>• <strong>Compliance:</strong> Datenschutz-Folgenabschätzung (DPIA), Betriebsrat-Vereinbarung</li>
          </ul>
        </div>

        {/* Level 2: MEDIUM - Orange */}
        <div style={pyramidLevelStyle('#fff8f0', '#FF8C00')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '2rem' }}>🟠</span>
            <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 600, color: '#FF8C00' }}>
              MEDIUM SENSITIVITY
            </h3>
            <span style={{ 
              marginLeft: 'auto',
              background: '#FF8C00',
              color: '#fff',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}>UWG + NIS2</span>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#333', fontSize: '0.95rem', lineHeight: 1.8 }}>
            <li>• <strong>Prozessdaten:</strong> Maschinenparameter, Fehlerraten → Pseudonymisiert in Austria East</li>
            <li>• <strong>Geschützte Informationen:</strong> Produktionszeiten, Lieferantendaten → Zugriffskontrolle</li>
            <li>• <strong>Compliance:</strong> Trade Secret Protection (UWG), NIS2-konforme Infrastruktur</li>
          </ul>
        </div>

        {/* Level 3: LOW - Green */}
        <div style={pyramidLevelStyle('#f0fff4', '#00CC66')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '2rem' }}>🟢</span>
            <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 600, color: '#00CC66' }}>
              LOW SENSITIVITY
            </h3>
            <span style={{ 
              marginLeft: 'auto',
              background: '#00CC66',
              color: '#fff',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}>AGGREGATED</span>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#333', fontSize: '0.95rem', lineHeight: 1.8 }}>
            <li>• <strong>Aggregierte KPIs:</strong> Fehlerquoten, Durchsatzzeiten → Analytics & BI</li>
            <li>• <strong>Telemetrie-Daten:</strong> Anonymisierte Metriken → AI Model Training (Azure ML)</li>
            <li>• <strong>Nutzung:</strong> Power BI Dashboards, Copilot-Insights, externe Benchmarks</li>
          </ul>
        </div>
          </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: '#fafafa',
            borderRadius: '8px',
            textAlign: 'center' as const
          }}>
            <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>
              <strong>Privacy by Design:</strong> Sensitivitäts-Level bestimmen Speicherort, Verschlüsselung & Zugriffskontrolle
            </p>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
