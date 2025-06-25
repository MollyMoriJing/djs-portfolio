import { useState, useEffect } from 'react';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const timelineData = [
    {
      id: 1,
      date: "Sep 2023 - Aug 2026 (Expected)",
      title: "M.S. Computer Science / Selected as Research Apprentice",
      company: "Northeastern University • Seattle, WA",
      description: "Pursuing advanced studies in computer science with focus on software engineering, AI/ML. Developing expertise in modern development practices and emerging technologies.",
      technologies: ["Machine Learning", "System Design", "Advanced Algorithms", "Software Architecture"],
      type: "education",
      images: [
        "/northeastern-1.jpg",
        "/northeastern-2.jpg",
        "/northeastern-3.jpg"
      ],
      link: "https://www.northeastern.edu/seattle/"
    },
    {
      id: 2,
      date: "May 2024 - Sep 2024",
      title: "Software Engineer Intern",
      company: "Ylz Information Technology • Hybrid",
      description: "Developed backend components for payment processing systems using Spring Boot. Enhanced performance by 40% through database optimization and implemented Redis caching, reducing API response times by 35%. Built ETL pipelines for millions of records migration.",
      technologies: ["Spring Boot", "PostgreSQL", "Redis", "TypeScript", "Vue.js", "ETL"],
      type: "work",
      images: [
        "/ylz-work-1.jpg",
      ],
      link: "http://www.ylzinfo.com/"
    },
    {
      id: 3,
      date: "Jun 2018 - Mar 2020, Apr 2020 - Jul 2023",
      title: "Engineer (Materials R&D/ Software Engineering / Project Management)",
      company: "NARI Technology • Beijing, China",
      description: "Conducted materials research for power industry, exploring advanced composites for performance and sustainability. Developed internal tools and automation scripts to streamline workflows for production. Engineered projects from inception to completion. Developed a system managing 1,000+ autonomous inspection robots. Implemented secure access using OAuth 2.0, established CI/CD pipelines, and achieved 85% test coverage. Drove quality improvements through agile practices.",
      technologies: ["Materials Science","Research", "Python", "Data Analysis", "Java", "Kafka", "OAuth 2.0", "CI/CD", "JUnit", "JMeter", "Project Management"],
      type: "work",
      images: [
        "/nari-robots-1.jpg",
        "/nari-1.jpg",
        "/nari-system-dashboard.jpg",
        "/nari-2.jpg"
      ],
      link: "http://www.narigroup.com/"
    },
    {
      id: 4,
      date: "Oct 2015 - Sep 2017, Jan 2016 - Apr 2018",
      title: "M.Eng. Materials Science / Research Assistant",
      company: "Tohoku University • Sendai, Japan",
      description: "Conducted experimental research on energy-related nanomaterials, including synthesis, characterization, and performance evaluation. Applied data analysis techniques using Python for processing experimental results and creating predictive models.",
      technologies: ["Nanomaterials", "Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      type: "education",
      images: [
        "/tohoku-1.jpg",
        "/tohoku-graduation.jpg"
      ],
      link: "https://www.tohoku.ac.jp/en/"
    },
    {
      id: 6,
      date: "Sep 2011 - Jul 2015",
      title: "Dual B.S. Materials Physics & Computer Science",
      company: "Taiyuan University of Technology • Taiyuan, China",
      description: "Dual degree program combining materials physics and computer science fundamentals. Built strong foundation in both theoretical physics and programming.",
      technologies: ["Materials Science","Physics","Mathematics", "Computer Science", "C/C++"],
      type: "education",
      images: [
        "/taiyuan-graduation.jpg"
      ],
      link: "https://english.tyut.edu.cn/"
    }
  ];

  const toggleActive = (id, event) => {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
      return;
    }
    if (event.type === 'keydown') {
      event.preventDefault();
    }
    setActiveItem(activeItem === id ? null : id);
  };

  const openModal = (item, event) => {
    event.stopPropagation();
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedItem) {
        closeModal();
      }
      if (selectedItem && selectedItem.images) {
        if (e.key === 'ArrowRight') {
          nextImage();
        }
        if (e.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, currentImageIndex]);

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">My Journey</h2>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div 
              key={item.id}
              className={`timeline-card animate-on-scroll ${activeItem === item.id ? 'active' : ''}`}
              onClick={(e) => toggleActive(item.id, e)}
              onKeyDown={(e) => toggleActive(item.id, e)}
              tabIndex={0}
              role="button"
              aria-label={`Click to highlight ${item.title} at ${item.company}`}
              data-id={item.id}
            >
              <div className="timeline-card-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tech">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="timeline-actions">
                  <button 
                    className="timeline-btn primary"
                    onClick={(e) => openModal(item, e)}
                  >
                    View Details
                  </button>
                  {item.link && (
                    <button 
                      className="timeline-btn secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.link, '_blank');
                      }}
                    >
                      Visit Site
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h3>{selectedItem.title}</h3>
              <p className="modal-company">{selectedItem.company}</p>
              <p className="modal-date">{selectedItem.date}</p>
            </div>
            <div className="modal-body">
              {selectedItem.images && selectedItem.images.length > 0 && (
                <div className="image-gallery">
                  <div className="image-container">
                    <img 
                      src={selectedItem.images[currentImageIndex]} 
                      alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                      className="modal-image"
                    />
                    {selectedItem.images.length > 1 && (
                      <>
                        <button className="image-nav prev" onClick={prevImage}>
                          ‹
                        </button>
                        <button className="image-nav next" onClick={nextImage}>
                          ›
                        </button>
                        <div className="image-indicators">
                          {selectedItem.images.map((_, index) => (
                            <button
                              key={index}
                              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .timeline-section {
          padding: 120px 0 100px;
          position: relative;
        }

        .timeline-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 15px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.5s ease;
          transform: scale(0.95);
          opacity: 0.8;
          position: relative;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 15px;
          height: 15px;
          background: #9333ea;
          border-radius: 50%;
          border: 3px solid #0f0f23;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .timeline-card.active,
        .timeline-card:hover {
          transform: scale(1);
          opacity: 1;
          background: rgba(147, 51, 234, 0.1);
          border-color: #9333ea;
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
        }

        .timeline-card.active::before,
        .timeline-card:hover::before {
          background: #c084fc;
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.8);
          transform: translateY(-50%) scale(1.3);
        }

        .timeline-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .timeline-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .timeline-btn.primary {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: #0f0f23;
        }

        .timeline-btn.secondary {
          background: transparent;
          color: #9333ea;
          border: 1px solid rgba(147, 51, 234, 0.5);
        }

        .timeline-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(147, 51, 234, 0.3);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(5px);
          padding: 2rem;
        }

        .modal-content {
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 20px;
          max-width: 700px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          padding: 2rem;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #9333ea;
          font-size: 2rem;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(147, 51, 234, 0.1);
          transform: rotate(90deg);
        }

        .modal-header h3 {
          color: #9333ea;
          margin-bottom: 0.5rem;
        }

        .modal-company {
          color: #c084fc;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .modal-date {
          color: #9333ea;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .image-gallery {
          margin-bottom: 1rem;
        }

        .image-container {
          position: relative;
          border-radius: 50px;
          overflow: hidden;
        }

        .modal-image {
        width: 100%;
        height: auto;
        max-height: 350px;
        object-fit: contain;
        }

        .image-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .image-nav:hover {
          background: rgba(147, 51, 234, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .image-nav.prev {
          left: 10px;
        }

        .image-nav.next {
          right: 10px;
        }

        .image-indicators {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #9333ea;
          border-color: #9333ea;
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.6);
        }

        .indicator:hover {
          border-color: rgba(147, 51, 234, 0.8);
        }

        .modal-description {
          color: #e0e0e0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .modal-section {
          margin-bottom: 1.5rem;
        }

        .modal-section h4 {
          color: #9333ea;
          margin-bottom: 0.5rem;
        }

        .timeline-date {
          color: #c084fc;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          color: #e0e0e0;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .timeline-company {
          color: #9333ea;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: #e0e0e0;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .timeline-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: rgba(147, 51, 234, 0.2);
          color: #c084fc;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(147, 51, 234, 0.3);
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          color: #e0e0e0;
          margin-bottom: 3rem;
          background: linear-gradient(45deg, #9333ea, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        @media (max-width: 768px) {
          .timeline-container {
            padding: 1rem;
          }

          .timeline-card {
            margin-left: 1rem;
            position: relative;
          }

          .timeline-card::before {
            left: -30px;
          }

          .timeline-actions {
            flex-direction: column;
          }

          .timeline-btn {
            width: 100%;
            text-align: center;
          }

          .modal-content {
            margin: 1rem;
            padding: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        @media (min-width: 769px) {
          .timeline-container {
            grid-template-columns: 1fr;
            position: relative;
          }

          .timeline-container::before {
            content: '';
            position: absolute;
            left: -10px;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(to bottom, #9333ea, #c084fc, #9333ea);
            border-radius: 2px;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;