// TS Type:ProjectCard component ko jo props milenge unka structure yahan define kiya gaya hai.
//string -> text value , string[]     -> strings ki array
//Is type ki wajah se TypeScript humein galat,ya missing props dene par error bata sakta hai.
type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};
// React Functional Component:ProjectCard ek reusable component hai.
//Iska matlab:Ek hi component ko multiple projects ke liye reuse kiya ja sakta hai.
//Example:Portfolio Website, Weather App,Todo App,Sab ke liye same ProjectCard component use hoga,
// sirf props ki values different hongi.
function ProjectCard({

  // Props Destructuring:Parent component se aane wale props ko directly var mein extract kiya gaya hai.
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,

}: ProjectCardProps) {

  // JSX:Component ka UI return ho raha hai.
  return (
    // Semantic HTML element <article> ek independent piece of content represent karta hai.
    //Yahan ek complete project card represent ho raha hai.
    <article className="project-card">
      {/* PROJECT IMAGE */}
      <img
        // src ko image prop ki value milegi.
        src={image}
        alt={title}
        className="project-image"
      />
      {/*PROJECT CONTENT*/}
      <div className="project-content">
        {/* JSX Expression :Curly braces { } ke andar JavaScript variable use kar sakte hain.
          {title} project ka actual title show karega.*/}
        <h3>{title}</h3>
        {/* Project description */}
        <p>{description}</p>
        {/*TECHNOLOGIES */}
        <div className="project-technologies">
          {/*.map(): technologies ek array hai.Example:[ "React","TypeScript","CSS"]
            .map() array ke har item par function run karta hai aur new JSX elements create karta hai.
            Result: React TypeScript CSS*/}
          {technologies.map((technology) => (
            // Har mapped element ko unique key dena zaroori hai.React key ko use karta hai
            //  ye identify karne ke liye ke list mein kaunsa item change/add/remove hua.
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
        {/*  PROJECT BUTTONS */}
        <div className="project-buttons">
          {/*LIVE DEMO*/}
          <a
            // liveUrl prop se actual deployed website ka URL aayega.
            href={liveUrl}
            // New tab mein link open karega.
            target="_blank"
            // Security reason:noopener new page ko original page ke window object tak access karne se 
            // prevent karta hai.noreferrer referrer information ko hide karta hai.
            rel="noopener noreferrer"
            className="btn"
          >
            Live Demo
          </a>
          {/* GITHUB */}
          <a
            href={githubUrl}
             target="_blank"
            // External links ke liye security best practice.
            rel="noopener noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;