import { projects } from "../data/projects.js";

function Projects({ content, language }) {
  const projectList = projects[language];

  return (
    <section className="section" id="projects">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <p className="section-note">{content.note}</p>
      </div>

      <div className="card-grid project-grid">
        {projectList.map((project) => (
          <article className="glass-card project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.category}</span>
              <span>{project.status}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list" aria-label={`${project.title} tech stack`}>
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
