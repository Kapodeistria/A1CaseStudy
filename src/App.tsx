import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Deck } from 'spectacle'

// Theme & Styles
import './theme/tokens.css'
import './app.css'
import spectacleTheme, { createDeckTemplate } from './theme/spectacleTheme'

// Version Selector
import VersionSelector from './components/VersionSelector'

// Import Personal Presentation Slides
import TitleSlidePersonal from './slides-simple/sitzweich-00-title-personal'
import IntroPersonalSlide from './slides-personal/01-intro-personal'
import JourneySlide from './slides-personal/02-journey'
import AchievementsSlide from './slides-personal/03-achievements'
import ChallengesPersonalSlide from './slides-personal/04-challenges'
import ValueA1Slide from './slides-personal/05-value-a1'

// Import Case Study Slides
import CaseStudyOverviewSlide from './slides-simple/sitzweich-00-overview'
import TitleSlideCaseStudy from './slides-simple/sitzweich-00-title-case-study'
import IntroSlide from './slides-simple/sitzweich-01-intro'
import ProblemSlide from './slides-simple/sitzweich-02-problem'
import SolutionSlide from './slides-simple/sitzweich-03-solution'
import NetworkSlide from './slides-simple/sitzweich-09-network'
import ArchitectureSlide from './slides-simple/sitzweich-04-architecture'
import TechStackSlide from './slides-simple/sitzweich-05-techstack'
import ArchitectureDecisionSlide from './slides-simple/sitzweich-05b-architecture-decision'
import RiskMitigationSlide from './slides-simple/sitzweich-06-risks'
import PrivacyPyramidSlide from './slides-simple/sitzweich-05-privacy'
import ComplianceSlide from './slides-simple/sitzweich-07-compliance'
import ROISlide from './slides-simple/sitzweich-06-roi'
import HybridStrategySlide from './slides-simple/sitzweich-06-hybrid'
import ChallengesSlide from './slides-simple/sitzweich-07-challenges'
import ConclusionSlide from './slides-simple/sitzweich-08-conclusion'
import BoardIntroSlide from './slides-board/00-intro'
import BoardTitleSlide from './slides-board/00-title'
import BoardOpportunitySlide from './slides-board/01-opportunity'
import BoardProblemSlide from './slides-board/02-problem'
import BoardSolutionSlide from './slides-board/03-solution'
import BoardRoadmapSlide from './slides-board/04-roadmap'
import BoardROISlide from './slides-board/05-roi'
import BoardCTASlide from './slides-board/06-cta'

const PersonalPresentation = () => {
  return (
    <Deck
      theme={spectacleTheme}
      template={createDeckTemplate('Personal Deck')}
      printScale={0.75}
      transition={{
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
      }}
    >
      <TitleSlidePersonal />
      <IntroPersonalSlide />
      <JourneySlide />
      <AchievementsSlide />
      <ChallengesPersonalSlide />
      <ValueA1Slide />
    </Deck>
  )
}

const CaseStudyPresentation = () => {
  return (
    <Deck
      theme={spectacleTheme}
      template={createDeckTemplate('Tech Deck')}
      printScale={0.75}
      transition={{
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
      }}
    >
      <CaseStudyOverviewSlide />
      <TitleSlideCaseStudy />
      <IntroSlide />
      <ProblemSlide />
      <SolutionSlide />
      <NetworkSlide />
      <ArchitectureSlide />
      <TechStackSlide />
      <ArchitectureDecisionSlide />
      <RiskMitigationSlide />
      <PrivacyPyramidSlide />
      <ComplianceSlide />
      <ROISlide />
      <HybridStrategySlide />
      <ChallengesSlide />
      <ConclusionSlide />
    </Deck>
  )
}

const BoardCaseStudyPresentation = () => {
  return (
    <Deck
      theme={spectacleTheme}
      template={createDeckTemplate('Board Deck')}
      printScale={0.75}
      transition={{
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
      }}
    >
      <BoardIntroSlide />
      <BoardTitleSlide />
      <BoardOpportunitySlide />
      <BoardProblemSlide />
      <BoardSolutionSlide />
      <BoardRoadmapSlide />
      <BoardROISlide />
      <BoardCTASlide />
    </Deck>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VersionSelector />} />
        <Route path="/personal" element={<PersonalPresentation />} />
        <Route path="/case-study-board" element={<BoardCaseStudyPresentation />} />
        <Route path="/case-study" element={<CaseStudyPresentation />} />
      </Routes>
    </Router>
  )
}

export default App
