import { Slide, Heading, Text, FlexBox } from 'spectacle'

const cardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
  border: '1px solid rgba(0,0,0,0.05)',
  flex: 1,
  minWidth: '300px'
}

const badgeStyle = {
  display: 'inline-block',
  padding: '0.35rem 0.9rem',
  borderRadius: '999px',
  background: 'rgba(230, 0, 0, 0.12)',
  color: '#E60000',
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
  fontSize: '0.8rem'
}

export default function ContextSlide() {
  return (
    <Slide backgroundColor="#f9fafb">
      <Heading fontSize="h2" color="#E60000" margin="0 0 3rem 0">
        Kontext & Herausforderungen
      </Heading>

      <FlexBox
        flexDirection="row"
        style={{
          gap: '1.5rem',
          flexWrap: 'wrap' as const,
          justifyContent: 'center'
        }}
      >
        {/* Card 1: Probleme */}
        <div style={cardStyle}>
          <span style={badgeStyle}>⚠️ Probleme</span>
          <Text margin="1rem 0 0.75rem 0" fontSize="text" style={{ color: '#3c4043', lineHeight: 1.6 }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• Legacy-Systeme mit Datensilos</li>
              <li style={{ marginBottom: '0.5rem' }}>• Manuelle, papierbasierte Prozesse</li>
              <li style={{ marginBottom: '0.5rem' }}>• Langsame Bearbeitungszeiten</li>
              <li style={{ marginBottom: '0.5rem' }}>• Inkonsistente Bürger-Erfahrung</li>
              <li>• Fachkräftemangel IT/Verwaltung</li>
            </ul>
          </Text>
        </div>

        {/* Card 2: Anforderungen */}
        <div style={cardStyle}>
          <span style={{ ...badgeStyle, background: 'rgba(0, 174, 239, 0.12)', color: '#00AEEF' }}>🎯 Anforderungen</span>
          <Text margin="1rem 0 0.75rem 0" fontSize="text" style={{ color: '#3c4043', lineHeight: 1.6 }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• GDPR & AI Act Compliance</li>
              <li style={{ marginBottom: '0.5rem' }}>• Datensouveränität (EU/AT)</li>
              <li style={{ marginBottom: '0.5rem' }}>• Barrierefreiheit (WCAG 2.1 AA)</li>
              <li style={{ marginBottom: '0.5rem' }}>• 24/7 Verfügbarkeit</li>
              <li>• Transparenz & Nachvollziehbarkeit</li>
            </ul>
          </Text>
        </div>
      </FlexBox>
    </Slide>
  )
}
