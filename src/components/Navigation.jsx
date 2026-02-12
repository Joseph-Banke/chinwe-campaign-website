import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#platform' },
    { label: 'Achievements', href: '#achievements' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/[0.98] shadow-lg' : 'bg-navy/95'
      }`}
      style={{ height: scrolled ? 60 : 70 }}
    >
      <nav className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex flex-col leading-tight">
          <span className="font-display text-white text-xl sm:text-2xl md:text-[28px] font-bold tracking-tight">
            Chinwe Praise
          </span>
          <span className="font-heading text-golden text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            For Research Committee
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-[30px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-heading text-sm uppercase text-white hover:text-golden transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-golden after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white text-2xl p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-navy z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-5 right-6 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <i className="fas fa-times"></i>
        </button>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="font-heading text-xl uppercase text-white hover:text-golden transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
