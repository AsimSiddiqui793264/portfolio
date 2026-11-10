import Arrow from './Arrow.jsx'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a
        className={`project-visual ${project.theme}`}
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.name} project`}
      >
        <span className="project-number">{project.number} / SELECTED WORK</span>
        <iframe
          className="project-preview"
          src={project.preview}
          title={`${project.name} homepage preview`}
          loading="lazy"
          tabIndex="-1"
          aria-hidden="true"
          sandbox="allow-scripts allow-same-origin"
        />
        <span className="project-open"><Arrow diagonal /></span>
      </a>
      <div className="project-info">
        <p className="eyebrow">{project.type}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-list" aria-label="Project skills">
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
