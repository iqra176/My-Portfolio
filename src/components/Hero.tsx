import profileImage from "../assets/Profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Decorative background elements */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-content">
      
        <p className="hero-greeting">
          Hello, I'm
        </p>
        <h1>
          Iqra Ajmal
        </h1>
        <h2>
          Frontend Developer
        </h2>
        <p className="hero-description">
          I build modern, responsive, and user-friendly
          web applications using React, TypeScript,
          and modern web technologies.
        </p>
        {/* Tech stack */}
        <div className="hero-tech">
          <span>React</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>Responsive UI</span>
        </div>
        {/* Main actions */}
        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn"
          >
            View My Work
          </a>
          <a
            href="/Iqra-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            View CV
          </a>
          <a
            href="/Iqra-CV.pdf"
            download="Iqra-Ajmal-CV.pdf"
            className="btn secondary"
          >
            Download CV
          </a>
        </div>
        {/* Social buttons */}
        <div className="hero-socials">
          <a
            href="https://github.com/iqra176"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/hafizaiqraajmal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

        </div>

      </div>

      {/* Profile image */}
      <div className="hero-image">

        <div className="hero-image-wrapper">

          <div className="hero-image-ring"></div>

          <img
            src={profileImage}
            alt="Iqra Ajmal - Frontend Developer"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;