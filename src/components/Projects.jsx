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
      id: 3,
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
      image: "https://github.com/MollyMoriJing/sky-take-out/raw/main/assert/%E5%B7%A5%E4%BD%9C%E5%8F%B0.png",
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
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="project-card animate-on-scroll"
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="timeline-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <button 
                    className="project-btn primary"
                    onClick={() => openProjectModal(project)}
                  >
                    View Details
                  </button>
                  {project.github && (
                    <button 
                      className="project-btn secondary"
                      onClick={(e) => handleLinkClick(project.github, e)}
                    >
                      <span>🔗</span> GitHub
                    </button>
                  )}
                  {project.demo && (
                    <button 
                      className="project-btn tertiary"
                      onClick={(e) => handleLinkClick(project.demo, e)}
                    >
                      <span>🚀</span> Live Demo
                    </button>
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
                <div className="timeline-tech">
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
          padding: 100px 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(108, 100, 255, 0.2);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-10px);
          background: rgba(144, 100, 255, 0.1);
          border-color:rgb(121, 100, 255);
          box-shadow: 0 20px 40px rgba(121, 100, 255, 0.2);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(192, 132, 252, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-content {
          padding: 2rem;
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .project-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .project-btn.large {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        }

        .project-btn.primary {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: #0f0f23;
        }

        .project-btn.secondary {
          background: transparent;
          color: #9333ea;
          border: 1px solid rgba(147, 51, 234, 0.5);
        }

        .project-btn.tertiary {
          background: rgba(147, 51, 234, 0.1);
          color: #c084fc;
          border: 1px solid rgba(147, 51, 234, 0.3);
        }

        .project-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(147, 51, 234, 0.3);
        }

        .project-modal {
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 20px;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .modal-image-container {
          height: 300px;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }

        .modal-project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-project-content {
          padding: 2rem;
        }

        .modal-project-title {
          color:rgb(152, 100, 255);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .modal-project-details {
          color: #e0e0e0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
        }

        .features-list li {
          color:rgb(224, 224, 224);
          padding: 0.25rem 0;
          padding-left: 1rem;
          position: relative;
        }

        .features-list li::before {
          content: '✓';
          color:rgb(141, 100, 255);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .project-actions {
            flex-direction: column;
          }

          .project-btn {
            width: 100%;
            justify-content: center;
          }

          .modal-project-content {
            padding: 1.5rem;
          }

          .modal-actions {
            flex-direction: column;
          }

          .project-btn.large {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;