import { useState, useEffect } from 'react';

const Skills = () => {

  const skillsData = {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C/C++", "HTML/CSS"],
    "Frontend & Backend": ["React", "Vue.js", "Express.js", "Spring Boot", "Flask", "Django"],
    "Database & DevOps": ["MySQL", "PostgreSQL", "Redis", "Docker", "Kubernetes", "CI/CD", "AWS"],
    "AI/ML & Data": ["Scikit-learn", "PyTorch", "TensorFlow", "NLTK", "RAG", "LangChain", "Pinecone"]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div 
              key={index} 
              className="skill-category animate-on-scroll"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <h3>{category}</h3>
              <div className="skill-list">
                {skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="tech-tag"
                    style={{
                      animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 120px 0 100px;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          color: #e0e0e0;
          margin-bottom: 3rem;
          background: linear-gradient(45deg,rgb(140, 62, 213), #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          background: rgba(147, 51, 234, 0.1);
          border-color: #9333ea;
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
        }

        .skill-category h3 {
          color: #9333ea;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 600;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .tech-tag {
          background: rgba(147, 51, 234, 0.2);
          color: #c084fc;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          border: 1px solid rgba(147, 51, 234, 0.3);
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .tech-tag:hover {
          background: rgba(147, 51, 234, 0.3);
          color: #e0e0e0;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(147, 51, 234, 0.3);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .skill-category {
            padding: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
  
export default Skills;