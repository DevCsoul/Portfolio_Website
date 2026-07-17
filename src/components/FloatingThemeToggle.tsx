import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../context/useTheme'
import type { Theme } from '../context/ThemeContext'

const options: { value: Theme; icon: string; label: string }[] = [
  { value: 'light', icon: 'fa-solid fa-sun', label: 'Light theme' },
  { value: 'dark', icon: 'fa-solid fa-moon', label: 'Dark theme' },
]

export default function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // On every other route the surface background already fills the whole
  // viewport, so the toggle can just be visible. On the home route it stays
  // hidden until the hero has been completely scrolled past.
  const [pastHero, setPastHero] = useState(!isHome)

  useEffect(() => {
    if (!isHome) {
      setPastHero(true)
      return
    }

    setPastHero(false)
    let heroHeight = window.innerHeight

    const measure = () => {
      const hero = document.getElementById('hero')
      heroHeight = hero?.offsetHeight ?? window.innerHeight
    }

    const onScroll = () => {
      // The hero is sticky and only fully covered once the page has
      // scrolled a full hero-height, thanks to the about section's
      // scroll-snap point landing exactly there (no in-between sliver).
      setPastHero(window.scrollY >= heroHeight - 4)
    }

    measure()
    onScroll()

    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
    }
  }, [isHome])

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      aria-hidden={!pastHero}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-0.5 rounded-full border border-fg/15 bg-surface/80 p-0.5 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-500 ${
        pastHero ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      {options.map((option) => {
        const active = theme === option.value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.label}
            title={option.label}
            tabIndex={pastHero ? 0 : -1}
            onClick={() => setTheme(option.value)}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors duration-300 ${
              active ? 'bg-orange/15 text-orange' : 'text-fg/50 hover:text-fg/80'
            }`}
          >
            <i className={option.icon}></i>
          </button>
        )
      })}
    </div>
  )
}