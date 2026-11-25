import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  About,
  Services,
  Experience,
  Education,
  Research,
  Founder,
  Contact,
  Footer,
} from './components/Sections';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Education />
        <Research />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
