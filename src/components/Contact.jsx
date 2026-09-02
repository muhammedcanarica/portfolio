const contactLinks = [
  { key: "email", href: "mailto:muhammedarica4444@gmail.com" },
  { key: "github", href: "https://github.com/muhammedcanarica" },
  { key: "cv", href: "/assets/muhammed-can-arica-cv.pdf" },
];

function Contact({ content }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="glass-card contact-card">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p className="contact-detail">muhammedarica4444@gmail.com</p>
        <div className="contact-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a
              className="button button-secondary"
              key={link.key}
              href={link.href}
              target={
                link.href.startsWith("http") || link.href.endsWith(".pdf")
                  ? "_blank"
                  : undefined
              }
              rel={
                link.href.startsWith("http") || link.href.endsWith(".pdf")
                  ? "noreferrer"
                  : undefined
              }
            >
              {content.links[link.key]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
