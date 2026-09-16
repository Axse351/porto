import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

import img1 from '../assets/gallery/1.png';
import img2 from '../assets/gallery/2.png';
import img3 from '../assets/gallery/3.jpeg';

const ITEMS_META = [
  { key: 'img1', id: 'IMG_01', src: img1 },
  { key: 'img2', id: 'IMG_02', src: img2 },
  { key: 'img3', id: 'IMG_03', src: img3 }
];

export default function Gallery() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const ITEMS = ITEMS_META.map(meta => ({
    ...meta,
    caption: t(`gallery.items.${meta.key}`)
  }));

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
      <span className="tag">{t('gallery.tag')}</span>
      <h2 className="gallery__heading">{t('gallery.heading')}</h2>

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
