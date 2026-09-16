import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import './Contact.css';

// value/href tidak diterjemahkan (data kontak asli), hanya label yang diterjemahkan
const SOCIALS_META = [
  { key: 'email', value: 'axsenathanzx@gmail.com', href: 'mailto:axsenathanzx@gmail.com' },
  { key: 'github', value: '@Axse351', href: 'https://github.com/Axse351' },
  { key: 'linkedin', value: '/in/Yonatan_', href: 'https://www.linkedin.com/in/yonatan-981686239/' },
  { key: 'instagram', value: '@Yonatan351', href: 'https://instagram.com/Yonatan351' }
];

export default function Contact() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const SOCIALS = SOCIALS_META.map(meta => ({
    ...meta,
    label: t(`contact.socials.${meta.key}`)
  }));

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
      <span className="tag tag--acid contact__reveal">{t('contact.tag')}</span>
      <h2 className="contact__heading contact__reveal">
        {t('contact.headingLine1')}
        <br />
        {t('contact.headingLine2')}
      </h2>

      <div className="contact__body">
        <form className="contact__form contact__reveal" onSubmit={handleSubmit}>
          <label className="contact__field">
            <span>{t('contact.form.nameLabel')}</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.form.namePlaceholder')}
            />
          </label>

          <label className="contact__field">
            <span>{t('contact.form.emailLabel')}</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.form.emailPlaceholder')}
            />
          </label>

          <label className="contact__field">
            <span>{t('contact.form.messageLabel')}</span>
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.form.messagePlaceholder')}
            />
          </label>

          <button type="submit" className="btn btn--fill">
            {sent ? t('contact.form.submitted') : t('contact.form.submit')}
          </button>
        </form>

        <div className="contact__socials contact__reveal">
          {SOCIALS.map(s => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="contact__social"
            >
              <span className="contact__social-label">{s.label}</span>
              <span className="contact__social-value">{s.value}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="contact__footer contact__reveal">
        <span>{t('contact.footer.copyright', { year: new Date().getFullYear() })}</span>
        <a href="#home">{t('contact.footer.backToTop')}</a>
      </footer>
    </section>
  );
}
