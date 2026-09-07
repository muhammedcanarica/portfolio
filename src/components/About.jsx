function About({ content }) {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="about-title">{content.title}</h2>
        {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="about-detail">
          <span className="metadata">{content.detailLabel}</span>
          <p>{content.detail}</p>
        </div>
      </div>
      <figure className="about-portrait">
        <img
          src={`${import.meta.env.BASE_URL}assets/muhammed-can-arica-profile-square.png`}
          alt={content.photoAlt}
          width="640"
          height="640"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="metadata">{content.photoCaption}</figcaption>
      </figure>
    </section>
  );
}

export default About;
