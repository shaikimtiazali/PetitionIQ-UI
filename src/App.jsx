import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import Tiers from './components/sections/Tiers'
import Proof from './components/sections/Proof'
import Evaluator from './components/sections/Evaluator'
import CookieBar from './components/CookieBar'
import './App.css'

function App() {
  const [cookieConsent, setCookieConsent] = useState(false)

  useEffect(() => {
    const savedConsent = localStorage.getItem('petitioniq-cookie-consent')
    if (savedConsent) {
      setCookieConsent(JSON.parse(savedConsent))
    }
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem('petitioniq-cookie-consent', JSON.stringify(true))
    setCookieConsent(true)
  }

  const handleCookieDecline = () => {
    localStorage.setItem('petitioniq-cookie-consent', JSON.stringify(false))
    setCookieConsent(false)
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <TrustBar />
        <Tiers />
        <Proof />
        <Evaluator />
      </main>
      {!cookieConsent && (
        <CookieBar
          onAccept={handleCookieAccept}
          onDecline={handleCookieDecline}
        />
      )}
    </>
  )
}

export default App
