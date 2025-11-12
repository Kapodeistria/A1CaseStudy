import { Slide, Heading, Text, FlexBox } from 'spectacle'

export default function IntroPersonalSlide() {
  return (
    <Slide backgroundColor="#F5F5F5">
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: '3rem', gap: '2rem' }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '960px',
            background: 'linear-gradient(180deg, rgba(230, 0, 0, 0.1), rgba(255, 255, 255, 0.9))',
            borderRadius: '28px',
            padding: '3rem 4rem',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2.5rem', marginBottom: '1.5rem' }}>
            <img
              src="/images/christos_kapodistrias.jpeg"
              alt="Christos Kapodistrias"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #E60000',
                boxShadow: '0 8px 24px rgba(230, 0, 0, 0.2)',
                flexShrink: 0
              }}
            />
            <div style={{ flex: 1 }}>
              <Heading
                fontSize="3.5rem"
                margin="0"
                style={{
                  textAlign: 'left',
                  fontWeight: 400,
                  color: '#0D0D0D',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em'
                }}
              >
                Christos Kapodistrias
              </Heading>
              <div
                style={{
                  width: '120px',
                  height: '3px',
                  background: '#E60000',
                  marginTop: '1rem'
                }}
              />
            </div>
          </div>

          <Text
            fontSize="1.65rem"
            margin="0 0 1rem 0"
            style={{
              textAlign: 'left',
              fontWeight: 400,
              color: '#1F1F1F'
            }}
          >
            Principal AI Cloud Solution Architect
          </Text>

          <Text
            fontSize="1.1rem"
            margin="0 0 2rem 0"
            style={{
              textAlign: 'left',
              fontWeight: 300,
              color: '#4B4B4B',
              lineHeight: 1.7,
              maxWidth: '720px'
            }}
          >
            Visionärer Technology Leader mit 10+ Jahren Erfahrung in der Entwicklung cloud-nativer Lösungen
            und AI-gestützter Innovation für Enterprise-Kunden. Nachgewiesene Expertise in Azure Cloud-Infrastruktur,
            AI/ML-Implementierungen und Stakeholder-Management auf C-Level. Führte digitale Transformationsinitiativen
            mit $40M+ Umsatzgenerierung und leitete cross-funktionale Teams von 60+ Entwicklern.
          </Text>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
              gap: '1rem',
              alignItems: 'stretch'
            }}
          >
            <div
              style={{
                padding: '1.4rem',
                borderRadius: '18px',
                background: '#FFFFFF',
                border: '1px solid rgba(230, 0, 0, 0.2)'
              }}
            >
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#6A6A6A' }}>Erzielter Mehrwert</p>
              <p style={{ marginTop: '0.4rem', fontSize: '1.5rem', fontWeight: 600, color: '#E60000' }}>
                $40M+
              </p>
              <p style={{ marginTop: '0.25rem', fontSize: '0.95rem', color: '#4B4B4B' }}>digitale Umsatzträume</p>
            </div>
            <div
              style={{
                padding: '1.4rem',
                borderRadius: '18px',
                background: '#111827',
                color: '#fff'
              }}
            >
              <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.7 }}>Teams geführt</p>
              <p style={{ marginTop: '0.4rem', fontSize: '1.5rem', fontWeight: 600 }}>60+</p>
              <p style={{ marginTop: '0.25rem', fontSize: '0.95rem', opacity: 0.8 }}>Produkt-, DevOps-, AI-Teams</p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: '960px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1rem'
          }}
        >
          <div
            style={{
              borderRadius: '999px',
              background: '#00AEEF',
              padding: '0.5rem 1.25rem',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}
          >
            Assessment Presentation · 12 Nov 2025
          </div>
        </div>
      </FlexBox>
    </Slide>
  )
}
