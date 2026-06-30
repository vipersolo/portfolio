import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Projects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project.coverImage}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.shortDescription}</p>

        <div className="project-tech">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="tech-pill"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="project-buttons">

          <Button
            variant="dark"
            href={project.githubFrontend}
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            variant="outline-dark"
            href={project.liveDemo}
            target="_blank"
          >
            Live Demo
          </Button>

          <Button
            as={Link}
            to={`/projects/${project.slug}`}
            variant="primary"
          >
            View Details
          </Button>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;