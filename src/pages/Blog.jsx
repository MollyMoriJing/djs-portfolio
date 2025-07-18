// src/pages/Blog.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts, getPublishedPosts, getAllCategories } from '../data/blogData';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', ...getAllCategories()];
  const publishedPosts = getPublishedPosts();
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const openPost = (post) => {
    if (post.isPublished) {
      navigate(`/blog/${post.id}`);
    }
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="page">
      <section className="blog-section">
        <div className="container">
          <h1 className="section-title">Blog</h1>
          <p className="blog-intro">
            Thoughts.
          </p>

          {/* Stats */}
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id}
                className={`blog-card ${!post.isPublished ? 'coming-soon' : ''}`}
                onClick={() => openPost(post)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="blog-image">
                  <img src={post.image || '/blog-placeholder.jpg'} alt={post.title} />
                  <div className="blog-overlay">
                    {!post.isPublished && (
                      <div className="coming-soon-badge">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="read-time">{post.readTime}</span>
                    {post.isPublished ? (
                      <button className="read-more-btn">Read More</button>
                    ) : (
                      <button className="read-more-btn disabled">Coming Soon</button>
                    )}
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
          <div className="blog-stats">
            <div className="stat">
              <span className="stat-number">{publishedPosts.length}</span>
              <span className="stat-label">Published Posts</span>
            </div>
            <div className="stat">
              <span className="stat-number">{blogPosts.length - publishedPosts.length}</span>
              <span className="stat-label">Coming Soon</span>
            </div>
          </div>

          {/* Coming Soon Message */}
          {publishedPosts.length === 0 ? (
            <div className="coming-soon-message">
              <h3>📝 Blog Coming Soon!</h3>
              <p>
                I'm currently working on some exciting content about AI, software engineering, 
                and my journey in tech. Stay tuned for insightful articles and tutorials!
              </p>
              <div className="subscribe-section">
                <p>Want to be notified when I publish new posts?</p>
                <button 
                  className="subscribe-btn"
                  onClick={() => window.location.href = 'mailto:jingdu.wrk@gmail.com?subject=Blog Subscription Request'}
                >
                  Get Notified
                </button>
              </div>
            </div>
          ) : (
            <div className="coming-soon-message">
              <h3>🚀 More Content Coming!</h3>
              <div className="subscribe-section">
                <p>Stay updated with new posts!</p>
                <button 
                  className="subscribe-btn"
                  onClick={() => window.location.href = 'mailto:jingdu.wrk@gmail.com?subject=Blog Subscription Request'}
                >
                  Subscribe for Updates
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={closePost}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closePost}>×</button>
            <div className="modal-header">
              <img src={selectedPost.image} alt={selectedPost.title} />
              <div className="modal-meta">
                <span className="modal-category">{selectedPost.category}</span>
                <h1>{selectedPost.title}</h1>
                <div className="modal-info">
                  <span>{selectedPost.date}</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>
            <div className="modal-content">
              <p>{selectedPost.excerpt}</p>
              <p style={{ fontStyle: 'italic', color: '#9333ea' }}>
                Full content coming soon...
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding-top: 80px;
        }

        .blog-section {
          padding: 120px 0 100px;
          position: relative;
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
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #9333ea, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 1;
          transform: translateY(0);
          animation: titleSlideIn 0.8s ease-out;
        }

        @keyframes titleSlideIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blog-intro {
          text-align: center;
          font-size: 1.2rem;
          color: #e0e0e0;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 1;
          transform: translateY(0);
          animation: subtitleSlideIn 0.8s ease-out 0.2s both;
        }

        @keyframes subtitleSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blog-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: rgba(147, 51, 234, 0.1);
          border: 1px solid rgba(147, 51, 234, 0.3);
          color: #9333ea;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
        }

        .blog-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 15px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 3rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #9333ea;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #c084fc;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          opacity: 1;
          transform: translateY(0);
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blog-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .blog-card:hover:not(.coming-soon) {
          transform: translateY(-10px);
          background: rgba(147, 51, 234, 0.1);
          border-color: #9333ea;
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
        }

        .blog-card.coming-soon {
          opacity: 0.7;
          cursor: default;
        }

        .blog-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image img:not(.coming-soon) {
          transform: scale(1.05);
        }

        .blog-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .coming-soon-badge {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .blog-content {
          padding: 2rem;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .blog-category {
          background: rgba(147, 51, 234, 0.2);
          color: #c084fc;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-weight: 600;
        }

        .blog-date {
          color: #9333ea;
        }

        .blog-title {
          color: #e0e0e0;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .blog-excerpt {
          color: #e0e0e0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .read-time {
          color: #c084fc;
          font-size: 0.9rem;
        }

        .read-more-btn {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(147, 51, 234, 0.3);
        }

        .read-more-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: rgba(147, 51, 234, 0.3);
        }

        .coming-soon-message {
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          border-radius: 20px;
          padding: 3rem 2rem;
          max-width: 600px;
          margin: 0 auto;
          opacity: 1;
          transform: translateY(0);
          animation: messageSlideIn 0.8s ease-out 0.4s both;
        }

        @keyframes messageSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .coming-soon-message h3 {
          color: #9333ea;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .coming-soon-message p {
          color: #e0e0e0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .subscribe-section {
          border-top: 1px solid rgba(147, 51, 234, 0.2);
          padding-top: 1.5rem;
          margin-top: 1.5rem;
        }

        .subscribe-btn {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.4);
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

        .blog-modal {
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 20px;
          max-width: 800px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
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
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(147, 51, 234, 0.1);
          transform: rotate(90deg);
        }

        .modal-header {
          position: relative;
        }

        .modal-header img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }

        .modal-meta {
          padding: 2rem;
          padding-bottom: 1rem;
        }

        .modal-category {
          background: rgba(147, 51, 234, 0.2);
          color: #c084fc;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .modal-meta h1 {
          color: #e0e0e0;
          margin: 1rem 0;
          font-size: 1.8rem;
        }

        .modal-info {
          display: flex;
          gap: 1rem;
          color: #9333ea;
          font-size: 0.9rem;
        }

        .modal-content {
          padding: 0 2rem 2rem;
          color: #e0e0e0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .blog-intro {
            font-size: 1rem;
          }

          .coming-soon-message {
            padding: 2rem 1.5rem;
          }

          .modal-content {
            padding: 0 1.5rem 1.5rem;
          }

          .modal-meta {
            padding: 1.5rem;
            padding-bottom: 1rem;
          }

          .blog-stats {
            gap: 2rem;
            padding: 1.5rem;
          }

          .blog-filters {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;