import { contactLinks } from "../data/contactLinks.js";

function Contact({ content }) {
  return (
    <footer className="section contact-section" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">{content.eyebrow}</p>
      <div className="contact-body">
        <div>
          <h2 id="contact-title">{content.title}</h2>
          <p className="contact-description">{content.description}</p>
        </div>
        <div className="contact-links">
          {contactLinks.map((link) => {
            const opensTab = link.href.startsWith("http") || link.href.endsWith(".pdf");
            return (
              <a className="text-link" key={link.key} href={link.href}
                target={opensTab ? "_blank" : undefined}
                rel={opensTab ? "noreferrer" : undefined}>
                <span>{link.key === "email" ? link.href.replace("mailto:", "") : content.links[link.key]}</span>
                <span className="link-arrow" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="footer-bottom metadata">
        <span>© {new Date().getFullYear()} {content.credit}</span>
        <a className="text-link" href="#top">{content.backToTop}<span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}

export default Contact;
