import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Gallery.css';

// Import gambar sebagai modul supaya ikut diproses & di-hash oleh bundler
// saat build (fix untuk masalah gambar hilang di Vercel/production).
import img1 from '../assets/gallery/1.png';
import img2 from '../assets/gallery/2.png';
import img3 from '../assets/gallery/3.jpeg';
import img4 from '../assets/gallery/4.jpg';
import img5 from '../assets/gallery/5.jpg';
import img6 from '../assets/gallery/6.jpg';

const ITEMS = [
  { id: 'IMG_01', caption: 'Desain UI — Ledger Grid', src: img1 },
  { id: 'IMG_02', caption: 'Behind the scenes — Studio', src: img2 },
  { id: 'IMG_03', caption: 'Wireframe — Kanban Ops', src: img3 },
  { id: 'IMG_04', caption: 'Konsep 3D — Studio Badge', src: img4 },
  { id: 'IMG_05', caption: 'Sketsa awal — Raw Market', src: img5 },
  { id: 'IMG_06', caption: 'Setup meja kerja', src: img6 }
];

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-tile', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%'
        },
        opacity: 0,
        y: 50,
        rotate: -2,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="gallery section">
      <span className="tag">[ 04 / GALLERY ]</span>
      <h2 className="gallery__heading">Visual Log</h2>

      <div className="gallery__grid">
        {ITEMS.map(item => (
          <figure key={item.id} className="gallery-tile">
            <div className="gallery-tile__frame">
              {item.src ? (
                <img src={item.src} alt={item.caption} loading="lazy" />
              ) : (
                <span className="gallery-tile__id">{item.id}</span>
              )}
            </div>
            <figcaption className="gallery-tile__caption">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}