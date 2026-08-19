import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Lanyard from '../components/Lanyard/Lanyard.jsx';
import CurvedLoop from '../components/CurvedLoop/CurvedLoop.jsx';
import './Home.css';

export default function Home() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const lines = titleRef.current.querySelectorAll('.hero__line');
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      tagRef.current,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        lines,
        { yPercent: 120 },
        { yPercent: 0, duration: 0.9, stagger: 0.08 },
        '-=0.15'
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="hero__grid">
        <div className="hero__text">
          <span ref={tagRef} className="tag tag--acid">
            [ 01 / HOME ]
          </span>

          <h1 ref={titleRef} className="hero__title">
            <span className="hero__line-wrap">
              <span className="hero__line">FULL&nbsp;STACK</span>
            </span>
            <span className="hero__line-wrap">
              <span className="hero__line hero__line--outline">DEVELOPER</span>
            </span>
            <span className="hero__line-wrap">
              <span className="hero__line">&amp;&nbsp;DESIGNER</span>
            </span>
          </h1>

          <p ref={subRef} className="hero__sub">
            Saya merancang dan membangun produk digital dengan kode yang
            bersih dan tampilan yang berani. Tarik kartu ID di samping, itu
            saya, secara harfiah.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--fill">
              Lihat Project
            </a>
            <a href="#contact" className="btn btn--outline">
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="hero__lanyard">
          <Lanyard position={[0, 0, 22]} gravity={[0, -40, 0]} lanyardWidth={1} />
          <span className="hero__lanyard-hint">↻ SERET KARTUNYA</span>
        </div>
      </div>

      <CurvedLoop
        marqueeText="WEB · FULL STACK · PREMIER PRO · REACT · LARAVEL ·"
        speed={1.4}
        curveAmount={40}
        waves={3}
        direction="left"
        interactive={false}
        className="curved-loop-text"
      />
    </section>
  );
}