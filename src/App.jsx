import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Research from './components/Research';
import Gallery from './components/Gallery';
import Contact, { Footer } from './components/Contact';
import Preloader, { ScrollToTop } from './components/Preloader';

export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Certifications />
        <Research />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
