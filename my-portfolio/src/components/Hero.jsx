const contactItems = [
  {
    href: 'mailto:maianhdo20042303@gmail.com',
    icon: 'fa-envelope',
    label: 'maianhdo20042303@gmail.com',
  },
  {
    href: 'tel:+84899463504',
    icon: 'fa-phone',
    label: '+84 899 463 504',
  },
  {
    href: 'https://github.com/maianh-233',
    icon: 'fa-github',
    label: 'github.com/maianh-233',
    external: true,
  },
]

function Hero() {
  return (
    <section id="hero" className="hero snap-page">
      <div className="hero-inner">
        <div className="hero-copy">
          <div>
            <h1>Mai Anh</h1>
            <p className="hero-subtitle">Final-year Student • Software Engineering</p>
          </div>

          <div className="hero-tagline">
            <i className="fas fa-code" aria-hidden="true"></i>
            Aspiring Web / Full-stack Developer
          </div>

          <p className="hero-body">
            Solid foundation in web development, backend technologies, and databases.
            Experienced in developing both web and desktop applications.
            Seeking an internship opportunity to apply my knowledge and grow in a professional environment.
          </p>

          <div className="hero-contact-panel">
            <p className="section-label">Contact</p>
            <div className="hero-contact-list">
              {contactItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="hero-contact-link"
                >
                  <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

        </div>
        <aside className="hero-media" aria-label="Technology visual">
          <div className="hero-media-card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="Technology workspace and code environment"
              className="hero-media-image"
            />
            <div className="hero-media-overlay" />
            <div className="hero-media-content">
              <p className="hero-media-title">Technology Focus</p>
              <div className="hero-media-tags">
                <span>Web Development</span>
                <span>Backend APIs</span>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
