const skillSections = [
  {
    title: 'Frontend',
    accentClass: 'accent-sky',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    accentClass: 'accent-amber',
    skills: ['Java', 'Spring Boot', 'C#', '.NET', 'ASP.NET MVC'],
  },
  {
    title: 'Database & Tools',
    accentClass: 'accent-violet',
    skills: ['MySQL', 'PostgreSQL', 'Git • GitHub', 'Postman', 'VS Code', 'Figma'],
  },
  {
    title: 'Language',
    accentClass: 'accent-teal',
    description: 'English — Good at reading technical documents',
  },
]

function TechnicalSkills() {
  return (
    <section id="technical-skills" className="skills-section">
      <h3 className="section-subtitle">Technical Skills</h3>
      <div className="skills-grid">
        {skillSections.map((section) => (
          <div key={section.title} className={`skill-card ${section.accentClass}`}>
            <div className="skill-card-header">
              <div className={`skill-pill ${section.accentClass}`}></div>
              <h4>{section.title}</h4>
            </div>
            {section.description ? (
              <p className="skill-description">{section.description}</p>
            ) : (
              <div className="skill-tags">
                {section.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills
