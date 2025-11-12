import { Slide, Heading, FlexBox } from 'spectacle'
import CaseStudyShell from '../components/CaseStudyShell'

const decisionCardStyle = {
  background: '#FFFFFF',
  borderRadius: '18px',
  padding: '1.75rem',
  boxShadow: '0 16px 40px rgba(15, 23, 42, 0.1)',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1rem',
  flex: 1,
  minWidth: '280px'
}

export default function ArchitectureDecisionSlide() {
  const architectures = [
    {
      title: '<1 Mio. Prüfungen / Monat',
      subtitle: 'Azure Cognitive Services API',
      color: '#00AEEF',
      benefits: [
        'Geringste Einstiegskosten',
        'Schnellste Bereitstellung',
        'Pay-as-you-grow-Modell'
      ],
      phases: [
        { phase: 'Phase 1 (Monat 1-2)', desc: 'Genauigkeit mit 10K Bildern validieren', cost: '€5–10K' },
        { phase: 'Phase 2 (Monat 3-4)', desc: 'Pilot auf einer Linie (Standard-Tier)', cost: '€100–500/Monat' },
        { phase: 'Phase 3 (Monat 5-12)', desc: 'Skalierung, Wechsel zu Custom ab 500K+', cost: 'Variabel' }
      ]
    },
    {
      title: '500K–5 Mio. / Monat',
      subtitle: 'Azure ML Custom Model',
      color: '#00CC66',
      benefits: [
        'Bestes Kosten/Nutzen-Verhältnis',
        'Volle Modellhoheit',
        'Moderate Einstiegskosten'
      ],
      phases: [
        { phase: 'Direkter Einstieg', desc: 'Für Teams mit ML-Kompetenz', cost: 'Empfohlen' },
        { phase: 'Migrationspfad', desc: 'Start mit API, Wechsel zu Custom', cost: 'Fähigkeiten aufbauen' },
        { phase: 'Sweet Spot', desc: 'Deutlich günstiger als API-Pricing', cost: 'Optimale Option' }
      ]
    },
    {
      title: '>5 Mio. / Monat · 5+ Jahre',
      subtitle: 'On-Premises + Cloud Hybrid',
      color: '#FFB81C',
      benefits: [
        'Niedrigster TCO langfristig',
        'Volle Kontrolle & Datensouveränität',
        'Enterprise-Skalierung'
      ],
      phases: [
        { phase: 'Phase 1 (Monat 1-3)', desc: 'Anforderungen & Hardware (L4) definieren', cost: '€30–60K' },
        { phase: 'Phase 2 (Monat 4-9)', desc: 'On-Prem Rollout + Azure Backup', cost: '€50–150K + €1–3K/Monat' },
        { phase: 'Phase 3 (ab Monat 10)', desc: 'Rollout über alle Werke', cost: 'Skaleneffekte' }
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
            Architektur-Entscheidungsrahmen
          </Heading>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
            color: '#6B7280',
            margin: '0 0 2rem 0',
            fontWeight: 400
          }}>
            Passendes Deployment je nach Volumen & Planungshorizont
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {architectures.map((arch, idx) => (
              <div
                key={idx}
                style={{
                  ...decisionCardStyle,
                  borderTop: `4px solid ${arch.color}`
                }}
              >
                <div>
                  <h3 style={{
                    margin: '0 0 0.25rem 0',
                    fontSize: 'clamp(1.15rem, 1.35vw, 1.25rem)',
                    color: arch.color,
                    fontWeight: 600,
                    letterSpacing: '-0.02em'
                  }}>
                    {arch.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
                    color: '#1F2937',
                    fontWeight: 600
                  }}>
                    {arch.subtitle}
                  </p>
                </div>

                {/* Benefits */}
                <div style={{
                  background: `${arch.color}08`,
                  borderRadius: '10px',
                  padding: '0.85rem',
                  border: `1px solid ${arch.color}20`
                }}>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}>
                    {arch.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: 'clamp(0.8rem, 0.9vw, 0.85rem)',
                          color: '#1F2937',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: arch.color,
                          flexShrink: 0
                        }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phases */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {arch.phases.map((phaseInfo, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.75rem',
                        background: '#F9FAFB',
                        borderRadius: '8px',
                        border: '1px solid rgba(15, 23, 42, 0.06)'
                      }}
                    >
                      <p style={{
                        margin: '0 0 0.25rem 0',
                        fontSize: 'clamp(0.8rem, 0.9vw, 0.85rem)',
                        color: arch.color,
                        fontWeight: 600
                      }}>
                        {phaseInfo.phase}
                      </p>
                      <p style={{
                        margin: 0,
                        fontSize: 'clamp(0.75rem, 0.85vw, 0.8rem)',
                        color: '#4B5563',
                        lineHeight: 1.5
                      }}>
                        {phaseInfo.desc}
                      </p>
                      <p style={{
                        margin: '0.25rem 0 0 0',
                        fontSize: 'clamp(0.75rem, 0.85vw, 0.8rem)',
                        color: '#6B7280',
                        fontWeight: 600
                      }}>
                        {phaseInfo.cost}
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
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 174, 239, 0.03) 100%)',
            border: '1px solid rgba(0, 174, 239, 0.2)'
          }}>
            <p style={{
              margin: 0,
              fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
              color: '#075985',
              fontWeight: 500,
              lineHeight: 1.7
            }}>
              <strong style={{ fontWeight: 700 }}>Decision Criteria:</strong> Volume thresholds are guidelines. Consider data sovereignty requirements, internal ML capabilities, capital availability, and strategic AI roadmap when selecting architecture.
            </p>
          </div>
        </CaseStudyShell>
      </FlexBox>
    </Slide>
  )
}
