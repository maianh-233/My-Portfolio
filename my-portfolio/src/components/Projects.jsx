import { projects } from './projectsData';

function Projects({ onOpenReview }) {
  const openUrl = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-card-header">
              <div>
                <p className="project-name">{project.name}</p>
                <p className="project-type">{project.type}</p>
              </div>
              <span className="project-role">{project.role}</span>
            </div>
            <div className="project-detail-row">
              <span className="project-label">Technologies</span>
              <p className="project-tech">{project.tech}</p>
            </div>
            <div className="project-description-block">
              <p className="project-summary">{project.summary}</p>
              <div className="project-tasks">
                <span className="project-label">My contributions</span>
                <ul>
                  {project.responsibilities.map((task) => (
                    <li key={task} className="project-task-item">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="project-actions">
              <button
                type="button"
                className="project-button"
                onClick={() => openUrl(project.repoUrl)}
                disabled={project.repoUrl === '#'}
              >
                {project.repoUrl === '#' ? 'Repo coming soon' : 'View GitHub repo'}
              </button>
              <button
                type="button"
                className="project-button project-button-secondary"
                onClick={() => {
                  if (project.reviewUrl && project.reviewUrl !== '#') {
                    onOpenReview?.(project.name)
                  }
                }}
                disabled={project.reviewUrl === '#'}
              >
                {project.reviewUrl === '#' ? 'Review page soon' : 'View project review'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
