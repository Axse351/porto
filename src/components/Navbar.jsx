import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const LANGUAGES = [
  { code: 'id', label: 'ID' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JA' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#contact', label: t('nav.contact') }
  ];

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  const handleChangeLanguage = code => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <nav ref={navRef} className="navbar">
      <a href="#home" className="navbar__logo">
        Yonatan<span className="navbar__logo-dot">_DEV</span>
      </a>

      <ul className="navbar__links">
        {LINKS.map((link, i) => (
          <li key={link.href}>
            <a href={link.href} className="navbar__link">
              <span className="navbar__link-index">0{i + 1}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__lang-switch">
        {LANGUAGES.map(lang => (
          <button
            key={lang.code}
            className={`navbar__lang-btn ${
              i18n.language === lang.code ? 'is-active' : ''
            }`}
            onClick={() => handleChangeLanguage(lang.code)}
          >
            {lang.label}
          </button>
        ))}
      </div>

      <button
        className="navbar__burger"
        aria-label={open ? t('nav.menuCloseAria') : t('nav.menuOpenAria')}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        {open ? t('nav.menuClose') : t('nav.menuOpen')}
      </button>

      {open && (
        <ul className="navbar__mobile">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                <span>0{i + 1}</span> {link.label}
              </a>
            </li>
          ))}

          <li className="navbar__mobile-lang">
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                className={`navbar__lang-btn ${
                  i18n.language === lang.code ? 'is-active' : ''
                }`}
                onClick={() => handleChangeLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </li>
        </ul>
      )}
    </nav>
  );
}
