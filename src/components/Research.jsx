import { motion } from 'framer-motion';
import { conferences, honors } from '../data/portfolio';
import { StaggerContainer, StaggerItem } from '../hooks/useAnimations';
import { FaAward, FaMicrophone } from 'react-icons/fa';

const researchItems = [
  ...honors.map((honor) => ({
    id: honor.title,
    date: honor.period,
    title: honor.title,
    subtitle: honor.description,
    category: 'Honor & Award',
    icon: 'award',
  })),
  ...conferences.map((conf) => ({
    id: conf.title,
    date: conf.date,
    title: conf.title,
    subtitle: conf.event,
    coAuthors: conf.coAuthors,
    category: 'Conference Presentation',
    icon: 'microphone',
  })),
];

const iconMap = {
  award: FaAward,
  microphone: FaMicrophone,
};

export default function Research() {
  return (
    <section id="research" className="section research">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Academic Contributions</span>
          <h2 className="section-title">
            Research & <span className="text-gradient">Conferences</span>
          </h2>
        </motion.div>

        <StaggerContainer className="research__list">
          {researchItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.id} index={i}>
                <article className="research__item">
                  <div className="research__item-icon">
                    <Icon />
                  </div>
                  <div className="research__item-body">
                    <div className="research__item-meta">
                      <span className="research__item-category">{item.category}</span>
                      <span className="research__item-date">{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="research__item-subtitle">{item.subtitle}</p>
                    {item.coAuthors && (
                      <p className="research__item-authors">Co-authors: {item.coAuthors}</p>
                    )}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
