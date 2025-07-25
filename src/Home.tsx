import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
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

    return () => observer.disconnect()
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
            <p>Collaborating with NEAR ecosystem leaders to create exceptional developer experiences that accelerate adoption.</p>
            <a href="#contact" className="cta-button" onClick={(e) => handleSmoothScroll(e, '#contact')}>Partner with Us</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-home">
        <div className="container">
          <div className="section-title">
            <h2>Who is NEAR Dev?</h2>
            <p>NEAR Dev is a technical leadership team that mobilizes DevHub community contributors to deliver essential developer resources across the NEAR ecosystem. We work in collaboration with ecosystem partners to identify and address their technical needs.</p>
            <Link to="/about" className="about-link">Learn more about our teams →</Link>
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
                <div className="service-icon">📝</div>
                <h3>Technical Content</h3>
              </div>
              <p>High-quality documentation, tutorials, and examples to accelerate the development process.</p>
              <ul className="service-features">
                <li>Comprehensive developer documentation</li>
                <li>Step-by-step tutorials and guides</li>
                <li>Code examples and best practices</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🛠️</div>
                <h3>Technical Support</h3>
              </div>
              <p>Priority technical support to keep your projects moving forward.</p>
              <ul className="service-features">
                <li>Architecture review and recommendations</li>
                <li>Rapid issue diagnosis and resolution</li>
                <li>Integration and SDK implementation support</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🎯</div>
                <h3>Event Support</h3>
              </div>
              <p>On-site technical presence, workshops, and mentorship for community events and conferences.</p>
              <ul className="service-features">
                <li>Workshop facilitation</li>
                <li>Hackathon judging and mentorship</li>
                <li>Conference representation</li>
                <li>Community engagement</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">⚡</div>
                <h3>Solutions Development</h3>
              </div>
              <p>Custom software solutions designed to address your specific technical needs and challenges.</p>
              <ul className="service-features">
                <li>Building new tools and features</li>
                <li>External service integrations</li>
                <li>Proof-of-concept development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <div className="section-title">
            <h2>How We Work Together</h2>
            <p>Our streamlined process ensures you get the technical support you need, when you need it</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Initial Contact</h4>
              <p>Reach out through our dedicated channels - we respond within 24 hours on business days</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Project Assessment</h4>
              <p>We review your technical scope, requirements, and determine the best approach for your needs</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Dedicated Support</h4>
              <p>Get assigned a dedicated account owner and establish project-specific communication channels</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Collaborative Development</h4>
              <p>Work together as an extension of your team with ongoing support and solution development</p>
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
              <a href="#">NEAR Dev Telegram Channel</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home 