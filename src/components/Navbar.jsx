function Navbar({ language, navLinks, toggleLabels, labels, onLanguageChange }) {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label={labels.home}>
        muhammed can arıca<span aria-hidden="true">.</span>
      </a>
      <nav className="nav-links" aria-label={labels.label}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <div className="language-toggle" role="group" aria-label={toggleLabels.label}>
        {["tr", "en"].map((locale) => (
          <button
            key={locale}
            type="button"
            lang={locale}
            className={language === locale ? "active" : undefined}
            onClick={() => onLanguageChange(locale)}
            aria-pressed={language === locale}
          >
            {toggleLabels[locale]}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
