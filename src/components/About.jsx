import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import './About.css';

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const STATS = [
    { value: '3+', label: t('about.stats.experience') },
    { value: '10+', label: t('about.stats.projects') },
    { value: '3+', label: t('about.stats.clients') },
    { value: '100%', label: t('about.stats.prayers') }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about__reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });

      gsap.from('.about__stat', {
        scrollTrigger: {
          trigger: '.about__stats',
          start: 'top 80%'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about section">
      <span className="tag about__reveal">{t('about.tag')}</span>

      <div className="about__body">
        <h2 className="about__reveal about__heading">
          {t('about.headingLine1')}
          <br />
          {t('about.headingLine2')}
        </h2>

        <div className="about__reveal about__text">
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
        </div>
      </div>

      <div className="about__stats">
        {STATS.map(stat => (
          <div key={stat.label} className="about__stat">
            <span className="about__stat-value">{stat.value}</span>
            <span className="about__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
