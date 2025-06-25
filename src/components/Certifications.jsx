import { useState } from 'react';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  // Simple certification image cards
  const certificationsData = [
    {
      id: 1,
      image: "/cert-1.jpg", 
      alt: "Professional Certification 1"
    },
    {
      id: 2,
      image: "/cert-2.jpg", 
      alt: "Professional Certification 2"
    },
    {
      id: 3,
      image: "/cert-3.jpg", 
      alt: "Professional Certification 3"
    },
    {
      id: 4,
      image: "/cert-4.jpg",
      alt: "Professional Certification 4"
    }
  ];

  const languagesData = [
    {
      language: "Mandarin Chinese",
      level: "Native",
      flag: "🇨🇳",
      description: "Native speaker with full proficiency in reading, writing, and speaking"
    },
    {
      language: "English",
      level: "Professional (TOEFL 105)",
      flag: "🇺🇸",
      description: "Professional working proficiency, used daily in academic and professional settings"
    },
    {
      language: "Japanese",
      level: "Professional (JLPT N1)",
      flag: "🇯🇵",
      description: "Professional proficiency gained during M.Eng. studies at Tohoku University"
    }
  ];

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Certifications & Publications</h2>
        
        {/* Tab Navigation */}
        <div className="tab-navigation animate-on-scroll">
          <button 
            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'publications' ? 'active' : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            Publications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'patents' ? 'active' : ''}`}
            onClick={() => setActiveTab('patents')}
          >
            Patents
          </button>
          <button 
            className={`tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
            onClick={() => setActiveTab('languages')}
          >
            Languages
          </button>
        </div>

        {/* Content Container - Fixed Height */}
        <div className="content-container">
          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="certifications-grid">
              {certificationsData.map((cert, index) => (
                <div key={cert.id} className="certification-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="graph-roll">
                    <img src={cert.image} alt={cert.alt} />
                    <div className="roll-overlay"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Publications Tab */}
          {activeTab === 'publications' && (
            <div className="publications-container">
              <div className="publications-content">
                <div className="publications-image">
                  <img src="/publications-preview.jpg" alt="Research Publications Preview" />
                </div>
                <div className="link-card">
                  <div className="link-icon">📖</div>
                  <h3>Research Publications</h3>
                  <p>View my published research papers and academic contributions in materials science and engineering</p>
                  <button 
                    className="external-btn"
                    onClick={() => handleExternalLink('https://scholar.google.com/citations?user=zVL41nEAAAAJ&hl=en')}
                  >
                    View on Google Scholar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Patents Tab */}
          {activeTab === 'patents' && (
            <div className="external-link-container">
              <div className="link-card">
                <div className="link-icon">🖊️</div>
                <h3>Patent</h3>
                <p>Explore my patent applications and granted inventions</p>
                <button 
                  className="external-btn"
                  onClick={() => handleExternalLink('https://patents.google.com/?inventor=%E6%9D%9C%E5%A9%A7,Jing&assignee=%E5%8C%97%E4%BA%AC%E5%9B%BD%E7%94%B5%E5%AF%8C%E9%80%9A%E7%A7%91%E6%8A%80%E5%8F%91%E5%B1%95%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8')}
                >
                  View on Google Patents
                </button>
              </div>
            </div>
          )}

          {/* Languages Tab */}
          {activeTab === 'languages' && (
            <div className="languages-grid">
              {languagesData.map((lang, index) => (
                <div key={index} className="language-card">
                  <div className="lang-header">
                    <span className="lang-flag">{lang.flag}</span>
                    <div>
                      <h3 className="lang-name">{lang.language}</h3>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                  </div>
                  <p className="lang-description">{lang.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .certifications-section {
          padding: 120px 0 100px;
          position: relative;
          background: rgba(147, 51, 234, 0.05);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
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

        .tab-navigation {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 0.75rem 1.5rem;
          background: transparent;
          color: #e0e0e0;
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .tab-btn.active,
        .tab-btn:hover {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          border-color: transparent;
        }

        .content-container {
          min-height: 400px;
          width: 100%;
          display: block;
          overflow: visible;
          position: relative;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .certification-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.5s ease;
          aspect-ratio: 4/3;
          position: relative;
          cursor: pointer;
          animation: rollIn 0.8s ease-out forwards;
          opacity: 0;
          transform: translateX(-100%) rotateZ(-180deg);
        }

        @keyframes rollIn {
          0% {
            opacity: 0;
            transform: translateX(-100%) rotateZ(-180deg) scale(0.1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-20%) rotateZ(-90deg) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateZ(0deg) scale(1);
          }
        }

        .graph-roll {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 15px;
        }

        .graph-roll img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }

        .roll-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.8) 50%, transparent 100%);
          transition: all 0.5s ease;
          opacity: 0;
        }

        .certification-card:hover {
          transform: translateY(-10px) scale(1.05);
          background: rgba(147, 51, 234, 0.1);
          border-color: #9333ea;
          box-shadow: 0 25px 50px rgba(147, 51, 234, 0.3);
        }

        .certification-card:hover .graph-roll img {
          transform: scale(1.1);
        }

        .certification-card:hover .roll-overlay {
          left: 100%;
          opacity: 1;
          animation: paperRoll 0.8s ease-in-out;
        }

        @keyframes paperRoll {
          0% {
            left: -100%;
            transform: scaleX(0);
          }
          50% {
            left: 25%;
            transform: scaleX(1);
          }
          100% {
            left: 100%;
            transform: scaleX(0);
          }
        }

        .publications-container {
          width: 100%;
          min-height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .publications-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 700px;
          width: 100%;
          align-items: center;
        }

        .publications-image {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 15px;
          overflow: hidden;
          aspect-ratio: x/4;
          transition: all 0.3s ease;
        }

        .publications-image:hover {
          transform: translateY(-5px);
          border-color: #9333ea;
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
        }

        .publications-image img {
          width: 100%;
          height: 100%;
          object-position: center top;
          object-fit: fill;
        }

        .external-link-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 200px;
        }

        .link-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          height: fit-content;
          max-width: 350px;
        }

        .link-card:hover {
          transform: translateY(-5px);
          background: rgba(147, 51, 234, 0.1);
          border-color: #9333ea;
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
        }

        .link-icon {
          font-size: 2.5rem;
          margin-bottom: 0.8rem;
        }

        .link-card h3 {
          color: #9333ea;
          margin-bottom: 0.8rem;
          font-size: 1.3rem;
        }

        .link-card p {
          color: #e0e0e0;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .external-btn {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .external-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.4);
        }

        .languages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          min-height: 200px;
          align-content: start;
        }

        .language-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .language-card:hover {
          transform: translateY(-5px);
          background: rgba(147, 51, 234, 0.1);
          border-color: #9333ea;
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
        }

        .lang-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .lang-flag {
          font-size: 2rem;
        }

        .lang-name {
          color: #9333ea;
          margin: 0;
          font-size: 1.2rem;
        }

        .lang-level {
          color: #c084fc;
          font-weight: 600;
        }

        .lang-description {
          color: #e0e0e0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .tab-navigation {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }

          .tab-btn {
            width: 180px;
            text-align: center;
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }

          .certifications-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
          }

          .certification-card {
            aspect-ratio: 3/2;
          }

          .link-card {
            padding: 1.5rem;
            margin: 0;
          }

          .link-card h3 {
            font-size: 1.2rem;
          }

          .link-card p {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .content-container {
            min-height: auto;
            padding-bottom: 2rem;
          }

          .languages-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            min-height: auto;
          }

          .language-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;