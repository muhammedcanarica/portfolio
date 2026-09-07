function Hero({ content }) {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <p className="hero-name metadata">{content.name}</p>
      <h1 id="hero-title">
        {content.title.map((line, index) => (
          <span key={line} className={index === content.title.length - 1 ? "hero-last-line" : undefined}>
            {line}{index < content.title.length - 1 && " "}
          </span>
        ))}
      </h1>
      <div className="hero-bottom">
        <a className="text-link hero-work" href="#projects">
          {content.work}<span className="link-arrow" aria-hidden="true">↓</span>
        </a>
        <div className="hero-note">
          <p>{content.description}</p>
          <p className="metadata">{content.location} <span aria-hidden="true">·</span> {new Date().getFullYear()}</p>
        </div>
      </div>
      <span className="hero-edition metadata" aria-hidden="true">{content.edition}</span>
    </section>
  );
}

export default Hero;
