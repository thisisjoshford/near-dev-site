import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function Home() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Initialize intersection observer for other animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const cards = document.querySelectorAll('.service-card, .partner-card, .process-step')
    cards.forEach(card => observer.observe(card))

    // Initialize typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        'developer_support',
        'documentation', 
        'examples_and_guides',
        'developer_tooling',
        'event_support',
        'developer_relations',
        'solutions_development'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '┃'
    })

    return () => {
      observer.disconnect()
      typed.destroy()
    }
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

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img src="/near-dev-logo.png" alt="NEAR Dev Logo" className="hero-logo" />
            <h1>Your Developer Success Partners</h1>
            <p>We collaborate with NEAR ecosystem leaders to create execeptional developer experiences that accelerate adoption.</p>
            
            {/* Terminal Typing Effect */}
            <div className="terminal-container">
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="terminal-dot red"></span>
                  <span className="terminal-dot yellow"></span>
                  <span className="terminal-dot green"></span>
                </div>
                <div className="terminal-body">
                  <span className="terminal-prompt">$ near_dev --service=</span><span ref={typedRef} className="typed-element"></span>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="cta-button" onClick={(e) => handleSmoothScroll(e, '#contact')}>Partner with Us</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-home">
        <div className="container">
          <div className="section-title">
            <h2>What is NEAR Dev?</h2>
            <p>NEAR Dev is the technical services team for the NEAR ecosystem. We provide core developer tooling and infrastructure, along with dedicated expert support, to help projects and partners succeed.</p>
          </div>
        </div>
      </section>

      {/* DevHub Connection Section */}
      <section className="devhub-connection">
        <div className="container">
          <div className="section-title">
            <h2>Our Connection to DevHub</h2>
            <p>DevHub is a community initiative where developers build for other developers — sharing ideas, tools, and projects to grow the NEAR ecosystem. It's like a town square full of collaboration and creativity.</p>
            <p>NEAR Dev works alongside this community like a municipal services department: ensuring the critical infrastructure works, key services are maintained, and partners get the dedicated support they need.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Services</h2>
            <p> Empowering the NEAR ecosystem through technical excellence.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🛠️</div>
                <h3>Technical Support</h3>
              </div>
              <p>Dedicated expert support for top ecosystem partners.</p>
            </div>
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">⚙️</div>
                <h3>Tooling and Infrastructure</h3>
              </div>
              <p>Maintaining and improving core developer SDKs, tooling, and infrastructure.</p>
            </div>
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">📝</div>
                <h3>Technical Content</h3>
              </div>
              <p>Creating high-quality documentation, tutorials, and examples to accelerate the development process.</p>
            </div>
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🎯</div>
                <h3>Event Support</h3>
              </div>
              <p>On-site technical workshops and mentorship for hackathons, conferences, and community events.</p>
            </div>
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">⚡</div>
                <h3>Custom Solutions</h3>
              </div>
              <p>Building ecosystem-critical software such as NEAR Treasury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Ready to Partner with NEAR Dev?</h2>
          <p>Get expert technical support and accelerate your NEAR project development</p>
          <div className="contact-methods">
            <div className="contact-method">
              <h4>External Partners</h4>
              <p>Send your project details and support needs to:</p>
              <a href="mailto:hello@near.dev">hello@near.dev</a>
            </div>
            <div className="contact-method">
              <h4>NEAR Foundation Stakeholders</h4>
              <p>Submit support requests through:</p>
              <a href="#">nf-devhub Slack channel</a>
            </div>
            <div className="contact-method">
              <h4>General Technical Questions</h4>
              <p>Join our community for discussions:</p>
              <a href="https://t.me/neardev">NEAR Dev Telegram Channel</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home 