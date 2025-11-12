import { Slide, Heading } from 'spectacle'

const experienceCardStyle = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: '1.75rem',
  boxShadow: '0 12px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(148, 163, 184, 0.15)',
  marginBottom: '1.25rem',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
}

const projectCardStyle = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
  backdropFilter: 'blur(8px)',
  borderRadius: '14px',
  padding: '1.5rem',
  boxShadow: '0 8px 28px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(148, 163, 184, 0.12)',
  flex: '1 1 280px',
  minWidth: '280px',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
}

const iconStyle = {
  display: 'inline-block',
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  marginRight: '0.75rem'
}

export default function JourneySlide() {
  return (
    <Slide backgroundColor="#F7F8FA">
      <Heading
        fontSize="clamp(2rem, 3vw, 2.8rem)"
        margin="0 0 1rem 0"
        style={{
          fontWeight: 300,
          color: '#0D0D0D',
          letterSpacing: '-0.03em',
          lineHeight: 1.2
        }}
      >
        Professional Experience & Project Impact
      </Heading>
      <p style={{
        fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
        color: '#6B7280',
        margin: '0 0 2.5rem 0',
        fontWeight: 400,
        letterSpacing: '-0.01em'
      }}>
        2017–2025 · What I Built, Led, and Delivered
      </p>

      {/* Timeline Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ ...experienceCardStyle, borderLeft: '4px solid #E60000' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ ...iconStyle, background: 'linear-gradient(135deg, rgba(230, 0, 0, 0.15), rgba(230, 0, 0, 0.08))' }}>
                🧠
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                  margin: '0 0 0.3rem 0',
                  fontWeight: 600,
                  color: '#E60000',
                  letterSpacing: '-0.01em'
                }}>
                  2017–2024 · KAPSYS (Zug)
                </h4>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                  color: '#6B7280',
                  margin: 0,
                  fontWeight: 500
                }}>
                  Principal Cloud & AI Solution Architect
                </p>
              </div>
            </div>
            <ul style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: '#1F2937',
              margin: 0,
              paddingLeft: '1.5rem',
              lineHeight: 1.8,
              listStyle: 'none'
            }}>
              <li>• Built global AI & SaaS platforms</li>
              <li>• <strong>60+ team leadership</strong></li>
              <li>• <strong>$40M+ digital transformation revenue</strong></li>
            </ul>
            <div style={{
              position: 'absolute',
              top: -15,
              right: -15,
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(230, 0, 0, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
          </div>

          <div style={{ ...experienceCardStyle, borderLeft: '4px solid #00CC66' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ ...iconStyle, background: 'linear-gradient(135deg, rgba(0, 204, 102, 0.15), rgba(0, 204, 102, 0.08))' }}>
                🌐
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                  margin: '0 0 0.3rem 0',
                  fontWeight: 600,
                  color: '#00CC66',
                  letterSpacing: '-0.01em'
                }}>
                  2019–2024 · Seobase.com
                </h4>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                  color: '#6B7280',
                  margin: 0,
                  fontWeight: 500
                }}>
                  Co-Founder & Technical Product Lead
                </p>
              </div>
            </div>
            <ul style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: '#1F2937',
              margin: 0,
              paddingLeft: '1.5rem',
              lineHeight: 1.8,
              listStyle: 'none'
            }}>
              <li>• Built SEO SaaS platform (<strong>91 countries</strong>)</li>
              <li>• AI-driven analytics engine</li>
            </ul>
            <div style={{
              position: 'absolute',
              top: -15,
              right: -15,
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(0, 204, 102, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>

        <div>
          <div style={{ ...experienceCardStyle, borderLeft: '4px solid #00AEEF' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ ...iconStyle, background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.15), rgba(0, 174, 239, 0.08))' }}>
                💼
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                  margin: '0 0 0.3rem 0',
                  fontWeight: 600,
                  color: '#00AEEF',
                  letterSpacing: '-0.01em'
                }}>
                  2019–2024 · Combinvest.ch
                </h4>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                  color: '#6B7280',
                  margin: 0,
                  fontWeight: 500
                }}>
                  IT Strategy Consultant
                </p>
              </div>
            </div>
            <ul style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: '#1F2937',
              margin: 0,
              paddingLeft: '1.5rem',
              lineHeight: 1.8,
              listStyle: 'none'
            }}>
              <li>• Led <strong>€16M restructuring</strong></li>
              <li>• Architected Catalyst CRM (regulated finance)</li>
            </ul>
            <div style={{
              position: 'absolute',
              top: -15,
              right: -15,
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(0, 174, 239, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
          </div>

          <div style={{ ...experienceCardStyle, borderLeft: '4px solid #FFB81C' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ ...iconStyle, background: 'linear-gradient(135deg, rgba(255, 184, 28, 0.15), rgba(255, 184, 28, 0.08))' }}>
                🔒
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                  margin: '0 0 0.3rem 0',
                  fontWeight: 600,
                  color: '#D97706',
                  letterSpacing: '-0.01em'
                }}>
                  2018–2021 · Teamstack.com
                </h4>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                  color: '#6B7280',
                  margin: 0,
                  fontWeight: 500
                }}>
                  Co-Founder & Implementation Lead
                </p>
              </div>
            </div>
            <ul style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: '#1F2937',
              margin: 0,
              paddingLeft: '1.5rem',
              lineHeight: 1.8,
              listStyle: 'none'
            }}>
              <li>• Developed MFA / IAM platform</li>
              <li>• <strong>500+ enterprise integrations</strong></li>
            </ul>
            <div style={{
              position: 'absolute',
              top: -15,
              right: -15,
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(255, 184, 28, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </div>

      {/* Signature Projects Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
        backdropFilter: 'blur(12px)',
        borderRadius: '18px',
        padding: '2rem',
        boxShadow: '0 12px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(148, 163, 184, 0.15)',
        borderTop: '3px solid #E60000'
      }}>
        <h3 style={{
          fontSize: 'clamp(1.15rem, 1.4vw, 1.3rem)',
          margin: '0 0 1.5rem 0',
          fontWeight: 600,
          color: '#0D0D0D',
          letterSpacing: '-0.02em'
        }}>
          Signature Projects
        </h3>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' as const }}>
          <div style={projectCardStyle}>
            <h4 style={{
              fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
              margin: '0 0 0.5rem 0',
              fontWeight: 600,
              color: '#E60000'
            }}>
              Limewire.com
            </h4>
            <p style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: '#4B5563',
              margin: 0,
              lineHeight: 1.6
            }}>
              NFT marketplace relaunch with AI-driven content automation (Dubai 2023)
            </p>
          </div>

          <div style={projectCardStyle}>
            <h4 style={{
              fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
              margin: '0 0 0.5rem 0',
              fontWeight: 600,
              color: '#00AEEF'
            }}>
              Metro AG (Hospitality Digital)
            </h4>
            <p style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: '#4B5563',
              margin: 0,
              lineHeight: 1.6
            }}>
              Led CRM/ERP backend consolidation – reduced tech debt 40%, improved cost efficiency
            </p>
          </div>

          <div style={projectCardStyle}>
            <h4 style={{
              fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
              margin: '0 0 0.5rem 0',
              fontWeight: 600,
              color: '#00CC66'
            }}>
              Interwetten.com
            </h4>
            <p style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: '#4B5563',
              margin: 0,
              lineHeight: 1.6
            }}>
              Introduced SSR Headless CMS architecture, improved site performance +50%
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
