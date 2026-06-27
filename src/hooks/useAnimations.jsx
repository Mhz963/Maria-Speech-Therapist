import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function useScrollAnimation(options = {}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    ...options,
  });

  return { ref, inView };
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function AnimatedSection({ children, className = '', id }) {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
    >
      {children}
    </motion.section>
  );
}

export function StaggerContainer({ children, className = '' }) {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', index = 0 }) {
  return (
    <motion.div className={className} variants={fadeUp} custom={index}>
      {children}
    </motion.div>
  );
}
