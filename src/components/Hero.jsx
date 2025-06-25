import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2; // 2-6px
        const opacity = Math.random() * 0.6 + 0.4; // 0.4-1.0
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
        `;
        hero.appendChild(particle);
      }
    };

    // Add floating animation styles
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
    `;
    document.head.appendChild(style);

    createParticles();

    // Smooth scroll for CTA button
    const handleCTAClick = (e) => {
      e.preventDefault();
      const target = document.querySelector('#timeline');
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', handleCTAClick);
    }

    return () => {
      if (ctaButton) {
        ctaButton.removeEventListener('click', handleCTAClick);
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
            />
            <div className="profile-ring"></div>
          </div>
          <div className="hero-text">
            <h1>Jing Du</h1>
            <p className="hero-subtitle">Software Engineer & AI Enthusiast</p>
            <div className="hero-intro">
            <p>
              I’m a Master’s student in Computer Science at Northeastern University, passionate about using technology to solve real-world problems and improve lives.
              
              </p>
              <p>With dual Bachelor’s degrees in Materials Physics and Computer Science, plus a Master’s in Material Science, I’ve spent 5 years working across R&D, software development, and project management.
              </p>
              <p>
              Now, I’m ready to return to a hands-on software engineering role, eager to deepen my skills and build impactful solutions. I’m excited to grow as an engineer and make a real difference!
              </p>
            </div>
          </div>
        </div>
        <a href="#contact" className="cta-button fade-in-up">
            Contact Me
        </a>
        <a href="/DJs_resume.pdf" className="cta-button fade-in-up" download>
          Download Resume
        </a>
      </div>

      <style jsx>{`
        .profile-section {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .profile-image-container {
          position: relative;
          width: 200px;
          height: 200px;
          flex-shrink: 0;
          margin-left: 1rem;
          margin-right: 1rem;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(147, 51, 234, 0.3);
          transition: all 0.3s ease;
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
          min-width: 300px;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg,rgb(247, 247, 247),rgb(142, 131, 245));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 1.5rem;
          margin-right: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #e0e0e0;
          margin-left: 1.5rem;
          margin-right: 1.5rem;
        }

        .hero-intro {
          background: rgba(147, 51, 234, 0.1);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          margin-top: 1rem;
          backdrop-filter: blur(10px);
          margin-left: 1.5rem;
          margin-right: 1.5rem;
        }

        .hero-intro p {
          margin: 0 0 1rem 0;
          line-height: 1.6;
          color: #e0e0e0;
          font-size: 0.95rem;
        }

        .hero-intro p:last-child {
          margin-bottom: 0;
        }

        .hero-intro strong {
          color: rgb(156, 132, 252);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .profile-section {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .hero-text {
            text-align: center;
            min-width: unset;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-intro {
            padding: 1.25rem;
          }

          .hero-intro p {
            font-size: 0.9rem;
          }

          .profile-image-container {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .profile-image-container {
            width: 120px;
            height: 120px;
          }

          .hero-text h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;