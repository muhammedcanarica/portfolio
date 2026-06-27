function Skills({ content }) {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="skill-grid">
        {content.groups.map((group) => (
          <article className="glass-card skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
