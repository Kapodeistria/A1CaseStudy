import { Slide, Heading, FlexBox } from 'spectacle'

export default function JourneySlide() {
  const experiences = [
    {
      year: '2017–2024',
      icon: '🧠',
      company: 'KAPSYS',
      role: 'Principal Cloud & AI Architect',
      location: 'Zug, Switzerland',
      color: '#E60000',
      highlights: ['$40M+ transformation revenue', '60+ team leadership', 'Global AI & SaaS platforms']
    },
    {
      year: '2019–2024',
      icon: '💼',
      company: 'Combinvest',
      role: 'IT Strategy Consultant',
      location: 'Rothenburg, Switzerland',
      color: '#00AEEF',
      highlights: ['€16M restructuring', 'Catalyst CRM architecture', 'Regulated finance sector']
    },
    {
      year: '2019–2024',
      icon: '🌐',
      company: 'Seobase',
      role: 'Co-Founder & Technical Lead',
      location: 'Singapore & Remote',
      color: '#00CC66',
      highlights: ['91 countries reach', 'AI-driven analytics', 'SEO SaaS platform']
    },
    {
      year: '2018–2021',
      icon: '🔒',
      company: 'Teamstack',
      role: 'Co-Founder & Implementation',
      location: 'Singapore',
      color: '#FFB81C',
      highlights: ['500+ integrations', 'MFA / IAM platform', 'Cloud identity management']
    }
  ]

  const projects = [
    {
      name: 'Limewire.com',
      desc: 'NFT marketplace · AI content automation',
      year: '2023-2025',
      location: 'Dubai',
      color: '#E60000'
    },
    {
      name: 'Metro AG',
      desc: 'CRM/ERP consolidation · 40% tech debt reduction',
      year: '2017-2019',
      location: 'Vienna',
      color: '#00AEEF'
    },
    {
      name: 'Interwetten.com',
      desc: 'SSR Headless CMS · +50% performance',
      year: '2023-2024',
      location: 'Dubai',
      color: '#00CC66'
    }
  ]

  return (
    <Slide backgroundColor="#FFFFFF">
      <FlexBox height="100%" flexDirection="column" justifyContent="center" padding="3rem 4rem">
        <Heading
          fontSize="clamp(2.2rem, 3vw, 3rem)"
          margin="0 0 0.5rem 0"
          style={{
            fontWeight: 300,
            color: '#0D0D0D',
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}
        >
          Professional Journey
        </Heading>
        <p style={{
          fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
          color: '#6B7280',
          margin: '0 0 3rem 0',
          fontWeight: 400
        }}>
          What I Built, Led, and Delivered · 2017–2025
        </p>

        {/* Timeline with vertical line */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: '40px',
            top: '20px',
            bottom: '20px',
            width: '3px',
            background: 'linear-gradient(180deg, #E60000 0%, #00AEEF 35%, #00CC66 65%, #FFB81C 100%)',
            borderRadius: '999px'
          }} />

          {/* Experience cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  paddingLeft: '100px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {/* Icon circle */}
                <div style={{
                  position: 'absolute',
                  left: '18px',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: `3px solid ${exp.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  boxShadow: `0 4px 12px ${exp.color}40`,
                  zIndex: 2
                }}>
                  {exp.icon}
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: `linear-gradient(135deg, ${exp.color}08 0%, ${exp.color}03 100%)`,
                  borderRadius: '16px',
                  padding: '1.25rem 1.75rem',
                  border: `1px solid ${exp.color}25`,
                  borderLeft: `4px solid ${exp.color}`,
                  boxShadow: `0 4px 20px ${exp.color}12`,
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{
                        fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
                        margin: '0 0 0.25rem 0',
                        fontWeight: 600,
                        color: exp.color
                      }}>
                        {exp.company}
                      </h3>
                      <p style={{
                        fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
                        color: '#4B5563',
                        margin: '0 0 0.25rem 0',
                        fontWeight: 500
                      }}>
                        {exp.role}
                      </p>
                      <p style={{
                        fontSize: 'clamp(0.8rem, 0.95vw, 0.9rem)',
                        color: '#9CA3AF',
                        margin: 0
                      }}>
                        📍 {exp.location}
                      </p>
                    </div>
                    <span style={{
                      fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                      fontWeight: 600,
                      color: exp.color,
                      padding: '0.4rem 0.9rem',
                      background: `${exp.color}15`,
                      borderRadius: '999px',
                      whiteSpace: 'nowrap'
                    }}>
                      {exp.year}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {exp.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 'clamp(0.8rem, 0.95vw, 0.9rem)',
                          color: '#1F2937',
                          padding: '0.35rem 0.85rem',
                          background: '#FFFFFF',
                          borderRadius: '8px',
                          border: '1px solid #E5E7EB',
                          fontWeight: 500
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Projects */}
        <div style={{
          background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
          borderRadius: '20px',
          padding: '2rem 2.25rem',
          border: '1px solid #E5E7EB',
          boxShadow: '0 8px 32px rgba(15, 23, 42, 0.06)'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.15rem, 1.4vw, 1.3rem)',
            margin: '0 0 1.5rem 0',
            fontWeight: 600,
            color: '#0D0D0D',
            letterSpacing: '-0.02em'
          }}>
            🎯 Signature Projects
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  border: `1px solid ${project.color}30`,
                  borderTop: `3px solid ${project.color}`,
                  boxShadow: `0 4px 16px ${project.color}10`,
                  transition: 'all 0.3s ease'
                }}
              >
                <h4 style={{
                  fontSize: 'clamp(1rem, 1.15vw, 1.1rem)',
                  margin: '0 0 0.5rem 0',
                  fontWeight: 600,
                  color: project.color
                }}>
                  {project.name}
                </h4>
                <p style={{
                  fontSize: 'clamp(0.85rem, 0.95vw, 0.9rem)',
                  color: '#4B5563',
                  margin: '0 0 0.75rem 0',
                  lineHeight: 1.5
                }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: 'clamp(0.75rem, 0.85vw, 0.8rem)',
                    color: '#9CA3AF',
                    fontWeight: 500
                  }}>
                    {project.year}
                  </span>
                  <span style={{
                    fontSize: 'clamp(0.75rem, 0.85vw, 0.8rem)',
                    color: project.color,
                    fontWeight: 500
                  }}>
                    📍 {project.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FlexBox>
    </Slide>
  )
}
