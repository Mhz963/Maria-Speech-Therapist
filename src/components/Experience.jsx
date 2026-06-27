import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { StaggerContainer, StaggerItem } from '../hooks/useAnimations';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="experience__bg" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Career Path</span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="experience__timeline">
          <div className="experience__line" />
          <StaggerContainer className="experience__cards">
            {experience.map((exp, i) => (
              <StaggerItem key={exp.role + exp.period} index={i}>
                <div className="experience__card">
                  <div className="experience__dot" />
                  <div className="experience__card-header">
                    <span className="experience__type">{exp.type}</span>
                    <span className="experience__period">{exp.period}</span>
                  </div>
                  <div className="experience__card-icon">
                    <FaBriefcase />
                  </div>
                  <h3 className="experience__role">{exp.role}</h3>
                  <p className="experience__org">{exp.organization}</p>
                  <p className="experience__desc">{exp.description}</p>
                  <ul className="experience__highlights">
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
