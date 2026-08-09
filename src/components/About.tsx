function About() {
  return (
    <section id="about" className="about">

      <div className="about-image">
        <img
          src="/Profile.JPG"
          alt="Iqra Ajmal - Frontend Developer"
        />
      </div>

      <div className="about-content">

        <p className="section-subtitle">
          Get To Know Me
        </p>

        <h2>About Me</h2>

        <h3>Frontend Developer</h3>

        <p>
          I am a Frontend Developer passionate about creating modern,
          responsive, and user-friendly web applications using React
          and TypeScript.
        </p>

        <p>
          I enjoy learning new technologies, solving problems, and
          turning ideas into clean, functional, and engaging web
          experiences.
        </p>

        <div className="about-skills">
          <span>React</span>
          <span>TypeScript</span>
          <span>Responsive Design</span>
        </div>

        <a
          href="/Iqra-CV.pdf"
          download="Iqra-Ajmal-CV.pdf"
          className="btn"
        >
          Download CV
        </a>

      </div>

    </section>
  );
}

export default About;