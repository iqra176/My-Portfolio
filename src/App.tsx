import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built with React and TypeScript.",
    image: "/portfolioSS.png",
    technologies: ["React", "TypeScript", "CSS"],
    liveUrl: "https://my-portfolio-f6qen7vxl-iqra-ajmal.vercel.app/",
    githubUrl: "https://github.com/iqra176/My-Portfolio",
  },
  {
    title: "Recipe Generator App",
    description:
      "An AI powered app that generates recipes from user provided ingredients.",
    image: "/recipeGeneratorSS.png",
    technologies: ["React", "JavaScript", "AI API"],
    liveUrl: "https://recipe-generator-aifxrzegw-iqra-ajmal.vercel.app/",
    githubUrl: "https://github.com/iqra176/Recipe-Generator",
  },
  {
    title: "Word Guessing Game",
    description:
      "An interactive word guessing game built with React and JavaScript.",
    image: "/wordGuessingGameSS.png",
    technologies: ["React", "React Confetti", "JavaScript"],
    liveUrl: "https://word-guessing-game-drab.vercel.app/",
    githubUrl: "https://github.com/iqra176/Word-Guessing-Game",
  },
  {
    title: "Memes Generator App",
    description:
      "A meme generator that lets users create custom memes with images and text.",
    image: "/memeGeneratorSS.png",
    technologies: ["React", "JavaScript", "API"],
    liveUrl: "https://meme-generator-lyart-beta.vercel.app/",
    githubUrl: "https://github.com/iqra176/meme-generator",
  },
  {
    title: "Tenzies Game",
    description:
      "A fun dice game where players roll and match all dice to win.",
    image: "/tenziesSS.png",
    technologies: ["CSS", "React", "JavaScript"],
    liveUrl: "https://tenzies-game-gilt-nine.vercel.app/",
    githubUrl: "https://github.com/iqra176/Tenzies_Game",
  },
   {
    title: "Mood App",
    description:
      "A mood based app that provides personalized song based on your mood.",
    image: "/moodAppSS.PNG",
    technologies: ["ReactJS", "CSS", "JavaScript"],
    liveUrl: "https://mood-based-app-with-react-qpxnwb1j9-iqra-ajmal.vercel.app/",
    githubUrl: "https://github.com/iqra176/Mood-Based-App-with-React",
  },
  
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Hero />
    <About/>
    <Skills />
    <section id="projects" className="projects">
  <div className="projects-heading">
    <p className="section-subtitle">My Work</p>
    <h2>Projects</h2>
    <p>
      Here are some of the projects I have worked on.
    </p>
  </div>
  <div className="projects-grid">
    {projects.map((project) => (
      <ProjectCard
        key={project.title}
        title={project.title}
        description={project.description}
        image={project.image}
        technologies={project.technologies}
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
      />
    ))}
  </div>
</section>
    <Contact />
    <Footer />
    </div>
  )
}

export default App
