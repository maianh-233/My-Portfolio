import { useEffect, useRef, useState } from 'react';
import './App.css';
import Education from './components/Education';
import Hero from './components/Hero';
import OtherSkills from './components/OtherSkills';
import ProjectReview from './components/ProjectReview';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null)
  const currentIndexRef = useRef(0)
  const isAnimatingRef = useRef(false)
  const touchStartYRef = useRef(null)
  const touchLastYRef = useRef(null)
  const touchUsedInnerScrollRef = useRef(false)
  const unlockTimerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const pages = Array.from(container.querySelectorAll('.snap-page'))
    const middlePageContent = container.querySelector('#content .page-inner')
    const projectsPageContent = container.querySelector('#projects-page .page-inner')

    const clampIndex = (index) => Math.min(Math.max(index, 0), pages.length - 1)
    const getNearestPageIndex = () => {
      if (pages.length === 0) {
        return 0
      }

      const containerTop = container.scrollTop
      let nearestIndex = 0
      let minDistance = Number.POSITIVE_INFINITY

      pages.forEach((page, index) => {
        const distance = Math.abs(page.offsetTop - containerTop)
        if (distance < minDistance) {
          minDistance = distance
          nearestIndex = index
        }
      })

      return nearestIndex
    }

    const canScrollInnerPage = (deltaY) => {
      const currentIndex = currentIndexRef.current
      const targetContent =
        currentIndex === 1 ? middlePageContent : currentIndex === 2 ? projectsPageContent : null

      if (!targetContent) {
        return false
      }

      if (targetContent.scrollHeight <= targetContent.clientHeight + 1) {
        return false
      }

      const atTop = targetContent.scrollTop <= 0
      const atBottom =
        targetContent.scrollTop + targetContent.clientHeight >= targetContent.scrollHeight - 1

      if (deltaY > 0 && !atBottom) {
        targetContent.scrollTop += deltaY
        return true
      }

      if (deltaY < 0 && !atTop) {
        targetContent.scrollTop += deltaY
        return true
      }

      return false
    }

    const unlockNavigation = () => {
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current)
      }
      unlockTimerRef.current = window.setTimeout(() => {
        isAnimatingRef.current = false
      }, 700)
    }

    const goToPage = (nextIndex) => {
      const targetIndex = clampIndex(nextIndex)

      if (targetIndex === currentIndexRef.current || isAnimatingRef.current) {
        return
      }

      const targetPage = pages[targetIndex]

      if (!targetPage) {
        return
      }

      isAnimatingRef.current = true
      currentIndexRef.current = targetIndex
      targetPage.scrollIntoView({ behavior: 'smooth', block: 'start' })
      unlockNavigation()
    }

    const syncCurrentIndex = () => {
      currentIndexRef.current = getNearestPageIndex()
    }

    const handleWheel = (event) => {
      event.preventDefault()

      if (isAnimatingRef.current || Math.abs(event.deltaY) < 12) {
        return
      }

      if (canScrollInnerPage(event.deltaY)) {
        return
      }

      if (event.deltaY > 0) {
        goToPage(currentIndexRef.current + 1)
      } else {
        goToPage(currentIndexRef.current - 1)
      }
    }

    const handleTouchStart = (event) => {
      if (event.touches.length !== 1) {
        touchStartYRef.current = null
        return
      }

      touchStartYRef.current = event.touches[0].clientY
      touchLastYRef.current = event.touches[0].clientY
      touchUsedInnerScrollRef.current = false
    }

    const handleTouchMove = (event) => {
      if (event.touches.length !== 1) {
        return
      }

      const currentY = event.touches[0].clientY

      if (touchLastYRef.current !== null) {
        const deltaY = touchLastYRef.current - currentY
        if (canScrollInnerPage(deltaY)) {
          touchUsedInnerScrollRef.current = true
        }
      }

      touchLastYRef.current = currentY
      event.preventDefault()
    }

    const handleTouchEnd = (event) => {
      touchLastYRef.current = null

      if (touchUsedInnerScrollRef.current) {
        touchStartYRef.current = null
        touchUsedInnerScrollRef.current = false
        return
      }

      if (touchStartYRef.current === null || isAnimatingRef.current) {
        return
      }

      const touchEndY = event.changedTouches[0]?.clientY

      if (typeof touchEndY !== 'number') {
        touchStartYRef.current = null
        return
      }

      const deltaY = touchStartYRef.current - touchEndY
      touchStartYRef.current = null
      touchUsedInnerScrollRef.current = false

      if (Math.abs(deltaY) < 45) {
        return
      }

      if (deltaY > 0) {
        goToPage(currentIndexRef.current + 1)
      } else {
        goToPage(currentIndexRef.current - 1)
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('scroll', syncCurrentIndex, { passive: true })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
    syncCurrentIndex()

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('scroll', syncCurrentIndex)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="snap-container">
      <Hero />

      <section id="content" className="snap-page section-page">
        <main className="page-inner">
          <Education />
          <TechnicalSkills />
          <OtherSkills />
          <Projects onOpenReview={setSelectedProject} />
        </main>
      </section>

      {selectedProject && (
        <div className="project-review-overlay">
          <ProjectReview
            projectName={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      )}
    </div>
  )
}

export default App
