export const blogPosts = [
    {
        id: 1,
        title: "Machine Learning in Healthcare: Bridging the Gap Between Technology and Patient Care",
        excerpt: "How AI can revolutionize healthcare accessibility while maintaining the human touch that patients need.",
        date: "Coming Soon",
        category: "Healthcare & AI",
        readTime: "6 min read",
        image: "/machine-learning-in-healthcare.jpg",
        isPublished: false,
        tags: ["Machine Learning", "Healthcare", "AI Ethics", "Patient Care"],
        content: ""
      },
      {
      id: 2,
      title: "Sky Take-Out: Setting Up Frontend Development Environment on Mac",
      excerpt: "A comprehensive guide to configuring Nginx for the Sky Take-Out food delivery platform, including installation, configuration, and troubleshooting tips for Mac developers.",
      date: "October 2023",
      category: "Development Setup",
      readTime: "8 min read",
      image: "/Skytakeout.jpg",
      isPublished: true,
      tags: ["Nginx", "Mac", "Development", "Configuration", "Food Delivery"],
      content: `
        <div class="blog-content">
          <h2>Setting Up Frontend Development Environment for Sky Take-Out on Mac</h2>
          
          <p>When working on the Sky Take-Out food delivery platform, proper environment setup is crucial for smooth development. Here's a comprehensive guide to configuring Nginx on Mac for optimal frontend development.</p>
  
          <h3>1. Installing Nginx</h3>
          <p>First, let's install Nginx using Homebrew, which is the most convenient method on Mac:</p>
          
          <pre><code># Install nginx
  brew install nginx
  
  # Check nginx information (we'll explain this in detail later)
  brew info nginx
  
  # Start nginx
  brew services start nginx
  
  # Restart after configuration changes
  brew services restart nginx
  
  # Stop nginx
  brew services stop nginx
  
  # Check if nginx is running - if you see nginx:master, it's the running nginx process ID
  ps -ef|grep nginx</code></pre>
  
          <p><strong>Important paths to remember:</strong></p>
          <ul>
            <li>Installation directory: <code>/opt/homebrew/Cellar/nginx</code></li>
            <li>Configuration files: <code>/opt/homebrew/etc/nginx</code></li>
          </ul>
  
          <p>To view nginx configuration details, use: <code>nginx -V</code> (note the uppercase V). If you encounter errors, check the error log: <code>tail -f error.log</code></p>
  
          <h3>2. Configuring Nginx</h3>
          <p>Now let's configure Nginx for our Sky Take-Out project:</p>
  
          <pre><code># Navigate to nginx configuration directory
  cd /opt/homebrew/etc/nginx/
  
  # Edit the configuration file
  vim nginx.conf</code></pre>
  
          <p>Replace the content with the following configuration:</p>
  
          <pre><code>worker_processes  1;
  
  events {
      worker_connections  1024;
  }
  
  http {
      include       mime.types;
      default_type  application/octet-stream;
      sendfile        on;
      keepalive_timeout  65;
      
      map \\$http_upgrade \\$connection_upgrade{
          default upgrade;
          '' close;
      }
      
      upstream webservers{
          server 127.0.0.1:8080 weight=90 ;
          #server 127.0.0.1:8088 weight=10 ;
      }
      
      server {
          listen       80;
          server_name  localhost;
          
          location / {
              root   html/sky;
              index  index.html index.htm;
          }
          
          error_page   500 502 503 504  /50x.html;
          location = /50x.html {
              root   html;
          }
          
          # Reverse proxy for admin requests
          location /api/ {
              proxy_pass   http://localhost:8080/admin/;
              #proxy_pass   http://webservers/admin/;
          }
          
          # Reverse proxy for user requests
          location /user/ {
              proxy_pass   http://webservers/user/;
          }
          
          # WebSocket configuration
          location /ws/ {
              proxy_pass   http://webservers/ws/;
              proxy_http_version 1.1;
              proxy_read_timeout 3600s;
              proxy_set_header Upgrade \\$http_upgrade;
              proxy_set_header Connection "\\$connection_upgrade";
          }
      }
  }</code></pre>
  
          <h3>3. Setting Up Static Files</h3>
          <p>Based on the configuration file, we need to copy the HTML files from the project resources to the nginx html directory:</p>
          
          <pre><code># Copy files to nginx html directory
  # Note: This path may differ based on your nginx version
  cp -r /path/to/your/html/files/* /opt/homebrew/Cellar/nginx/1.25.2/html/sky/</code></pre>
  
          <p>The configuration specifies:</p>
          <pre><code>location / {
      root   html/sky;
      index  index.html index.htm;
  }</code></pre>
  
          <h3>4. Starting Nginx</h3>
          <p>Now start the nginx service:</p>
          
          <pre><code>brew services start nginx</code></pre>
  
          <p>Since we configured port 80, you can now access your application at <code>http://127.0.0.1</code> or <code>http://localhost</code>.</p>
  
          <h3>Troubleshooting: 403 Forbidden Error</h3>
          <p><strong>Important!</strong> If you encounter a 403 Forbidden error, it's usually due to insufficient file permissions. Here's how to fix it:</p>
  
          <p>First, check the error logs to understand the specific issue:</p>
          <pre><code>tail -f /opt/homebrew/var/log/nginx/error.log</code></pre>
  
          <p>If it's a permission issue, fix the file permissions:</p>
          <pre><code>sudo chmod -R 777 /opt/homebrew/Cellar/nginx/1.25.2/html/sky</code></pre>
  
          <p>After fixing permissions, try accessing the site again!</p>
  
          <h3>Understanding Different Nginx Start Methods</h3>
          
          <h4>brew services start nginx vs sudo nginx</h4>
          <p>There are two main ways to start Nginx, and it's important to understand the differences:</p>
  
          <h5>1. brew services start nginx</h5>
          <ul>
            <li>Uses Homebrew's service manager to start Nginx</li>
            <li>Automatically starts with appropriate permissions</li>
            <li>Sets up Nginx to auto-start on system boot</li>
            <li>More convenient for development environments</li>
            <li><strong>Recommended approach</strong> when using Homebrew-installed Nginx</li>
          </ul>
  
          <h5>2. sudo nginx</h5>
          <ul>
            <li>Manually starts Nginx with superuser privileges</li>
            <li>Requires manual password input</li>
            <li>Doesn't set up auto-start on system boot</li>
            <li>Suitable for temporary Nginx startup</li>
            <li>Used when Nginx is installed independently (not via Homebrew)</li>
          </ul>
  
          <h3>Best Practices</h3>
          <ul>
            <li>If you installed Nginx via Homebrew, always use <code>brew services start nginx</code></li>
            <li>This ensures Nginx runs with correct permissions and auto-starts on system boot</li>
            <li>For standalone Nginx installations, use <code>sudo nginx</code> but ensure you understand manual configuration management</li>
            <li>Always check error logs when troubleshooting: <code>tail -f error.log</code></li>
            <li>Keep your nginx.conf backed up before making changes</li>
          </ul>
  
          <h3>Conclusion</h3>
          <p>With this setup, you now have a fully configured development environment for the Sky Take-Out project. The reverse proxy configuration handles API requests properly, and the static file serving ensures your frontend loads correctly. Remember to restart Nginx whenever you make configuration changes, and always check the error logs if something isn't working as expected.</p>
          
          <p>This configuration provides a solid foundation for developing and testing the Sky Take-Out food delivery platform locally on your Mac.</p>
        </div>
      `
    }
  ];
  
  // Helper functions for blog management
  export const getPublishedPosts = () => {
    return blogPosts.filter(post => post.isPublished);
  };
  
  export const getDraftPosts = () => {
    return blogPosts.filter(post => !post.isPublished);
  };
  
  export const getPostById = (id) => {
    return blogPosts.find(post => post.id === id);
  };
  
  export const getPostsByCategory = (category) => {
    return blogPosts.filter(post => post.category === category);
  };
  
  export const getPostsByTag = (tag) => {
    return blogPosts.filter(post => post.tags && post.tags.includes(tag));
  };
  
  export const getAllCategories = () => {
    const categories = [...new Set(blogPosts.map(post => post.category))];
    return categories;
  };
  
  export const getAllTags = () => {
    const tags = [...new Set(blogPosts.flatMap(post => post.tags || []))];
    return tags;
  };