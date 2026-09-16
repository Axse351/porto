import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import './Projects.css';

// Data yang TIDAK diterjemahkan (id, year, stack teknologi) tetap di sini
const PROJECTS_META = [
  { key: 'genmim', id: '01', year: '2026', stack: 'React · Flutter · SQL · Firebase' },
  { key: 'hrisMobile', id: '02', year: '2025', stack: 'Flutter · GSAP · Chart.js' },
  { key: 'gasbaee', id: '03', year: '2025', stack: null }, // stack diterjemahkan, lihat di bawah
  { key: 'posCaffee', id: '04', year: '2025', stack: 'Flutter · SQLite' }
];

export default function Projects() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const PROJECTS = PROJECTS_META.map(meta => ({
    ...meta,
    title: t(`projects.items.${meta.key}.title`),
    desc: t(`projects.items.${meta.key}.desc`),
    // "gasbaee" punya field stack yang diterjemahkan (industri kreatif / creative industry / クリエイティブ業界)
    stack: meta.stack ?? t(`projects.items.${meta.key}.stack`)
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%'
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects section">
      <span className="tag tag--siren">{t('projects.tag')}</span>
      <h2 className="projects__heading">{t('projects.heading')}</h2>

      <div className="projects__grid">
        {PROJECTS.map(project => (
          <article key={project.id} className="project-card">
            <div className="project-card__top">
              <span className="project-card__id">{project.id}</span>
              <span className="project-card__year">{project.year}</span>
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.desc}</p>
            <div className="project-card__footer">
              <span className="project-card__stack">{project.stack}</span>
              <span className="project-card__arrow" aria-hidden="true">
                →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
