import { useState } from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { StaggerContainer, StaggerItem } from '../hooks/useAnimations';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Academic Journey</span>
          <h2 className="section-title">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
        </motion.div>

        <div className="education__layout">
          <StaggerContainer className="education__timeline">
            {education.map((edu, i) => (
              <StaggerItem key={edu.degree} index={i}>
                <button
                  className={`education__item ${activeIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="education__item-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education__item-content">
                    <span className="education__period">{edu.period}</span>
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution}</p>
                  </div>
                  {activeIndex === i && (
                    <motion.div className="education__item-indicator" layoutId="eduIndicator" />
                  )}
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div
            className="education__detail"
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="education__certificate">
              <img src={education[activeIndex].image} alt={education[activeIndex].degree} />
              <div className="education__certificate-overlay">
                <span>Degree Certificate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
