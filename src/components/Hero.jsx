function Hero({ content }) {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{content.label}</p>
        <h1>{content.title}</h1>
        <p className="hero-description">{content.description}</p>
        <div className="hero-actions" aria-label="Hero actions">
          <a className="button button-primary" href="#focus">
            {content.actions.work}
          </a>
          <a className="button button-secondary" href="#about">
            {content.actions.about}
          </a>
          <a className="button button-ghost" href="#contact">
            {content.actions.contact}
          </a>
        </div>
      </div>

      <aside className="identity-panel glass-card" aria-label="Profile summary">
        <div className="profile-card-main">
          <img
            src="/assets/muhammed-can-arica-profile-square.png"
            alt="Can Arıca portrait"
            className="profile-photo"
          />
          <div className="profile-caption">
            <span>Can Arıca</span>
            <strong>{content.profileTitle}</strong>
          </div>
        </div>
        <div className="profile-chips" aria-label="Profile details">
          {content.profileChips.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default Hero;
