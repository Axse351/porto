import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Project' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

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

      <button
        className="navbar__burger"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        {open ? 'CLOSE' : 'MENU'}
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
        </ul>
      )}
    </nav>
  );
}
