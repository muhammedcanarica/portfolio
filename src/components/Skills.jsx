function Skills({ content }) {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="skills-title">{content.title}</h2>
      </div>
      <ul className="technology-list">
        {content.items.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;
