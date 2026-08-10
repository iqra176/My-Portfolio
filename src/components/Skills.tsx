// Array of Objects :`skills` ek array hai jiske andar multiple objects hain.
//Har object ek skill ko represent karta hai.Har skill ke paas 2 properties hain:
// 1. name -> skill ka naam 2. description -> skill ke baare mein short information
// TS yahan automatically structure infer kar sakta hai kyunki humne manually type define nahi kiya.
const skills = [
  {
    name: "HTML",
    description: "Building semantic and accessible web pages",
  },
  {
    name: "CSS",
    description: "Creating responsive and modern user interfaces",
  },
  {
    name: "JavaScript",
    description: "Adding functionality and interactive experiences",
  },
  {
    name: "React",
    description: "Building reusable and component-based user interfaces",
  },
  {
    name: "TypeScript",
    description: "Writing safer, scalable, and maintainable code",
  },
  {
    name: "Git & GitHub",
    description: "Managing source code and version control",
  },
  {
    name: "CSS 3/Saas",
    description: "Creating responsive and modern user interfaces",
  },
 {
  name: "Bootstrap",
  description: "Building responsive and mobile-first web interfaces",
},
{
  name: "REST APIs",
  description: "Integrating and working with web APIs",
},
];
// React Functional Component,`Skills` ek reusable React component hai.
// Ye component skills section ka complete UI return karta hai.
function Skills() {
  // JSX JavaScript ke andar HTML jaisi syntax likhne deta hai.
  return (
    <section
      id="skills"
      className="skills"
    >
      {/* SECTION HEADING */}
      <div className="skills-heading">
        {/* className,:React mein HTML ke `class` ki jagah,`className` use hota hai.
        CSS mein isi class ko style kiya ja sakta hai.*/}
        <p className="section-subtitle">
          What I Work With
        </p>
        <h2>My Skills</h2>
      </div>
      {/* SKILLS GRID*/}
      <div className="skills-grid">
        {/* 
          Array .map()`skills` array ke har object par `.map()`callback function execute karega.
          Example:skills = [{ name: "HTML", ... },{ name: "CSS", ... },{ name: "React", ... }]
          `.map()` har skill ke liye ek skill card create karega.Iska faida:
          Humein har skill ke liye manually same HTML repeat nahi karna padta.*/}
        {skills.map((skill) => (
          <div
            className="skill-card"
            // React List Key:React ko list ke har item ki unique identity dene ke liye `key` use hoti hai.
            //Yahan skill ka name unique hai,isliye `skill.name` ko key banaya.
            key={skill.name}
          >
            {/* JSX Expression:`{skill.name}` JavaScript expression hai.
              Ye current skill object ka `name`screen par display karega.*/}
            <h3>
              {skill.name}
            </h3>
            {/* 
              Object Property Access:`skill.description`current object ki description property ko 
              access karta hai.*/}
            <p>
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;