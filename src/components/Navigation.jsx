import { useState, useEffect } from 'react'
import './Navigation.css'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav>
      <div className="container">
        <div className="nav-in">
          <div className="logo">
            <span className="logo-word">PetitionIQ</span>
            <span className="logo-tld">.AI</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#tiers">Pricing</a></li>
            <li><a href="#proof">About</a></li>
            <li><a href="#evaluator">Evaluator</a></li>
          </ul>
          
          <button
            className="nav-ham"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
              <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
              <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
