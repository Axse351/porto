import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Contact.css';

const SOCIALS = [
  { label: 'Email', value: 'axsenathanzx@gmail.com', href: 'mailto:axsenathanzx@gmail.com' },
  { label: 'GitHub', value: '@Axse351', href: 'https://github.com/Axse351' },
  { label: 'LinkedIn', value: '/in/Yonatan _', href: 'https://www.linkedin.com/in/yonatan-981686239/' },
  { label: 'Instagram', value: '@Yonatan351', href: 'https://instagram.com/Yonatan351' }
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact__reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Hook this up to your backend / form service (Formspree, Resend, dll).
    setSent(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="contact section">
      <span className="tag tag--acid contact__reveal">[ 05 / CONTACT ]</span>
      <h2 className="contact__heading contact__reveal">
        Mari Buat
        <br />
        Sesuatu Bareng.
      </h2>

      <div className="contact__body">
        <form className="contact__form contact__reveal" onSubmit={handleSubmit}>
          <label className="contact__field">
            <span>Nama</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Nama lengkap"
            />
          </label>

          <label className="contact__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="nama@email.com"
            />
          </label>

          <label className="contact__field">
            <span>Pesan</span>
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Ceritakan project-mu..."
            />
          </label>

          <button type="submit" className="btn btn--fill">
            {sent ? 'Terkirim ✓' : 'Kirim Pesan'}
          </button>
        </form>

        <div className="contact__socials contact__reveal">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact__social">
              <span className="contact__social-label">{s.label}</span>
              <span className="contact__social-value">{s.value}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="contact__footer contact__reveal">
        <span>© {new Date().getFullYear()} Yonatan_DEV — awo &amp; :p nyari apa si mas</span>
        <a href="#home">↑ Kembali ke atas</a>
      </footer>
    </section>
  );
}
