import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">
          Hello, I'm
        </p>
        <h1>Iqra Ajmal</h1>
        <h2>Frontend Developer</h2>
        <p className="hero-description">
          I build modern and responsive websites using
          React and TypeScript.
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
        <img src={profileImage} alt="Iqra Ajmal" />
      </div>
    </section>
  );
}

export default Hero;