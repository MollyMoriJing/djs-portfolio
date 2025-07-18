import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postId = parseInt(id);
    const foundPost = getPostById(postId);
    
    if (foundPost && foundPost.isPublished) {
      setPost(foundPost);
    } else {
      // Redirect to blog if post not found or not published
      navigate('/blog');
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
        <style jsx>{`
          .page {
            min-height: 100vh;
            padding-top: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .loading-container {
            text-align: center;
            color: #e0e0e0;
          }
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(147, 51, 234, 0.3);
            border-top: 4px solid #9333ea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="page">
      <article className="blog-post">
        <header className="post-header">
          <div className="container">
            <button 
              className="back-button"
              onClick={() => navigate('/blog')}
            >
              ← Back to Blog
            </button>
            
            <div className="post-hero">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-meta-container">
                <div className="post-categories">
                  <span className="category-tag">{post.category}</span>
                </div>
                <h1 className="post-title">{post.title}</h1>
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                {post.tags && (
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="post-content">
          <div className="container">
            <div 
              className="content" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </main>

        <footer className="post-footer">
          <div className="container">
            <div className="post-navigation">
              <button 
                className="nav-button"
                onClick={() => navigate('/blog')}
              >
                ← All Posts
              </button>
            </div>
          </div>
        </footer>
      </article>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding-top: 80px;
        }

        .blog-post {
          max-width: 100%;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .back-button {
          background: rgba(147, 51, 234, 0.1);
          border: 1px solid rgba(147, 51, 234, 0.3);
          color: #9333ea;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
        }

        .back-button:hover {
          background: rgba(147, 51, 234, 0.2);
          transform: translateX(-5px);
        }

        .post-hero {
          margin-bottom: 3rem;
        }

        .post-image {
          width: 100%;
          height: 300px;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-categories {
          margin-bottom: 1rem;
        }

        .category-tag {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .post-title {
          color: #e0e0e0;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: #c084fc;
          font-size: 0.9rem;
        }

        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: rgba(147, 51, 234, 0.2);
          color: #c084fc;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(147, 51, 234, 0.3);
        }

        .post-content {
          margin: 3rem 0;
        }

        .content {
          color: #e0e0e0;
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .content :global(h2) {
          color: #9333ea;
          font-size: 1.8rem;
          margin: 2rem 0 1rem 0;
          font-weight: 600;
        }

        .content :global(h3) {
          color: #c084fc;
          font-size: 1.4rem;
          margin: 1.5rem 0 1rem 0;
          font-weight: 600;
        }

        .content :global(h4) {
          color: #c084fc;
          font-size: 1.2rem;
          margin: 1.5rem 0 0.5rem 0;
          font-weight: 600;
        }

        .content :global(h5) {
          color: #e0e0e0;
          font-size: 1.1rem;
          margin: 1rem 0 0.5rem 0;
          font-weight: 600;
        }

        .content :global(p) {
          margin-bottom: 1.5rem;
        }

        .content :global(ul), .content :global(ol) {
          margin: 1rem 0 1.5rem 0;
          padding-left: 2rem;
        }

        .content :global(li) {
          margin-bottom: 0.5rem;
        }

        .content :global(code) {
          background: rgba(147, 51, 234, 0.1);
          color: #c084fc;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9em;
        }

        .content :global(pre) {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 8px;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .content :global(pre code) {
          background: none;
          color: #e0e0e0;
          padding: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .content :global(blockquote) {
          border-left: 4px solid #9333ea;
          padding-left: 1.5rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #c084fc;
        }

        .content :global(strong) {
          color: #c084fc;
          font-weight: 600;
        }

        .post-footer {
          margin-top: 4rem;
          padding: 2rem 0;
          border-top: 1px solid rgba(147, 51, 234, 0.2);
        }

        .post-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .nav-button {
          background: rgba(147, 51, 234, 0.1);
          border: 1px solid rgba(147, 51, 234, 0.3);
          color: #9333ea;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button.primary {
          background: linear-gradient(45deg, #9333ea, #c084fc);
          color: white;
          border-color: transparent;
        }

        .nav-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(147, 51, 234, 0.3);
        }

        @media (max-width: 768px) {
          .post-title {
            font-size: 2rem;
          }

          .post-image {
            height: 200px;
          }

          .content {
            font-size: 1rem;
          }

          .post-navigation {
            flex-direction: column;
            text-align: center;
          }

          .nav-button {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;