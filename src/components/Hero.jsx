import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const createParticles = () => {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      
      const particleCount = window.innerWidth < 768 ? 20 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const opacity = Math.random() * 0.6 + 0.4;
        const colors = [
          'rgba(147, 51, 234, 0.8)',
          'rgba(156, 132, 252, 0.7)',
          'rgba(199, 176, 222, 0.6)',
          'rgba(135, 96, 226, 0.8)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: float ${4 + Math.random() * 6}s ease-in-out infinite;
          animation-delay: ${Math.random() * 3}s;
          z-index: 1;
          box-shadow: 0 0 ${size * 2}px ${color};
          will-change: transform, opacity;
        `;
        hero.appendChild(particle);
      }
    };

    const animateTitle = () => {
      const titleElement = document.querySelector('.hero-text h1');
      const subtitleElement = document.querySelector('.hero-subtitle');
      
      if (titleElement) {
        titleElement.classList.add('title-animate');
      }
      
      if (subtitleElement) {
        setTimeout(() => {
          subtitleElement.classList.add('subtitle-animate');
        }, 1000);
      }
    };

    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { 
          transform: translateY(0px) translateX(0px); 
          opacity: 0.4; 
        }
        25% { 
          transform: translateY(-15px) translateX(10px); 
          opacity: 0.8; 
        }
        50% { 
          transform: translateY(-30px) translateX(-5px); 
          opacity: 1; 
        }
        75% { 
          transform: translateY(-15px) translateX(-10px); 
          opacity: 0.8; 
        }
      }

      @keyframes titleSlideIn {
        0% {
          transform: translateY(-50px) scale(0.8);
          opacity: 0;
        }
        100% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
      }

      @keyframes titleGlow {
        0%, 100% {
          text-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
        }
        50% {
          text-shadow: 0 0 30px rgba(147, 51, 234, 0.8), 0 0 40px rgba(114, 65, 238, 0.6);
        }
      }

      @keyframes subtitleTypewriter {
        0% {
          width: 0;
          opacity: 0;
        }
        1% {
          opacity: 1;
        }
        100% {
          width: 100%;
          opacity: 1;
        }
      }

      @keyframes subtitleGradient {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      @keyframes blink-caret {
        from, to { border-color: transparent; }
        50% { border-color: rgba(147, 51, 234, 0.8); }
      }

      .title-animate {
        animation: titleSlideIn 1s ease-out forwards, titleGlow 3s ease-in-out infinite 1s;
      }

      .subtitle-animate {
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        border-right: 2px solid rgba(147, 51, 234, 0.8);
        animation: 
          subtitleTypewriter 2s steps(35, end) forwards,
          blink-caret 0.75s step-end infinite 2s,
          subtitleGradient 3s ease-in-out infinite 2s;
        background: linear-gradient(45deg, #e0e0e0, #8e83f5, #c7b0de, #9333ea);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .subtitle-animate::after {
        content: '';
        border-right: none;
      }
    `;
    document.head.appendChild(style);

    createParticles();

    setTimeout(animateTitle, 500);

    const handleCTAClick = (e) => {
      if (e.target.closest('.cta-button[href="#contact"]')) {
        e.preventDefault();
        const target = document.querySelector('#contact');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleCTAClick);

    return () => {
      document.removeEventListener('click', handleCTAClick);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="profile-section fade-in-up">
          <div className="profile-image-container">
            <img 
              src="/profile.jpg"
              alt="Jing Du Profile"
              className="profile-image"
              loading="lazy" 
            />
            <div className="profile-ring"></div>
          </div>
          <div className="hero-text">
            <h1>Jing Du</h1>
            <p className="hero-subtitle">Software Engineer & AI Enthusiast</p>
            <div className="hero-intro">
            <p>
              I'm a <strong>Master's student in Computer Science</strong> at <strong>Northeastern University</strong>, driven by a passion for using technology to solve real-world problems and improve lives.
            </p>
            <p>
              With <strong>dual Bachelor's degrees</strong> in <strong>Materials Physics</strong> and <strong>Computer Science</strong>, and a <strong>Master's in Materials Science</strong>, I've spent the past <strong>5 years</strong> working across <strong>Materials R&D</strong>, <strong>software development</strong>, and <strong>project management</strong>.
            </p>
            <p>
              Now, I'm transitioning back to a <strong>hands-on software engineering</strong> role, eager to sharpen my skills and create <strong>meaningful, user-centered solutions</strong>. I'm excited to grow as an engineer and <strong>contribute to work that truly matters</strong>.
            </p>
            </div>
          </div>
        </div>
        <div className="cta-buttons">
          <a href="#contact" className="cta-button fade-in-up">
            Get in Touch
          </a>
          <a href="/DJs_resume.pdf" className="cta-button fade-in-up" download>
            Download Resume
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          padding: clamp(2rem, 8vw, 8rem) clamp(1rem, 5vw, 4rem);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg,rgba(63, 16, 235, 0.17) 0%,rgba(53, 35, 120, 0.45) 100%);
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: clamp(1.5rem, 4vw, 3rem);
          margin-bottom: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .profile-image-container {
          position: relative;
          width: clamp(120px, 20vw, 200px);
          height: clamp(120px, 20vw, 200px);
          flex-shrink: 0;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(147, 51, 234, 0.3);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3);
        }

        .profile-image:hover {
          transform: scale(1.05);
          border-color: rgba(115, 93, 212, 0.67);
          box-shadow: 0 20px 40px rgba(86, 73, 226, 0.4);
        }

        .profile-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(45deg,rgb(239, 232, 245),rgb(199, 176, 222),rgb(135, 96, 226),rgb(114, 65, 238));
          background-size: 300% 300%;
          animation: gradientRotate 4s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes gradientRotate {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-text {
          text-align: left;
          flex: 1;
          min-width: min(100%, 300px);
        }

        .hero-text h1 {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #ffffff, #8e83f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(-50px) scale(0.8);
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.5rem);
          margin-bottom: 1rem;
          color: #e0e0e0;
          opacity: 0;
        }

        .hero-intro {
          background: rgba(109, 103, 219, 0.1);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 16px;
          padding: clamp(1rem, 2vw, 1.5rem);
          margin-top: 1rem;
          backdrop-filter: blur(10px);
        }

        .hero-intro p {
          margin: 0 0 1rem 0;
          line-height: 1.6;
          color: #e0e0e0;
          font-size: clamp(0.85rem, 2vw, 0.95rem);
        }

        .hero-intro p:last-child {
          margin-bottom: 0;
        }

        .hero-intro strong {
          color: rgb(188, 152, 236);
          font-weight: 600;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-block;
          padding: 0.8rem 1.8rem;
          background: linear-gradient(45deg, rgba(108, 72, 239, 0.64), rgba(186, 83, 205, 0.95));
          color: white;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);
          text-align: center;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(173, 96, 245, 0.4);
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.9), rgb(111, 61, 240));
        }

        @media (max-width: 768px) {
          .profile-section {
            flex-direction: column;
            text-align: center;
          }

          .hero-text {
            text-align: center;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding-top: 6rem;
            padding-bottom: 4rem;
          }

          .hero-intro {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;