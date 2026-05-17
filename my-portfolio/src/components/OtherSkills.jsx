const otherSkills = [
  {
    icon: 'fa-arrow-trend-up',
    text: 'Fast learner with a strong ability to self-study and explore new technologies',
  },
  {
    icon: 'fa-brain',
    text: 'Strong logical thinking and problem-solving skills',
  },
  {
    icon: 'fa-palette',
    text: 'Good aesthetic sense with basic UI/UX knowledge',
  },
  {
    icon: 'fa-users',
    text: 'Able to work effectively both independently and in team environments',
  },
  {
    icon: 'fa-check-circle',
    text: 'Detail-oriented, responsible, and highly committed to assigned tasks',
  },
  {
    icon: 'fa-comments',
    text: 'Good communication skills developed through academic activities and part-time work',
  },
]

function OtherSkills() {
  return (
    <section id="other-skills" className="other-skills-section">
      <h3 className="section-subtitle">Other Skills</h3>
      <div className="other-skills-grid">
        {otherSkills.map((item) => (
          <div key={item.text} className="other-skill-card">
            <div className="other-skill-card-inner">
              <i className={`fas ${item.icon}`} aria-hidden="true"></i>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherSkills
