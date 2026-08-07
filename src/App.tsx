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
    description: "A responsive portfolio website built with React and TypeScript.",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "TypeScript", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },

  {
    title: "Weather App",
    description: "A weather application that displays weather information using an API.",
    image: "/projects/weather.jpg",
    technologies: ["React", "TypeScript", "API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
  },

  {
    title: "Todo App",
    description: "A simple task management application for organizing daily tasks.",
    image: "/projects/todo.jpg",
    technologies: ["React", "TypeScript", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/todo-app",
  },
];
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)} //value ko opposite kr do
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
    <Navbar />
    <Hero />
    <About/>
    <Skills />
    <section id="projects" className="projects">

  <div className="projects-heading">
    <p className="section-subtitle">
      My Recent Work
    </p>

    <h2>My Projects</h2>

    <p>
      Here are some projects I have built while learning
      and practicing web development.
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
