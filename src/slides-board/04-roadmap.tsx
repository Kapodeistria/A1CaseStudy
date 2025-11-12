import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const phases = [
  { title: 'PoV', time: 'Q1 2026', result: 'AI Vision Pilot · Business Case Validierung' },
  { title: 'Rollout', time: 'Q2-Q3 2026', result: '7 Werke · Production Deployment' },
  { title: 'Scale', time: '2027', result: 'Predictive Quality + weitere Use Cases' }
]

export default function BoardRoadmapSlide() {
  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.6rem)"
            margin="0 0 1.2rem 0"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', color: '#0F0F0F' }}
          >
            Transformationspfad 2025–2027
          </Heading>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'space-between' }}>
            {phases.map((phase) => (
              <div
                key={phase.title}
                style={{
                  flex: '1 1 180px',
                  border: '1px solid rgba(15,23,42,0.08)',
                  borderRadius: '16px',
                  padding: '1rem',
                  background: '#F9FAFB'
                }}
              >
                <p style={{ margin: 0, fontWeight: 600, color: '#E60000' }}>{phase.title}</p>
                <p style={{ margin: '0.3rem 0 0 0', color: '#111', fontWeight: 500 }}>{phase.time}</p>
                <p style={{ margin: '0.4rem 0 0 0', color: '#4B5563', lineHeight: 1.5 }}>{phase.result}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.75rem', padding: '1rem', borderRadius: '12px', background: '#FFF4E5', color: '#92400E' }}>
            Erfolgsfaktoren: Transformation Office + Skill-Programm (10/20/70-Regel) – 70% People & Change, 20% Tech Backbone, 10% Algorithmen.
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
