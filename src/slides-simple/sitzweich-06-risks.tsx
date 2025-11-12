import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const riskCardStyle = {
  background: '#FFFFFF',
  borderRadius: '16px',
  padding: '1.5rem',
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.75rem'
}

export default function RiskMitigationSlide() {
  const risks = [
    {
      category: 'Technical Risks',
      color: '#E60000',
      items: [
        {
          risk: 'Insufficient data quality',
          mitigation: 'Data readiness assessment + active learning (10-20 expert-labeled examples vs. thousands)'
        },
        {
          risk: 'Integration complexity',
          mitigation: 'Early requirements mapping, API-based modular architecture, edge computing, prototype before full deployment'
        },
        {
          risk: 'Decision gate',
          mitigation: 'If integration costs exceed 50% of budget → reconsider architecture'
        }
      ]
    },
    {
      category: 'Organizational Risks',
      color: '#00AEEF',
      items: [
        {
          risk: 'User resistance',
          mitigation: 'Involve end users from day one, AI as augmentation not replacement, comprehensive training, feedback mechanisms'
        },
        {
          risk: 'Target',
          mitigation: 'Secure pre-deployment user acceptance exceeding 80% positive'
        },
        {
          risk: 'Executive support erosion',
          mitigation: 'Steering committee with monthly reviews, realistic timelines with buffer, communicate wins early, link to strategic priorities'
        },
        {
          risk: 'Commitment',
          mitigation: 'Secure 12-18 month commitment upfront protecting against enthusiasm waning'
        }
      ]
    },
    {
      category: 'Financial Risks',
      color: '#00CC66',
      items: [
        {
          risk: 'Unclear ROI',
          mitigation: 'Define measurable KPIs before starting, choose use cases with clear financial impact, track baseline rigorously, quarterly governance reviews'
        },
        {
          risk: 'Target',
          mitigation: 'Break-even within 6-12 months'
        },
        {
          risk: 'Scope creep',
          mitigation: '"Start small, think big" – dedicated product owner, phased approach with decision gates, resist pressure to solve all problems'
        },
        {
          risk: 'Focus',
          mitigation: 'One specific use case on one production line initially'
        }
      ]
    }
  ]

  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" alignItems="center" justifyContent="center">
        <CaseStudyShell>
          <Heading
            fontSize="clamp(2rem, 3vw, 2.8rem)"
            margin="0 0 1.5rem 0"
            style={{
              fontWeight: 300,
              color: '#0D0D0D',
              letterSpacing: '-0.03em',
              lineHeight: 1.2
            }}
          >
            Risk Mitigation & Success Factors
          </Heading>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {risks.map((riskGroup, idx) => (
              <div
                key={idx}
                style={{
                  ...riskCardStyle,
                  borderTop: `3px solid ${riskGroup.color}`
                }}
              >
                <h3 style={{
                  margin: 0,
                  fontSize: 'clamp(1.15rem, 1.35vw, 1.25rem)',
                  color: riskGroup.color,
                  fontWeight: 600,
                  letterSpacing: '-0.02em'
                }}>
                  {riskGroup.category}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {riskGroup.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <p style={{
                        margin: 0,
                        fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                        fontWeight: 600,
                        color: '#1F2937'
                      }}>
                        {item.risk}
                      </p>
                      <p style={{
                        margin: 0,
                        fontSize: 'clamp(0.8rem, 0.95vw, 0.9rem)',
                        color: '#6B7280',
                        lineHeight: 1.6
                      }}>
                        → {item.mitigation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(255, 184, 28, 0.12) 0%, rgba(255, 184, 28, 0.06) 100%)',
            border: '1px solid rgba(255, 184, 28, 0.3)'
          }}>
            <p style={{
              margin: 0,
              fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
              color: '#92400E',
              fontWeight: 500,
              lineHeight: 1.7
            }}>
              <strong style={{ fontWeight: 700 }}>Critical Success Factor:</strong> 70% depends on people and process transformation, not algorithms. Establish transformation office from day one, invest in change management, start with achievable accuracy targets (85-90%), and celebrate wins early.
            </p>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
