import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'
import InfoCard from '../components/InfoCard'

export default function BoardROISlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1.2rem 0"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Business Impact auf einen Blick
          </Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <InfoCard title="30×" subtitle="Kostensenkung vs. Handprüfung" tone="green" align="center" />
            <InfoCard title="27×" subtitle="schnellere Prüfzeit (60s → 2,2s)" tone="green" align="center" />
            <InfoCard title="99 %" subtitle="Produktionsgenauigkeit" tone="green" align="center" />
            <InfoCard title="1,6–3,0 Monate" subtitle="Amortisation · ROI 291–639 % im 1. Jahr" tone="green" align="center" />
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '12px', background: '#F1F5F9', color: '#0F172A' }}>
            Basisannahmen: 5 Produktionslinien, 5 Mio. Prüfungen/Jahr, Labor- & Personalkosten &gt; €2,8 Mio., Hybrid-Betrieb Azure + Exoscale senkt OPEX zusätzlich um 17–32 %.
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
