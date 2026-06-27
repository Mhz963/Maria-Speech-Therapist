import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { StaggerContainer, StaggerItem } from '../hooks/useAnimations';
import {
  FaGraduationCap,
  FaHands,
  FaMicrophone,
  FaFlask,
  FaRobot,
  FaUsers,
  FaLaptopMedical,
  FaPenFancy,
  FaBrain,
  FaChalkboardTeacher,
} from 'react-icons/fa';

const iconMap = {
  education: FaGraduationCap,
  sign: FaHands,
  speech: FaMicrophone,
  research: FaFlask,
  ai: FaRobot,
  inclusive: FaUsers,
  tech: FaLaptopMedical,
  writing: FaPenFancy,
  memory: FaBrain,
  classroom: FaChalkboardTeacher,
};

function SkillBar({ skill, index }) {
  const Icon = iconMap[skill.icon] || FaGraduationCap;

  return (
    <StaggerItem index={index} className="skill-card">
      <div className="skill-card__header">
        <span className="skill-card__icon">
          <Icon />
        </span>
        <span className="skill-card__name">{skill.name}</span>
        <span className="skill-card__level">{skill.level}%</span>
      </div>
      <div className="skill-card__bar">
        <motion.div
          className="skill-card__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </StaggerItem>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills__bg-pattern" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            A multidisciplinary skill set built through academic excellence, clinical practice, and classroom leadership.
          </p>
        </motion.div>

        <StaggerContainer className="skills__grid">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
