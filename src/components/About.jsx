function About({ content }) {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="glass-card about-card">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
