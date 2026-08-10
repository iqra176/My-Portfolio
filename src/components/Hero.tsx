import profileImage from "../assets/Profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
      
      <p className="hero-greeting">
        Hello, I'm
      </p>

    <h1>Iqra Ajmal</h1>

    <h2> Frontend Developer</h2>

      <p className="hero-description">
      I build modern, responsive, and user friendly web applications
      using React, TypeScript, JavaScript, and modern web technologies.
      I enjoy turning ideas into clean, interactive, and engaging
      digital experiences.
      </p>

      <p className="hero-description">
      I am passionate about learning new technologies, solving
      realworld problems, and continuously improving my development
      skills to create high quality web experiences.
      </p>
        <div className="hero-buttons">

          <a
            href="/Iqra-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
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
      </div>

      <div className="hero-image">
        <img
          src={profileImage}
          alt="Iqra Ajmal - Frontend Developer"
        />
      </div>
    </section>
  );
}

export default Hero;