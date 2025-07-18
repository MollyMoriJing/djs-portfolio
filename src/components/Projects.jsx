import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "AI-Powered Healthcare Search System",
      description: "This project addresses the challenge of finding appropriate healthcare providers by leveraging AI to interpret symptoms and match them with relevant medical specialties. The system processes natural language queries and provides personalized recommendations based on location and specific medical needs.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "OpenAI API", "AWS"],
      github: "https://github.com/MollyMoriJing/ai-healthcare-search",
      //demo: "https://healthcare-search-demo.vercel.app",
      image: "/health.jpg",
      details: "This project addresses the challenge of finding appropriate healthcare providers by leveraging AI to interpret symptoms and match them with relevant medical specialties. The system processes natural language queries and provides personalized recommendations based on location and specific medical needs.",
      features: ["Natural language symptom processing", "Real-time provider matching", "Insurance integration", "AWS auto-scaling deployment"]
    },
    {
      id: 2,
      title: "Mental Wellness Assistant",
      description: "Created a conversational platform using Flask and OpenAI API with Pinecone vector storage. Implemented hybrid recommendation system achieving 90% beta user satisfaction through BM25 keyword search and semantic similarity.",
      technologies: ["Python", "Flask", "MySQL", "React", "Pinecone", "OpenAI API"],
      github: "https://github.com/MollyMoriJing/mental-wellness--assistant",
      // demo: "https://mental-wellness-demo.netlify.app",
      image: "/Mental.jpg",
      details: "A comprehensive mental wellness platform that provides personalized mindfulness exercises, mood tracking, and AI-powered conversations. The system uses advanced vector storage to maintain conversation context and provide relevant psychological resources.",
      features: ["AI-powered conversations", "Mood tracking dashboard", "Personalized exercise recommendations", "90% user satisfaction rate"]
    },
    {
      id: 3,
      title: "Machine-Generated Content Detection",
      description: "Developed ML classifier using ensemble methods and transformer-based DistilRoBERTa achieving 99.3% accuracy on 122,000 samples. Implemented comprehensive feature engineering pipeline with TF-IDF vectorization and linguistic analysis.",
      technologies: ["Python", "Scikit-learn", "DistilRoBERTa", "NLTK", "Pandas", "NumPy"],
      github: "https://github.com/MollyMoriJing/MUGC_Detact_Reddit",
      //demo: "https://content-detection-demo.streamlit.app",
      image: "/MUGC.jpg",
      details: "Advanced machine learning system for detecting AI-generated text content. The model combines traditional NLP techniques with state-of-the-art transformer architectures to achieve exceptional accuracy in distinguishing human-written from machine-generated content.",
      features: ["99.3% accuracy rate", "Ensemble learning approach", "Real-time detection API", "Comprehensive linguistic analysis"]
    },
    {
      id: 4,
      title: "AI Vision Studio - Eyes for the Blind",
      description: "Comprehensive assistive technology platform serving as 'digital eyes' for blind and visually impaired users. Combines real-time computer vision, advanced OCR, and intelligent text-to-speech synthesis with 10 specialized analysis modes.",
      technologies: ["JavaScript", "Python", "Flask", "HuggingFace Transformers", "SmolVLM",  "WebRTC", "Web Speech API", "Canvas API","ARIA/WCAG 2.1"],
      github: "https://github.com/MollyMoriJing/let-me-take-a-look",
      //demo: "https://ai-vision-studio.netlify.app",
      image: "/AIVision.jpg",
      details: "Accessibility platform that transforms visual information into detailed audio descriptions for blind users. Features real-time camera analysis using state-of-the-art SmolVLM transformer models, comprehensive OCR text reading, voice-controlled navigation, and intelligent scene understanding. Implements complete WCAG 2.1 AAA compliance with keyboard-only navigation, screen reader optimization, and offline PWA capabilities.",
      features: [
        "10 specialized AI analysis modes (navigation, shopping, document reading, etc.)",
        "Advanced OCR text reading with structured output", 
        "Complete keyboard accessibility with 15+ shortcuts",
        "Voice feedback system with customizable speech controls",
        "Mobile-optimized with touch accessibility"
      ]
    },
    {
      id: 5,
      title: "Sky Take-Out",
      description: "A full-stack food delivery system developed for learning purposes, using Spring Boot, MyBatis, Vue.js, and WeChat Mini Program. Implements order management, menu browsing, user authentication, and real-time notifications.",
      technologies: ["Java", "Spring Boot", "MyBatis", "Vue.js", "WeChat Mini Program", "MySQL", "Redis", "Nginx"],
      github: "https://github.com/MollyMoriJing/sky-take-out",
      image: "/Skytakeout.jpg",
      details: "This project simulates a real-world restaurant ordering platform with an admin panel, user interface, and mini program. Focuses on backend RESTful APIs, frontend UI/UX, and integration with cloud services for storage and payment simulation.",
      features: [
        "Admin panel with employee and menu management",
        "User shopping cart and order checkout",
        "WeChat Mini Program login and order tracking",
        "Real-time order notifications with WebSocket"
      ]
    },
    {
      id: 6,
      title: "Search Ads Web Service",
      description: "Designed and developed comprehensive search advertising web service with Amazon product crawler and complete ads workflow. Built query understanding, inverted index-based ad selection, ranking algorithms, and ML-powered click prediction using Word2Vec and Spark MLlib.",
      technologies: ["Java", "Python", "JSoup", "Jetty", "MySQL", "MemCached", "Spark MLlib", "Word2Vec"],
      github: "https://github.com/MollyMoriJing/Ads",
      //demo: "https://search-ads-demo.herokuapp.com",
      image: "/image-1.jpg",
      details: "Full-stack search advertising platform that crawls product data from Amazon and implements complete ad serving pipeline. Features intelligent query processing, machine learning-based click prediction, and automated ad ranking with real-time serving capabilities.",
      features: [
        "Web crawler for thousands of E-commerce product data using JSoup and proxy rotation",
        "Complete search ads workflow: query understanding → ad selection → ranking → filtering → pricing → allocation",
        "Inverted index-based ad selection and retrieval system",
        "Click probability prediction using features from simulated search logs",
        "Word2Vec-powered query rewriting for semantic understanding",
        "High-performance web service using Jetty and MemCached",
        "ML pipeline with Spark MLlib for scalable model training",
        "End-to-end ad serving with MySQL backend"
      ]
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleLinkClick = (url, event) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <button 
                      className="overlay-btn primary"
                      onClick={() => openProjectModal(project)}
                    >
                      <span>👁️</span> View Details
                    </button>
                    {project.github && (
                      <button 
                        className="overlay-btn secondary"
                        onClick={(e) => handleLinkClick(project.github, e)}
                      >
                        <span>🔗</span> GitHub
                      </button>
                    )}
                    {project.demo && (
                      <button 
                        className="overlay-btn tertiary"
                        onClick={(e) => handleLinkClick(project.demo, e)}
                      >
                        <span>🚀</span> Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image-container">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="modal-project-image"
              />
            </div>
            <div className="modal-project-content">
              <h3 className="modal-project-title">{selectedProject.title}</h3>
              <p className="modal-project-details">{selectedProject.details}</p>
              
              <div className="modal-section">
                <h4>Key Features</h4>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="modal-tech-grid">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.github && (
                  <button 
                    className="project-btn secondary large"
                    onClick={(e) => handleLinkClick(selectedProject.github, e)}
                  >
                    <span>🔗</span> View on GitHub
                  </button>
                )}
                {selectedProject.demo && (
                  <button 
                    className="project-btn primary large"
                    onClick={(e) => handleLinkClick(selectedProject.demo, e)}
                  >
                    <span>🚀</span> Live Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-section {
          padding: 120px 0 100px;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%);
          position: relative;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
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
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(45deg, #9333ea, #c084fc);
          border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(147, 51, 234, 0.15);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(192, 132, 252, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: 20px;
        }

        .project-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: rgba(147, 51, 234, 0.4);
          box-shadow: 
            0 25px 50px rgba(147, 51, 234, 0.15),
            0 0 0 1px rgba(147, 51, 234, 0.1);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-image {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(192, 132, 252, 0.1));
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease;
          filter: brightness(0.9) contrast(1.1);
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
          filter: brightness(1.1) contrast(1.2);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg, 
            rgba(147, 51, 234, 0.85) 0%, 
            rgba(192, 132, 252, 0.85) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        .overlay-btn {
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 130px;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .overlay-btn.primary {
          background: rgba(255, 255, 255, 0.9);
          color: #9333ea;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .overlay-btn.secondary {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .overlay-btn.tertiary {
          background: rgba(147, 51, 234, 0.9);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .overlay-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .project-content {
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .project-title {
          color: #e0e0e0;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .project-description {
          color: rgba(224, 224, 224, 0.85);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(192, 132, 252, 0.2));
          color: #c084fc;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(147, 51, 234, 0.3);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(192, 132, 252, 0.3));
          color: #e0e0e0;
          transform: translateY(-1px);
        }

        .tech-tag.more {
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.4), rgba(192, 132, 252, 0.4));
          color: #ffffff;
          font-weight: 600;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(8px);
          padding: 2rem;
        }

        .project-modal {
          background: linear-gradient(145deg, rgba(15, 15, 35, 0.95), rgba(25, 25, 45, 0.95));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 25px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(147, 51, 234, 0.2);
          border: 1px solid rgba(147, 51, 234, 0.4);
          color: #9333ea;
          font-size: 1.8rem;
          cursor: pointer;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(147, 51, 234, 0.4);
          color: #ffffff;
          transform: rotate(90deg) scale(1.1);
        }

        .modal-image-container {
          height: 280px;
          overflow: hidden;
          border-radius: 25px 25px 0 0;
          position: relative;
        }

        .modal-project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(1.1) contrast(1.1);
        }

        .modal-project-content {
          padding: 2.5rem;
          padding-top: 2rem;
        }

        .modal-project-title {
          color: #e0e0e0;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          font-weight: 600;
        }

        .modal-project-details {
          color: rgba(224, 224, 224, 0.9);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .modal-section {
          margin-bottom: 2rem;
        }

        .modal-section h4 {
          color: #9333ea;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          color: rgba(224, 224, 224, 0.9);
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .features-list li::before {
          content: '✨';
          position: absolute;
          left: 0;
          color: #9333ea;
          font-weight: bold;
        }

        .modal-tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .project-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-btn.large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .project-btn.primary {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          border: 2px solid transparent;
        }

        .project-btn.secondary {
          background: transparent;
          color: #9333ea;
          border: 2px solid rgba(147, 51, 234, 0.5);
        }

        .project-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.4);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .project-card {
            margin: 0 auto;
            max-width: 400px;
          }

          .section-title {
            font-size: 2rem;
          }

          .modal-project-content {
            padding: 2rem 1.5rem;
          }

          .modal-actions {
            flex-direction: column;
            align-items: center;
          }

          .project-btn.large {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }

          .overlay-content {
            gap: 0.5rem;
          }

          .overlay-btn {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
            min-width: 120px;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 0.5rem;
          }

          .project-content {
            padding: 1.5rem;
          }

          .modal-project-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;