import { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { StaggerContainer, StaggerItem } from '../hooks/useAnimations';
import { FaCertificate } from 'react-icons/fa';

function openCertificate(file) {
  window.open(`${file}#toolbar=1&navpanes=0&zoom=100`, '_blank', 'noopener,noreferrer');
}

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = certifications[activeIndex];

  return (
    <section id="certifications" className="section education certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Credentials</span>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
        </motion.div>

        <div className="education__layout certifications__layout">
          <StaggerContainer className="education__timeline certifications__timeline">
            {certifications.map((cert, i) => (
              <StaggerItem key={cert.title} index={i}>
                <button
                  className={`education__item ${activeIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="education__item-icon">
                    <FaCertificate />
                  </div>
                  <div className="education__item-content">
                    <span className="education__period">{cert.date}</span>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                  </div>
                  {activeIndex === i && (
                    <motion.div className="education__item-indicator" layoutId="certIndicator" />
                  )}
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div
            className="education__detail certifications__detail"
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {active.type === 'pdf' && active.file ? (
              <button
                type="button"
                className="education__certificate education__certificate--pdf"
                onClick={() => openCertificate(active.file)}
                aria-label={`View ${active.title} in new tab`}
              >
                <iframe
                  src={`${active.file}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&view=FitH`}
                  title={active.title}
                  className="cert-pdf__iframe"
                  tabIndex={-1}
                />
                <div className="education__certificate-overlay">
                  <span>Training Certificate</span>
                </div>
              </button>
            ) : active.type === 'image' && active.image ? (
              <div className="education__certificate">
                <img src={active.image} alt={active.title} />
                <div className="education__certificate-overlay">
                  <span>Conference Certificate</span>
                </div>
              </div>
            ) : (
              <div className="education__detail-card">
                <span className="education__period">{active.date}</span>
                <h3>{active.title}</h3>
                <p className="education__detail-org">{active.issuer}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
