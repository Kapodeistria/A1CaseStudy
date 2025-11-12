import { Slide, Heading, Text, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const locationCardStyle = {
  background: '#FFFFFF',
  borderRadius: '14px',
  padding: '1rem',
  border: '1px solid rgba(15,23,42,0.08)',
  textAlign: 'center' as const
}

const featureBadgeStyle = {
  display: 'inline-block',
  padding: '0.45rem 0.9rem',
  borderRadius: '999px',
  background: 'rgba(0, 174, 239, 0.12)',
  color: '#00AEEF',
  fontWeight: 600,
  fontSize: '0.8rem',
  marginRight: '0.5rem',
  marginTop: '0.5rem'
}

export default function NetworkSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1rem 0"
            style={{ fontWeight: 400, color: '#0F0F0F' }}
          >
            Netzwerk- & Standortmodell (vereinfachte Ansicht)
          </Heading>
          <Text fontSize="1rem" style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            SD-WAN Hub in Wien (A1 Austria East) bindet 7 Werke + neues IoT-Werk an. A1/Exoscale Sovereign Layer stellt Datenhoheit sicher,
            Azure ExpressRoute verbindet Hybrid Cloud.
          </Text>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ ...locationCardStyle, minWidth: '240px', background: '#0F172A', color: '#fff' }}>
              <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>Wien HQ</p>
              <p style={{ margin: '0.3rem 0 0 0', opacity: 0.9 }}>SD-WAN Hub · Azure Stack HCI · Sovereign Storage</p>
            </div>
            <div style={{ ...locationCardStyle, minWidth: '240px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>A1 / Exoscale</p>
              <p style={{ margin: '0.3rem 0 0 0', color: '#4B5563' }}>GPU-Inferenz · EU-Rechenzentren · Arc-managed</p>
            </div>
            <div style={{ ...locationCardStyle, minWidth: '240px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#00AEEF' }}>Azure Cloud</p>
              <p style={{ margin: '0.3rem 0 0 0', color: '#4B5563' }}>ML Training · Data Lakehouse · Copilot Apps</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {['AT HQ', 'AT Plant', 'CZ IoT Plant', 'HU Plant', 'SK Plant', 'RO Plant', 'DE Plant', 'US Plant'].map((site, idx) => (
              <div key={site} style={locationCardStyle}>
                <p style={{ margin: 0, fontWeight: 600, color: idx < 2 ? '#E60000' : '#00AEEF' }}>{site}</p>
                <p style={{ margin: '0.2rem 0 0 0', color: '#6B7280', fontSize: '0.85rem' }}>
                  {idx === 2 ? 'Neues IoT/AI Werk' : 'SD-WAN + Edge Node'}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={featureBadgeStyle}>ExpressRoute ↔ Private Connect</span>
            <span style={featureBadgeStyle}>Zero Trust + Private DNS</span>
            <span style={featureBadgeStyle}>OPC UA / MQTT / ONVIF</span>
            <span style={featureBadgeStyle}>Defender for IoT & Sentinel</span>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
