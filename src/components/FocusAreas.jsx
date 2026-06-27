function FocusAreas({ content }) {
  return (
    <section className="section" id="focus">
      <div className="section-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="card-grid focus-grid">
        {content.areas.map((area) => (
          <article className="glass-card content-card" key={area.title}>
            <span className="card-kicker">{area.title}</span>
            <p>{area.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FocusAreas;
