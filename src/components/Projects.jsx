import { projects } from "../data/projects.js";

function ProjectVisual({ project, content }) {
  if (project.image) {
    return (
      <figure className={`project-visual project-image project-image-${project.id}`}>
        <img
          src={project.image.src}
          alt={project.imageAlt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
        />
      </figure>
    );
  }

  if (project.flow) {
    return (
      <div className="project-visual project-flow" aria-label={project.flowLabel}>
        <span className="metadata flow-label">{project.flowLabel}</span>
        <ol>
          {project.flow.map((step, index) => (
            <li key={step}>
              <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < project.flow.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (project.tiles) {
    return (
      <figure className="project-visual project-tiles" aria-label={content.imageLabel}>
        {project.tiles.map((src, index) => (
          <img key={src} src={src} alt={index === 0 ? project.imageAlt : ""} loading="lazy" decoding="async" />
        ))}
      </figure>
    );
  }

  if (project.signal) {
    return (
      <div className="project-visual project-signal" aria-hidden="true">
        <span className="signal-line" />
        {project.signal.map((item, index) => (
          <span key={item} className="signal-word" style={{ "--signal-index": index }}>{item}</span>
        ))}
      </div>
    );
  }

  return (
    <div className="project-visual project-monogram" aria-hidden="true">
      <span>{project.title.slice(0, 2).toUpperCase()}</span>
      <i />
    </div>
  );
}

function Projects({ content, language }) {
  const projectList = [...projects[language]].sort(
    (firstProject, secondProject) => firstProject.priority - secondProject.priority,
  );

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <header className="section-heading">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="projects-title">{content.title}</h2>
        </div>
        <p className="section-note">{content.note}</p>
      </header>

      <div className="project-list">
        {projectList.map((project, index) => (
          <article className={`project-entry project-entry-${project.id}`} key={project.id}>
            <header className="project-topline metadata">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
              <span>{project.status}</span>
            </header>
            <div className="project-layout">
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-stack" aria-label={content.stackLabel}>
                  {project.techStack.join("  ·  ")}
                </p>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      <span>{link.label}</span><span className="link-arrow" aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
              <ProjectVisual project={project} content={content} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
