import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery } from '../data/portfolio';
import { StaggerContainer, StaggerItem } from '../hooks/useAnimations';
import { FaTimes, FaExpand } from 'react-icons/fa';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="section gallery">
      <div className="gallery__mesh" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Moments and Achievements</span>
          <h2 className="section-title">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
        </motion.div>

        <StaggerContainer className="gallery__grid">
          {gallery.map((item, i) => (
            <StaggerItem key={item.src} index={i}>
              <div
                className="gallery__item"
                onClick={() => setLightbox(item)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery__overlay">
                  <FaExpand />
                  <p>{item.caption}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox__close" onClick={() => setLightbox(null)}>
              <FaTimes />
            </button>
            <motion.div
              className="lightbox__content"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} decoding="async" />
              <p>{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
