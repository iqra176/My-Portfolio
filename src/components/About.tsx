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
          responsive, and user friendly web applications using React,
          TypeScript, JavaScript, and modern CSS frameworks.
        </p>

        <p>
          I enjoy transforming ideas and designs into clean, functional,
          and engaging digital experiences. I focus on writing maintainable
          code, creating responsive layouts, and building interfaces that
          provide a smooth experience across different devices.
        </p>

        <p>
          I am continuously learning and improving my skills by working
          on real world projects, exploring new technologies, and solving
          challenging problems. My goal is to build high quality web
          applications that are both visually appealing and easy to use.
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