import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const stepStyle = {
  border: '1px solid rgba(15,23,42,0.08)',
  borderRadius: '16px',
  padding: '1.2rem',
  background: '#F9FAFB'
}

export default function BoardSolutionSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1.2rem 0"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Lösung in drei Stufen – von PoV zu Serie
          </Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={stepStyle}>
              <p style={{ margin: 0, fontWeight: 600, color: '#00AEEF' }}>1 · PoV (1-2 Wochen)</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563', lineHeight: 1.6 }}>
                AI Vision validiert Wrinkle Detection ohne Trainingsdaten, liefert erklärbare Ergebnisse.
              </p>
            </div>
            <div style={stepStyle}>
              <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>2 · Production Build (4-8 Wochen)</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563', lineHeight: 1.6 }}>
                AI-Training erreicht 97-99% Genauigkeit. Trainingsdaten bleiben in Österreich.
              </p>
            </div>
            <div style={stepStyle}>
              <p style={{ margin: 0, fontWeight: 600, color: '#00CC66' }}>3 · Edge Scale (laufend)</p>
              <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563', lineHeight: 1.6 }}>
                Echtzeit-Inferenz direkt in den Werken, zentrale Orchestrierung & Datensouveränität gewahrt.
              </p>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '12px', background: '#E6FFFA' }}>
            Ergebnis: 99% Genauigkeit, 27× schnellere Prüfungen (60s → 2.2s), Datenhoheit gewahrt, plattformfähig für weitere Use Cases.
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
