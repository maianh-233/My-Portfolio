function Education() {
  return (
    <section id="education" className="education-card">
      <div className="education-grid">
        <div className="education-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/vi/thumb/0/0f/%C4%90%E1%BA%A1i_h%E1%BB%8Dc_S%C3%A0i_G%C3%B2n_logo.svg/800px-%C4%90%E1%BA%A1i_h%E1%BB%8Dc_S%C3%A0i_G%C3%B2n_logo.svg.png"
            alt="Saigon University"
          />
        </div>
        <div className="education-details">
          <p className="education-school">SAIGON UNIVERSITY</p>
          <h3>Information Technology - Software Engineering</h3>
          <p className="education-period">2022 — Present</p>
        </div>
        <div className="education-gpa">
          <div className="education-gpa-value">3.23</div>
          <p className="education-gpa-label">GPA / 4.0</p>
        </div>
      </div>
    </section>
  )
}

export default Education
