import { useEffect, useState } from 'react'

const navLinks = ['About', 'Blog', 'Projects', 'Experiences', 'Stack']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu automatically if the viewport grows past the
  // collapse point (e.g. rotating a device or resizing a window).
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[92%] sm:w-[85%] lg:w-[75%] xl:w-[65%] max-w-6xl -translate-x-1/2">
      <nav
        className={`flex items-center justify-between rounded-2xl border border-white/15 px-4 sm:px-6 py-3 backdrop-blur-xl transition-colors duration-500 ${
          scrolled || menuOpen ? 'bg-black/30 shadow-lg shadow-black/30' : 'bg-white/5'
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            closeMenu()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-mono text-sm tracking-wide text-white/90 transition-colors duration-300 hover:text-white/50"
        >
          Kurt M.
        </a>

        {/* Full nav links, only shown once there's room for them */}
        <ul className="hidden items-center gap-6 font-mono text-sm tracking-wide text-white/80 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-white/50"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden font-mono text-sm tracking-wide text-white/90 transition-colors duration-300 hover:text-white/50 lg:inline-block"
        >
          Contact
        </a>

        {/* Hamburger toggle, only shown once links would be cramped */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="relative flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
              menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
              menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile / collapsed menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-1 rounded-2xl border border-white/15 bg-black/60 px-4 py-4 font-mono text-sm tracking-wide text-white/80 backdrop-blur-xl">
          {navLinks.map((link) => (
            <li key={link} className="w-full text-center">
              <a
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="block rounded-lg py-2.5 transition-colors duration-300 hover:text-orange"
              >
                {link}
              </a>
            </li>
          ))}
          <li className="mt-1 w-full border-t border-white/10 pt-3 text-center">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block rounded-lg py-2.5 text-white/90 transition-colors duration-300 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}