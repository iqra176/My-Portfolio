function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-about">
          <h3>Iqra Ajmal</h3>

          <p>
            Frontend Developer passionate about building
            modern and responsive websites using React
            and TypeScript.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Connect With Me</h4>

          <a
            href="https://github.com/iqra176"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hafizaiqraajmal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:iqraabbasi284@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Iqra Ajmal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;