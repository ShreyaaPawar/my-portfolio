import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Shreya Pawar</div>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="photo-section">
            <img 
              src="/profile.jpg" 
              alt="Shreya Pawar" 
              className="profile-img" 
            />
          </div>
          <div className="text-section">
            <div className="hero-header">
              <h1>Shreya Pawar</h1>
              <span className="status-badge">🔓 Open for Opportunities</span>
            </div>
            <h2>Full-Stack Developer</h2>
            <p>Full stack developer with 3+ years at Oracle Financial Software Services, skilled in Java, Spring Boot, and PostgreSQL, delivering scalable software solutions. Proven track record in optimizing application performance and enhancing system reliability. Experienced in end-to-end feature development, database design, and production deployments. Eager to contribute as a Software Engineer in dynamic tech environment.</p>
            <div className="buttons">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="https://linkedin.com/in/shreya-pawar12" target="_blank" className="btn-secondary">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="highlight">
          <h3>Staff Consultant</h3>
          <p>Oracle Financial Services (May 2024 - Present)</p>
        </div>
        <div className="highlight">
          <h3>3+ Years</h3>
          <p>Full-Stack Development Experience</p>
        </div>
        <div className="highlight">
          <h3>Mumbai, India</h3>
          <p>Available for SDE2 roles</p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Staff Consultant (Backend Lead)</h3>
          <div className="job-meta">Oracle Financial Services | Sep 2024 - Present</div>
          <ul>
            <li>Architected PRM integration across 20+ HDFC NetBanking transactions using RT/NRT services, handling 150K+
daily requests.</li>
            <li>Designed RBI-compliant Key Fact Statements for Credit Card/Demat modules, processing 5K+ weekly
onboardings with 100 percent audit compliance.</li>
            <li>Built REST APIs for Stitch customer onboarding, enabling seamless account creation for 10K+ users/month;
reduced integration errors through robust error handling and schema validation.</li>
            <li>Led BioCatch behavioral analytics integration for fraud prevention across financial flows, improving detection
accuracy and blocking 2M+ in potential fraud annually.</li>
            <li>Engineered session expiration logic for EPI transactions, enhancing security for high-value flows and resolving stale
connections that affected 2K+ daily sessions.</li>
            <li>Mentored 4 junior developers on best practices/code reviews; deployed 20+ production releases with zero
post-go-live incidents.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Associate Consultant</h3>
          <div className="job-meta">Oracle Financial Services | Jun 2022 - Aug 2024</div>
          <ul>
            <li>Optimized UI/backend flows for EPI transactions, bug-bounty ISG issues and implementing textual changes that
supported 50K+ monthly HDFC users without downtime.</li>
            <li>Developed scalable backend services for financial applications</li>
            <li>Database optimization + performance tuning for Oracle DB</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <h3>Alpha E-Commerce Platform (Full-Stack)</h3>
            <p>Spring Boot + PostgreSQL + React + Razorpay + Production-ready APIs + payments + file uploads using Amazon S3</p>
            <a href="https://github.com/ShreyaaPawar/alpha-ecommerce-website" target="_blank" className="github-btn">GitHub</a>
          </div>
          <div className="project">
            <h3>DTO Auto-Generator Tool</h3>
            <p>Java + Swing-UI + Jackson library. Auto-generates DTOs from dynamic JSON schemas (80% time saved)</p>
            <a href="https://github.com/ShreyaaPawar/APIAutomationTool" target="_blank" className="github-btn">GitHub</a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <h4>Backend</h4>
            <p>Java, Maven, Spring Boot, Hibernate, JPA, REST APIs, JWT, OAuth2, Postman</p>
          </div>
          <div className="skill-group">
            <h4>Database</h4>
            <p>PostgreSQL, Oracle DB, SQL</p>
          </div>
          <div className="skill-group">
            <h4>Frontend</h4>
            <p>React.js, HTML, CSS, Bootstrap, JavaScript</p>
          </div>
          <div className="skill-group">
            <h4>DevOps</h4>
            <p>Docker, Kubernetes, Git, WebLogic, WebSphere</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="edu-item">
            <h3>KJ Somaiya College of Engineering</h3>
            <p>B.Tech EXTC | CGPI: 9.23 | 2019-2022</p>
          </div>
          <div className="edu-item">
            <h3>Agnel Polytechnic</h3>
            <p>Diploma Industrial Electronics | 94% | 2016-2019</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>shreyapawar451@gmail.com</p>
            <a href="mailto:shreyapawar451@gmail.com" className="contact-btn">Send Message</a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Shreya Pawar</p>
            <a href="https://linkedin.com/in/shreya-pawar12" target="_blank" className="contact-btn">View Profile</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Shreya Pawar. Built with React. | Mumbai, India</p>
      </footer>
    </div>
  );
}

export default App;
