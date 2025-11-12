import { Slide, Heading, Text, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function TitleSlideCaseStudy() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <FlexBox
            height="100%"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            style={{ gap: '2rem' }}
          >
        <div
          style={{
            width: '100%',
            maxWidth: '960px',
            background: 'linear-gradient(180deg, rgba(230, 0, 0, 0.12), rgba(255, 255, 255, 0.95))',
            borderRadius: '28px',
            padding: '3rem 4rem',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)'
          }}
        >
          <Heading
            fontSize="4rem"
            margin="0"
            style={{
              textAlign: 'left',
              fontWeight: 500,
              color: '#0F0F0F',
              lineHeight: 1.15,
              letterSpacing: '-0.02em'
            }}
          >
            KI-gestützte Qualitätskontrolle
          </Heading>

          <div
            style={{
              width: '140px',
              height: '4px',
              background: '#E60000',
              margin: '1.25rem 0 1.5rem'
            }}
          />

          <Text
            fontSize="1.65rem"
            margin="0"
            style={{
              textAlign: 'left',
              fontWeight: 400,
              color: '#1F1F1F'
            }}
          >
            Case Study · Sitzweich AG · 99% Genauigkeit & 30x Cost-Out
          </Text>

          <Text
            fontSize="1.1rem"
            margin="0.5rem 0 2rem"
            style={{
              textAlign: 'left',
              color: '#4B4B4B',
              lineHeight: 1.7,
              maxWidth: '760px'
            }}
          >
            Smart Factory Lösung für Automotive Seating Systems, die Qualitätskontrollen automatisiert, KI-gestützte Entscheidungen liefert
            und A1 Telekom Austria als Plattformpartner mit souveräner Datenarchitektur vernetzt.
          </Text>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
              gap: '1rem'
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(230, 0, 0, 0.2)',
                background: '#fff'
              }}
            >
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#6A6A6A' }}>Werke & Varianten</p>
              <p style={{ marginTop: '0.35rem', fontSize: '1.45rem', fontWeight: 600, color: '#E60000' }}>7 Werke · 40+ Seats</p>
            </div>
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '16px',
                background: '#111827',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8 }}>Produktionsleistung</p>
              <p style={{ marginTop: '0.35rem', fontSize: '1.45rem', fontWeight: 600 }}>99% Accuracy</p>
            </div>
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                background: '#fff'
              }}
            >
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#6A6A6A' }}>ROI</p>
              <p style={{ marginTop: '0.35rem', fontSize: '1.45rem', fontWeight: 600, color: '#00AEEF' }}>≤ 24 Monate</p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: '960px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ flex: '1 1 320px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#4B4B4B' }}>A1 Telekom Austria · AI & Cloud Solutions</p>
            <p style={{ marginTop: '0.4rem', fontSize: '0.95rem', color: '#4B4B4B' }}>Azure Gold Partner · Souveräne Datenplattform</p>
          </div>
          <div
            style={{
              flex: '0 0 auto',
              borderRadius: '999px',
              background: '#00AEEF',
              padding: '0.5rem 1.25rem',
              fontWeight: 600,
              color: '#fff',
              fontSize: '0.95rem'
            }}
          >
            Q4 2025 · 12.11.2025
          </div>
        </div>
          </FlexBox>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
