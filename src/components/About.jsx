import { motion } from 'framer-motion';
import { aboutText } from '../data/portfolio';
import { slideLeft, slideRight } from '../hooks/useAnimations';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header about__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate Educator & <span className="text-gradient">Researcher</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__image-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
          >
            <div className="about__image-stack">
              <div className="about__image-main">
                <img src="/images/professional/1.jpeg" alt="Maria Anayat" loading="lazy" decoding="async" />
              </div>
              <div className="about__experience-badge">
                <span className="about__exp-number">4+</span>
                <span className="about__exp-text">Years of<br />Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
          >
            <p className="about__text">{aboutText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
