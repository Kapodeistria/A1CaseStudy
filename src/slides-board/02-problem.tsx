import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'
import InfoCard from '../components/InfoCard'

export default function BoardProblemSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1.2rem 0"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Ausgangslage bei Sitzweich AG
          </Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <InfoCard title="Fertigung" tone="neutral">
              7 Werke, 40+ Sitzvarianten, 5 Mio. Checks/Monat – heute 60 Sek./Prüfung, subjektiv & fehleranfällig.
            </InfoCard>
            <InfoCard title="Kosten & Risiko" tone="red">
              €2,8 Mio. Nacharbeit/Jahr · 12 % Ausschuss · 25 FTE Prüfer – Experten schwer zu skalieren, hohe Stillstandskosten.
            </InfoCard>
            <InfoCard title="Transformation" tone="blue">
              Hybride IT/OT-Landschaft, Datensouveränität & NIS2 – ideales Feld für ein AI-Leuchtturmprojekt.
            </InfoCard>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
