import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { HiOutlineDownload, HiOutlineMail } from 'react-icons/hi';
import { FaHands } from 'react-icons/fa';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero__gradient" />
      <div className="hero__rings">
        <div className="hero__ring hero__ring--1" />
        <div className="hero__ring hero__ring--2" />
        <div className="hero__ring hero__ring--3" />
      </div>

      <div className="hero__content container">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FaHands />
            <span>Special Education & Hearing Impairment</span>
          </motion.div>

          <motion.p className="hero__greeting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Maria <span className="text-gradient">Anayat</span>
          </motion.h1>

          <motion.p
            className="hero__designation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {personalInfo.designation}
          </motion.p>

          <motion.h2
            className="hero__title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button className="btn btn--primary" onClick={() => scrollTo('contact')}>
              <HiOutlineMail /> Get In Touch
            </button>
            <a className="btn btn--outline" href={personalInfo.cvUrl} download>
              <HiOutlineDownload /> Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__image-glow" />
          <div className="hero__image-frame">
            <img src="/images/personal/profile.jpeg?v=2" alt="Maria Anayat" className="hero__image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
