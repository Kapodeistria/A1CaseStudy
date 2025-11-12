import { Slide, Heading, Text, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

export default function BoardTitleSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell style={{ textAlign: 'center' }}>
          <Heading
            fontSize="clamp(2.8rem, 4vw, 3.6rem)"
            margin="0 0 1rem 0"
            style={{ fontWeight: 500, letterSpacing: '-0.02em', color: '#0F172A' }}
          >
            Sitzweich AG · Wrinkle Detection Lighthouse
          </Heading>
          <Text fontSize="1.2rem" style={{ color: '#5F6368', lineHeight: 1.7 }}>
            Azure AI Vision + A1 Sovereign Cloud liefern 99% Genauigkeit, 27× schnellere Inspektionen und Payback in
            unter 6 Monaten – als skalierbarer Blueprint für weitere Smart-Factory Use Cases.
          </Text>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <span style={{ fontWeight: 600, color: '#E60000' }}>Board Version</span>
            <span style={{ color: '#4B5563' }}>Zielgruppe: C-Level & Transformation Office</span>
            <span style={{ color: '#4B5563' }}>Datum: Q4 2025</span>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
