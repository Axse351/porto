import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './About.css';

const STATS = [
  { value: '3+', label: 'Tahun Pengalaman' },
  { value: '10+', label: 'Project Selesai' },
  { value: '3+', label: 'Klien Aktif' },
  { value: '100%', label: 'doa ibu' }
];

export default function About() {
  const sectionRef = useRef(null);

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
      <span className="tag about__reveal">[ 02 / ABOUT ]</span>

      <div className="about__body">
        <h2 className="about__reveal about__heading">
          Senang Belajar
          <br />
          Dengan Kode dan Desain
        </h2>

        <div className="about__reveal about__text">
          <p>
            Saya developer yang percaya bahwa antarmuka yang jujur lebih baik
            daripada yang cantik tapi kosong. Struktur yang terlihat,
            border yang tegas, dan interaksi yang nyata — itu filosofi kerja
            saya.
          </p>
          <p>
            Fokus saya berada pada web full stack dan juga cross platform. Saya
            juga membangun aplikasi mobile dengan Flutter.
          </p>
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
