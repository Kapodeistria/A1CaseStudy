import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Deck, DeckContext } from 'spectacle'
import { useContext } from 'react'

// Theme & Styles
import './theme/tokens.css'
import './app.css'
import spectacleTheme, { deckTemplate } from './theme/spectacleTheme'

// Version Selector
import VersionSelector from './components/VersionSelector'
import NavigationOverlay from './components/NavigationOverlay'

// Import Personal Presentation Slides
import TitleSlidePersonal from './slides-simple/sitzweich-00-title-personal'
import IntroPersonalSlide from './slides-personal/01-intro-personal'
import JourneySlide from './slides-personal/02-journey'
import AchievementsSlide from './slides-personal/03-achievements'
import ChallengesPersonalSlide from './slides-personal/04-challenges'
import ValueA1Slide from './slides-personal/05-value-a1'

// Import Case Study Slides
import TitleSlideCaseStudy from './slides-simple/sitzweich-00-title-case-study'
import IntroSlide from './slides-simple/sitzweich-01-intro'
import ProblemSlide from './slides-simple/sitzweich-02-problem'
import SolutionSlide from './slides-simple/sitzweich-03-solution'
import NetworkSlide from './slides-simple/sitzweich-09-network'
import ArchitectureSlide from './slides-simple/sitzweich-04-architecture'
import TechStackSlide from './slides-simple/sitzweich-05-techstack'
import PrivacyPyramidSlide from './slides-simple/sitzweich-05-privacy'
import ComplianceSlide from './slides-simple/sitzweich-07-compliance'
import ROISlide from './slides-simple/sitzweich-06-roi'
import HybridStrategySlide from './slides-simple/sitzweich-06-hybrid'
import ChallengesSlide from './slides-simple/sitzweich-07-challenges'
import ConclusionSlide from './slides-simple/sitzweich-08-conclusion'
import BoardTitleSlide from './slides-board/00-title'
import BoardOpportunitySlide from './slides-board/01-opportunity'
import BoardProblemSlide from './slides-board/02-problem'
import BoardSolutionSlide from './slides-board/03-solution'
import BoardRoadmapSlide from './slides-board/04-roadmap'
import BoardROISlide from './slides-board/05-roi'
import BoardCTASlide from './slides-board/06-cta'

const NavigationWrapper = () => {
  const deckContext = useContext(DeckContext)

  if (!deckContext) return null

  const { activeView, numberOfSlides, skipTo } = deckContext

  const handlePrev = () => {
    if (activeView.slideIndex > 0) {
      skipTo({ slideIndex: activeView.slideIndex - 1, stepIndex: 0 })
    }
  }

  const handleNext = () => {
    if (activeView.slideIndex < numberOfSlides - 1) {
      skipTo({ slideIndex: activeView.slideIndex + 1, stepIndex: 0 })
    }
  }

  return (
    <NavigationOverlay
      currentSlide={activeView.slideIndex}
      totalSlides={numberOfSlides}
      onPrevSlide={handlePrev}
      onNextSlide={handleNext}
    />
  )
}

const PersonalPresentation = () => {
  return (
    <>
      <Deck
        theme={spectacleTheme}
        template={deckTemplate}
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
      <NavigationWrapper />
    </>
  )
}

const CaseStudyPresentation = () => {
  return (
    <>
      <Deck
        theme={spectacleTheme}
        template={deckTemplate}
        printScale={0.75}
        transition={{
          from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
          enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
        }}
      >
        <TitleSlideCaseStudy />
        <IntroSlide />
        <ProblemSlide />
        <SolutionSlide />
        <NetworkSlide />
        <ArchitectureSlide />
        <TechStackSlide />
        <PrivacyPyramidSlide />
        <ComplianceSlide />
        <ROISlide />
        <HybridStrategySlide />
        <ChallengesSlide />
        <ConclusionSlide />
      </Deck>
      <NavigationWrapper />
    </>
  )
}

const BoardCaseStudyPresentation = () => {
  return (
    <>
      <Deck
        theme={spectacleTheme}
        template={deckTemplate}
        printScale={0.75}
        transition={{
          from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
          enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
        }}
      >
        <BoardTitleSlide />
        <BoardOpportunitySlide />
        <BoardProblemSlide />
        <BoardSolutionSlide />
        <BoardRoadmapSlide />
        <BoardROISlide />
        <BoardCTASlide />
      </Deck>
      <NavigationWrapper />
    </>
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
