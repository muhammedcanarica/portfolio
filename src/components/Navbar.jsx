function Navbar({ language, navLinks, toggleLabels, onLanguageChange }) {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Can Arıca home">
        <span className="brand-mark">MC</span>
        <span className="brand-text">Can Arıca</span>
      </a>
      <div className="navbar-actions">
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="language-toggle" aria-label={toggleLabels.label}>
          <button
            className={language === "tr" ? "active" : ""}
            type="button"
            onClick={() => onLanguageChange("tr")}
            aria-pressed={language === "tr"}
          >
            {toggleLabels.tr}
          </button>
          <button
            className={language === "en" ? "active" : ""}
            type="button"
            onClick={() => onLanguageChange("en")}
            aria-pressed={language === "en"}
          >
            {toggleLabels.en}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
