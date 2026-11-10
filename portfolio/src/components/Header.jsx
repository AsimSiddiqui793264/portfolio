import { useState } from 'react'
import mypic from '../assets/mypic.jpeg'
import Arrow from './Arrow.jsx'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Asim Siddiqui, home">
        <span className="brand-mark">
          <img src={mypic} alt="" />
        </span>
        <span>Asim Siddiqui</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        className={menuOpen ? 'navigation navigation-open' : 'navigation'}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <a href="#work" onClick={closeMenu}>Projects</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Get in touch <Arrow diagonal />
        </a>
      </nav>
    </header>
  )
}

export default Header
