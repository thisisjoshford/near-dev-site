import { useEffect } from 'react'

function About() {
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

    const cards = document.querySelectorAll('.team-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* About Us & Our Teams Section */}
      <section className="about-teams">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
            <p>NEAR Dev is a technical leadership team that mobilizes DevHub community contributors to deliver essential developer tools, documentation, and support across the NEAR ecosystem.</p>
          </div>
          <div className="teams-section">
            <h3 className="teams-title">Our Teams</h3>
          </div>
          <div className="teams-grid">
            <div className="team-card">
              <h3>Developer Relations</h3>
              <p className="team-description">Building stronger connections between developers and the NEAR ecosystem</p>
              <ul className="team-features">
                <li>Comprehensive DevRel services for major NEAR projects</li>
                <li>Documentation ownership and maintenance (docs.near.org)</li>
                <li>Developer community support and engagement</li>
              </ul>
              <a href="#" className="team-link">See what we're up to →</a>
            </div>
            <div className="team-card">
              <h3>Developer Tooling</h3>
              <p className="team-description">Creating and maintaining essential tools for NEAR developers</p>
              <ul className="team-features">
                <li>Core development tool features and improvements</li>
                <li>SDK support and enhancements</li>
                <li>Developer workflow optimization</li>
              </ul>
              <a href="https://github.com/orgs/near/projects/156/" className="team-link">See what we're up to →</a>
            </div>
            <div className="team-card">
              <h3>Developer Awareness</h3>
              <p className="team-description">Amplifying NEAR development through content and community</p>
              <ul className="team-features">
                <li>Weekly developer livestream shows and events</li>
                <li>Technical content creation and news coverage</li>
                <li>Social media and community outreach</li>
              </ul>
              <a href="#" className="team-link">See what we're up to →</a>
            </div>
            <div className="team-card">
              <h3>Ecosystem Products</h3>
              <p className="team-description">Building products that power the NEAR ecosystem</p>
              <ul className="team-features">
                <li>NEAR Treasury - Financial management solutions</li>
                <li>NEARN.io - Decentralized gigs economy platform</li>
                <li>Custom solutions for ecosystem needs</li>
              </ul>
              <a href="#" className="team-link">See what we're up to →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About 