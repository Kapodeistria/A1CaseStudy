import { useNavigate } from 'react-router-dom'
import './VersionSelector.css'

export default function VersionSelector() {
  const navigate = useNavigate()

  return (
    <div className="version-selector">
      <div className="selector-container">
        <div className="selector-header">
          <h1>KI-gestützte Qualitätskontrolle</h1>
          <p className="selector-subtitle">Hybrid AI Architecture auf Azure</p>
          <p className="selector-tagline">Souveräne Smart Factory Lösung mit Data Governance</p>
          <div className="selector-divider"></div>
        </div>

        <div className="versions-grid">
          <div className="version-card" onClick={() => navigate('/personal')}>
            <span className="version-badge">Persönlich</span>
            <h2>Persönliche Präsentation</h2>
            <p>Vorstellung der AI Solution Architecture durch Christos Kapodistrias</p>
            <ul>
              <li>6 Slides</li>
              <li>~5 Minuten</li>
              <li>Solution Architecture Fokus</li>
              <li>Azure AI Foundry & Governance</li>
            </ul>
            <button className="version-button">Präsentation starten →</button>
          </div>

          <div className="version-card" onClick={() => navigate('/case-study-board')}>
            <span className="version-badge">Board</span>
            <h2>Case Study · Board Deck</h2>
            <p>Verdichtete Entscheidungsgrundlage für Sitzweich AG (Lighthouse Wrinkle Detection)</p>
            <ul>
              <li>8 Slides</li>
              <li>~8 Minuten</li>
              <li>Strategic/Financial Highlights</li>
              <li>Roadmap & Governance Fokus</li>
            </ul>
            <button className="version-button">Board Deck öffnen →</button>
          </div>

          <div className="version-card" onClick={() => navigate('/case-study')}>
            <span className="version-badge">Tech</span>
            <h2>Sitzweich AG Case Study (Detail)</h2>
            <p>Kundenspezifische Präsentation für Automotive Seating Systems (400 MA, 7 Standorte)</p>
            <ul>
              <li>14 Slides</li>
              <li>~15 Minuten</li>
              <li>Business Problem · Tech Stack · ROI</li>
              <li>SD-WAN & Multi-Site Architecture</li>
            </ul>
            <button className="version-button">Case Study starten →</button>
          </div>
        </div>

        <div className="selector-footer">
          <p><strong>Christos Kapodistrias</strong></p>
          <p>Principal AI Solution Architect · A1 Telekom Austria | Q4 2025 (12.11.2025)</p>
        </div>
      </div>
    </div>
  )
}
