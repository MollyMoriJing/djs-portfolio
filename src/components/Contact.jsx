const Contact = () => {
  
  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
        </svg>
      ),
      value: "du.jing2@northeastern.edu",
      label: "jingdu.wrk@gmail.com",
      href: "mailto:jingdu.wrk@gmail.com",
    },
    {
      iconType: "svg",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      href: "https://linkedin.com/in/du-jing2-northeastern-edu"
    },
    {
      iconType: "svg",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      href: "https://github.com/MollyMoriJing" 
    }
  ];

  const handleContactClick = (contact) => {
    if (contact.href) {
      window.open(contact.href, contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : "_self");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link with form data
    const subject = `Message from ${name} via Portfolio`;
    const body = `Hi Jing,\n\n${message}\n\nBest regards,\n${name}\n${email}`;
    const mailtoLink = `mailto:jingdu.wrk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" section className="contact-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Let's Connect</h2>
        <p className="animate-on-scroll" style={{ 
          fontSize: '1.1rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#e0e0e0'
        }}>
          I'm always interested in discussing new opportunities and innovative projects
        </p>
        
        <div className="contact-info">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`contact-item animate-on-scroll ${contact.href ? 'clickable' : ''}`}
              onClick={() => handleContactClick(contact)}
              style={{
                cursor: contact.href ? 'pointer' : 'default',
                animationDelay: `${index * 0.1}s`
              }}
              tabIndex={contact.href ? 0 : -1}
              role={contact.href ? "button" : "text"}
              aria-label={contact.href ? `Contact via ${contact.label}` : contact.label}
            >
              <span className="contact-icon" style={{ fontSize: '1.5rem', color: '#9333ea' }}>
                {contact.iconType === 'svg' ? contact.icon : contact.icon}
              </span>
              <div className="contact-details">
                <div className="contact-label" style={{ 
                  fontSize: '0.9rem', 
                  color: '#c084fc',
                  fontWeight: '600'
                }}>
                  {contact.label}
                </div>
                <div className="contact-value" style={{ 
                  fontSize: '1rem', 
                  color: '#e0e0e0' 
                }}>
                  {contact.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="contact-form-section animate-on-scroll" style={{
          marginTop: '3rem',
          maxWidth: '600px',
          margin: '3rem auto 0',
          padding: '2rem',
          background: 'rgba(0, 0, 0, 0.17)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(119, 79, 156, 0.2)',
          borderRadius: '15px'
        }}>
          <h3 style={{ 
            textAlign: 'center', 
            marginBottom: '1.5rem',
            color: '#9333ea' 
          }}>
            Send me a message
          </h3>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(45deg, #9333ea, #c084fc)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(147, 51, 234, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
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
          margin-bottom: 3rem;
          background: linear-gradient(45deg,rgb(175, 121, 226), #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
          max-width: 1200px;
          margin: 0 auto 2rem auto;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
          border-radius: 15px;
          background: rgba(13, 10, 27, 0.17);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(125, 92, 156, 0.2);
        }
        
        .contact-item.clickable:hover {
          background: rgba(182, 138, 224, 0.1);
          transform: translateY(-3px);
          border-color: #9333ea;
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.2);
        }
        
        .contact-item.clickable:hover .contact-value {
          color:rgb(196, 156, 237);
        }

        .contact-icon {
          display: flex;
          min-width: 24px;
        }
        
        input::placeholder,
        textarea::placeholder {
          color: rgba(219, 213, 226, 0.42);
        }
        
        input:focus,
        textarea:focus {
          outline: none;
          border-color:rgb(103, 63, 141);
          box-shadow: 0 0 10px rgba(88, 34, 139, 0.3);
        }
        
        @media (max-width: 768px) {
          .contact-info {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .contact-item {
            justify-content: flex-start;
            text-align: left;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;