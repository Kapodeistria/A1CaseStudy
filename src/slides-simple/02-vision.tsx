import { Slide, Heading, Text, FlexBox } from 'spectacle'

const kpiCardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
  border: '3px solid #E60000',
  flex: 1,
  minWidth: '250px',
  textAlign: 'center' as const
}

export default function VisionSlide() {
  return (
    <Slide backgroundColor="#f9fafb">
      <Heading fontSize="h2" color="#E60000" margin="0 0 2rem 0">
        Vision & Value Proposition
      </Heading>

      <Text
        fontSize="text"
        margin="0 auto 3rem auto"
        style={{
          textAlign: 'center',
          color: '#3c4043',
          maxWidth: '80%',
          lineHeight: 1.7
        }}
      >
        Eine <strong style={{ color: '#E60000' }}>souveräne Cloud-Plattform</strong> für KI-gestützte Verwaltungsservices
        – gebaut auf Azure, gehostet in Österreich/Deutschland, konform mit GDPR & AI Act.
      </Text>

      {/* KPI Cards */}
      <FlexBox
        flexDirection="row"
        style={{
          gap: '1.5rem',
          flexWrap: 'wrap' as const,
          justifyContent: 'center'
        }}
      >
        <div style={kpiCardStyle}>
          <Text fontSize="h1" margin="0 0 0.5rem 0" style={{ color: '#E60000', fontWeight: 900 }}>
            70%
          </Text>
          <Text fontSize="text" style={{ color: '#3c4043', fontWeight: 600 }}>
            Prozesszeit-Reduktion
          </Text>
          <Text fontSize="1rem" margin="0.5rem 0 0 0" style={{ color: '#5f6368' }}>
            bei Antragsbearbeitung
          </Text>
        </div>

        <div style={{ ...kpiCardStyle, borderColor: '#00AEEF' }}>
          <Text fontSize="h1" margin="0 0 0.5rem 0" style={{ color: '#00AEEF', fontWeight: 900 }}>
            24/7
          </Text>
          <Text fontSize="text" style={{ color: '#3c4043', fontWeight: 600 }}>
            Verfügbarkeit
          </Text>
          <Text fontSize="1rem" margin="0.5rem 0 0 0" style={{ color: '#5f6368' }}>
            Bürgerservices
          </Text>
        </div>

        <div style={{ ...kpiCardStyle, borderColor: '#00CC66' }}>
          <Text fontSize="h1" margin="0 0 0.5rem 0" style={{ color: '#00CC66', fontWeight: 900 }}>
            100%
          </Text>
          <Text fontSize="text" style={{ color: '#3c4043', fontWeight: 600 }}>
            GDPR & AI Act
          </Text>
          <Text fontSize="1rem" margin="0.5rem 0 0 0" style={{ color: '#5f6368' }}>
            Compliance ab Tag 1
          </Text>
        </div>
      </FlexBox>
    </Slide>
  )
}
