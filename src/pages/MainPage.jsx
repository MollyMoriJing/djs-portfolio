import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const MainPage = () => {
  return (
    <div className="main-page">
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      
      <style jsx>{`
        .main-page {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default MainPage;