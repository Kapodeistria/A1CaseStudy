import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const cardStyle = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
  backdropFilter: 'blur(12px)',
  borderRadius: '20px',
  padding: '2.25rem',
  boxShadow: '0 20px 60px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(148, 163, 184, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  flex: 1,
  minWidth: '300px',
  minHeight: '280px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative' as const,
  overflow: 'hidden' as const
}

const cardHoverEffect = `
  @keyframes cardHover {
    from { transform: translateY(0); box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12); }
    to { transform: translateY(-4px); box-shadow: 0 28px 80px rgba(15, 23, 42, 0.18); }
  }
`

const badgeStyle = {
  display: 'inline-block',
  padding: '0.5rem 1.1rem',
  borderRadius: '999px',
  background: 'linear-gradient(135deg, rgba(230, 0, 0, 0.15) 0%, rgba(230, 0, 0, 0.08) 100%)',
  color: '#E60000',
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
  fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
  boxShadow: '0 2px 8px rgba(230, 0, 0, 0.12)',
  border: '1px solid rgba(230, 0, 0, 0.2)'
}

const listItemStyle = {
  fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
  color: '#1F2937',
  lineHeight: 1.9,
  fontWeight: 400,
  letterSpacing: '-0.01em'
}

export default function IntroSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <style>{cardHoverEffect}</style>

      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.8rem)"
            margin="0 0 2.5rem 0"
            style={{
              fontWeight: 300,
              color: '#0D0D0D',
              letterSpacing: '-0.03em',
              lineHeight: 1.2
            }}
          >
            Sitzweich AG heute
          </Heading>

          <FlexBox
            flexDirection="row"
            style={{ gap: '1.75rem', flexWrap: 'wrap' as const, justifyContent: 'center' }}
          >
        <div style={{...cardStyle, borderTop: '3px solid #E60000'}}>
          <span style={badgeStyle}>Unternehmen</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 0 0' }}>
            <li style={listItemStyle}>• Tier-1 Automotive Lieferant</li>
            <li style={listItemStyle}>• 7 Werke · 400 Mitarbeitende</li>
            <li style={listItemStyle}>• 60 Sek. manuelle Prüfung pro Sitz</li>
            <li style={listItemStyle}>• Ziel: Produktionsleitwerk für Smart Factory</li>
          </ul>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(230, 0, 0, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}/>
        </div>

        <div style={{...cardStyle, borderTop: '3px solid #00AEEF'}}>
          <span style={{ ...badgeStyle, background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.15) 0%, rgba(0, 174, 239, 0.08) 100%)', color: '#00AEEF', borderColor: 'rgba(0, 174, 239, 0.2)', boxShadow: '0 2px 8px rgba(0, 174, 239, 0.12)' }}>
            Herausforderungen
          </span>
          <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 0 0' }}>
            <li style={listItemStyle}>• Heterogene Security (M&A-Historie)</li>
            <li style={listItemStyle}>• SD-WAN über 7 Standorte, hybride Clouds</li>
            <li style={listItemStyle}>• OT/IT Interoperabilität + Datenhoheit</li>
            <li style={listItemStyle}>• 60s Prüfung zu langsam · 15-20% Fehlerquote</li>
          </ul>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(0, 174, 239, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}/>
        </div>

        <div style={{...cardStyle, borderTop: '3px solid #00CC66'}}>
          <span style={{ ...badgeStyle, background: 'linear-gradient(135deg, rgba(0, 204, 102, 0.15) 0%, rgba(0, 204, 102, 0.08) 100%)', color: '#00CC66', borderColor: 'rgba(0, 204, 102, 0.2)', boxShadow: '0 2px 8px rgba(0, 204, 102, 0.12)' }}>
            Ziel
          </span>
          <p style={{
            margin: '1.5rem 0 0 0',
            color: '#1F2937',
            lineHeight: 1.8,
            fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}>
            <strong style={{ color: '#E60000', fontWeight: 600 }}>KI-gestützte Qualitätskontrolle</strong> als Lighthouse-Programm mit
            Azure AI Vision, AutoML & Edge Inferenz – skalierbar auf weitere Produktionsprozesse.
          </p>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(0, 204, 102, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}/>
        </div>
          </FlexBox>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
