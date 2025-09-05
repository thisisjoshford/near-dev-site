import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Home'
import './App.css'

function Header() {
  const [headerBackground, setHeaderBackground] = useState('rgba(10, 10, 10, 0.95)')
  const [headerBorder, setHeaderBorder] = useState('1px solid #333')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderBackground('rgba(10, 10, 10, 0.98)')
        setHeaderBorder('1px solid #444')
      } else {
        setHeaderBackground('rgba(10, 10, 10, 0.95)')
        setHeaderBorder('1px solid #333')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const isHomePage = location.pathname === '/'

  return (
    <header style={{ background: headerBackground, borderBottom: headerBorder }}>
      <nav className="container">
        <Link to="/" className="logo">
          <img src="/LOGO-ICON.png" alt="NEAR Dev" className="logo-icon" />
          NEAR Dev
        </Link>
        <ul className="nav-links">
          {isHomePage ? (
            <>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
              <li><a href="#process" onClick={(e) => handleSmoothScroll(e, '#process')}>Process</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
            </>
          ) : (
            <>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#process">Process</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </>
          )}
        </ul>
        <a href="https://docs.near.org" className="cta-button">Ready to build?</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 NEAR Dev. Empowering the NEAR ecosystem through technical excellence.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
