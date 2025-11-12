import { Slide, Heading } from 'spectacle'

export default function ChallengesSlide() {
  return (
    <Slide backgroundColor="#fafafa">
      <Heading fontSize="2.5rem" margin="0 0 2rem 0" style={{ fontWeight: 300, color: '#000' }}>
        Biggest Challenge: Leading Through Crisis
      </Heading>

      <div style={{
        background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)',
        borderRadius: '16px',
        padding: '2.5rem',
        border: '3px solid #E60000',
        marginBottom: '2rem'
      }}>
        <h3 style={{ fontSize: '1.8rem', margin: '0 0 1.5rem 0', fontWeight: 600, color: '#E60000' }}>
          Board Restructuring at €16M SME
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#333' }}>
              The Challenge
            </h4>
            <ul style={{ fontSize: '1rem', color: '#333', lineHeight: 1.8, margin: 0, paddingLeft: '1.2rem' }}>
              <li>Managing <strong>60+ developers</strong> during company restructuring</li>
              <li>Leading architecture decisions in board-level crisis</li>
              <li>Maintaining product delivery under uncertainty</li>
              <li>Keeping team morale & productivity high</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', fontWeight: 600, color: '#00CC66' }}>
              How I Managed It
            </h4>
            <ul style={{ fontSize: '1rem', color: '#333', lineHeight: 1.8, margin: 0, paddingLeft: '1.2rem' }}>
              <li><strong>Transparent communication:</strong> Weekly all-hands updates</li>
              <li><strong>Technical focus:</strong> Maintained delivery roadmap</li>
              <li><strong>People first:</strong> 1-on-1s with key team members</li>
              <li><strong>Strategic alignment:</strong> Bridged technical & business needs</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{
          background: '#dcfce7',
          borderRadius: '12px',
          padding: '1.5rem',
          borderLeft: '4px solid #00CC66'
        }}>
          <h4 style={{ fontSize: '1rem', margin: '0 0 0.75rem 0', fontWeight: 600, color: '#166534' }}>
            Most Rewarding
          </h4>
          <p style={{ fontSize: '0.95rem', color: '#333', margin: 0, lineHeight: 1.7 }}>
            Seeing companies <strong>rise and shine</strong> - witnessing successful launches, scaling teams, and celebrating milestones together
          </p>
        </div>

        <div style={{
          background: '#fff5f5',
          borderRadius: '12px',
          padding: '1.5rem',
          borderLeft: '4px solid #E60000'
        }}>
          <h4 style={{ fontSize: '1rem', margin: '0 0 0.75rem 0', fontWeight: 600, color: '#991b1b' }}>
            Most Challenging
          </h4>
          <p style={{ fontSize: '0.95rem', color: '#333', margin: 0, lineHeight: 1.7 }}>
            Watching companies <strong>struggle and people suffer</strong> - navigating layoffs, bankruptcies, and supporting teams through uncertainty
          </p>
        </div>
      </div>

      <div style={{
        marginTop: '1.5rem',
        padding: '1.25rem',
        background: '#f0f9ff',
        borderRadius: '8px',
        border: '2px solid #00AEEF',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1rem', color: '#0369a1', margin: 0, fontWeight: 500 }}>
          💡 <strong>Key Learning:</strong> Resilience, adaptability, and human-centered leadership are as important as technical excellence
        </p>
      </div>
    </Slide>
  )
}
