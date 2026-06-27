import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { StaggerContainer, StaggerItem } from '../hooks/useAnimations';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineDownload } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to collaborations in special education research, speech therapy, and inclusive teaching initiatives.
          </p>
        </motion.div>

        <motion.div
          className="contact__grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <StaggerContainer className="contact__cards">
            {[
              { icon: <HiOutlineMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <HiOutlinePhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
              { icon: <HiOutlineLocationMarker />, label: 'Location', value: personalInfo.location },
              { icon: <FaGraduationCap />, label: 'Institution', value: personalInfo.institution },
            ].map((item, i) => (
              <StaggerItem key={item.label} index={i}>
                <div className="contact__card">
                  <span className="contact__card-icon">{item.icon}</span>
                  <small>{item.label}</small>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="contact__cta">
            <div className="contact__cta-inner">
              <h3>Interested in working together?</h3>
              <p>
                Whether it's research collaboration, consultation in speech therapy, or special education outreach — I'd love to hear from you.
              </p>
              <div className="contact__cta-actions">
                <a className="btn btn--primary" href={`mailto:${personalInfo.email}`}>
                  <HiOutlineMail /> Send Email
                </a>
                <a className="btn btn--outline" href={personalInfo.cvUrl} download>
                  <HiOutlineDownload /> Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Maria Anayat</span>
          <p>Special Education · Hearing Impairment · Speech Therapy</p>
        </div>
        <div className="footer__links">
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <span>{personalInfo.phone}</span>
        </div>
        <p className="footer__copy">
          &copy; {year} Maria Anayat. Crafted with dedication to inclusive education.
        </p>
      </div>
    </footer>
  );
}
