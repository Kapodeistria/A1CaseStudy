import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'
import InfoCard from '../components/InfoCard'

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
            <InfoCard title="1 · PoV (1–2 Wochen)" tone="blue">
              AI Vision validiert Wrinkle Detection ohne Trainingsdaten, liefert erklärbare Ergebnisse und KPI-Basis.
            </InfoCard>
            <InfoCard title="2 · Production Build (4–8 Wochen)" tone="red">
              AutoML-Training erreicht 97–99 % Genauigkeit; Daten bleiben in Österreich, MLOps & Model Registry integriert.
            </InfoCard>
            <InfoCard title="3 · Edge Scale (laufend)" tone="green">
              Echtzeit-Inferenz direkt im Werk, Azure Arc orchestriert Container, Governance & Datensouveränität garantiert.
            </InfoCard>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '12px', background: '#E6FFFA' }}>
            Ergebnis: 99 % Genauigkeit, 27× schnellere Prüfungen (60s → 2,2s), Datenhoheit gewahrt, plattformfähig für weitere Anwendungsfälle.
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
