import { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { StaggerContainer, StaggerItem } from '../hooks/useAnimations';
import { FaCertificate } from 'react-icons/fa';

function openCertificate(file) {
  window.open(`${file}#toolbar=1&navpanes=0&zoom=100`, '_blank', 'noopener,noreferrer');
}

function CertificatePreview({ cert }) {
  const overlay = (
    <>
      <img src={cert.image} alt={cert.title} loading="lazy" decoding="async" />
      <div className="education__certificate-overlay">
        <span>{cert.title}</span>
      </div>
    </>
  );

  if (cert.type === 'pdf' && cert.file) {
    return (
      <button
        type="button"
        className="education__certificate education__certificate--clickable"
        onClick={() => openCertificate(cert.file)}
        aria-label={`Open ${cert.title} PDF`}
      >
        {overlay}
      </button>
    );
  }

  return <div className="education__certificate">{overlay}</div>;
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {active.image ? (
              <CertificatePreview cert={active} />
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
