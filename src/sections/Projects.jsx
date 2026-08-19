import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Projects.css';

const PROJECTS = [
  {
    id: '01',
    title: 'GENMIM',
    year: '2026',
    stack: 'React · Flutter · SQL · Firebase',
    desc: 'Aplikasi web dan mobile untuk memudahkan pengelolaan data umroh atau haji, lengkap dengan fitur manajemen pengguna dan laporan.'
  },
  {
    id: '02',
    title: 'HRIS MOBILE',
    year: '2025',
    stack: 'Flutter · GSAP · Chart.js',
    desc: 'Visualisasi keuangan interaktif dengan animasi transisi data berbasis scroll.'
  },
  {
    id: '03',
    title: 'GASBAEE',
    year: '2025',
    stack: 'creative industry',
    desc: 'tim kreativ perfilman dan konten'
  },
  {
    id: '04',
    title: 'Raw Market',
    year: '2024',
    stack: 'React · Stripe · Vite',
    desc: 'Platform e-commerce dengan tampilan brutalist dan checkout satu halaman.'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);

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
      <span className="tag tag--siren">[ 03 / PROJECT ]</span>
      <h2 className="projects__heading">Selected Work</h2>

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
