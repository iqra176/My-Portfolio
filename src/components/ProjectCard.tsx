type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="project-card">

      <img
        src={image}
        alt={title}
        className="project-image"
      />

      <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-buttons">

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Live Demo
          </a>

          <a
            href={githubUrl}
            target="_blank"
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

