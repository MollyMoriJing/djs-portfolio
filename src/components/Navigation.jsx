import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'timeline', label: 'Journey', href: '#timeline' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'certifications', label: 'Certifications & Publications', href: '#certifications' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
            Jing Du
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(147, 51, 234, 0.2);
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand a {
          font-size: 1.5rem;
          font-weight: 700;
          color: #9333ea;
          text-decoration: none;
          background: linear-gradient(45deg, #9333ea, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: #e0e0e0;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #9333ea;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #9333ea, #c084fc);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .burger-line {
          width: 25px;
          height: 3px;
          background: #9333ea;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }

        .burger-line.open:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .burger-line.open:nth-child(2) {
          opacity: 0;
        }

        .burger-line.open:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(15, 15, 35, 0.98);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(147, 51, 234, 0.2);
          flex-direction: column;
          padding: 1rem 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          display: none;
        }

        .mobile-menu.open {
          max-height: 400px;
          display: flex;
        }

        .mobile-nav-link {
          color: #e0e0e0;
          text-decoration: none;
          padding: 1rem 2rem;
          font-weight: 500;
          border-left: 3px solid transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #9333ea;
          background: rgba(147, 51, 234, 0.1);
          border-left-color: #9333ea;
        }

        @media (max-width: 1024px) {
          .nav-menu {
            gap: 1rem;
          }
          
          .nav-link {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .mobile-menu {
            display: none;
          }

          .mobile-menu.open {
            display: flex;
          }

          .nav-container {
            padding: 1rem;
          }

          .nav-brand a {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0.8rem 1rem;
          }

          .nav-brand a {
            font-size: 1.2rem;
          }

          .mobile-nav-link {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;