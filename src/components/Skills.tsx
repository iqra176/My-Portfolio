const skills = [
  {
    name: "HTML",
    description: "Building semantic web pages",
  },
  {
    name: "CSS",
    description: "Creating responsive and modern designs",
  },
  {
    name: "JavaScript",
    description: "Adding functionality and interactivity",
  },
  {
    name: "React",
    description: "Building reusable UI components",
  },
  {
    name: "TypeScript",
    description: "Writing safer and maintainable code",
  },
  {
    name: "Git & GitHub",
    description: "Version control and project management",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-heading">
        <p className="section-subtitle">What I Work With</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;