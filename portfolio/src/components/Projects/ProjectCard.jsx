import { Button } from "react-bootstrap";

import "./Projects.css";

const ProjectCard = ({ project }) => {

  return (

    <div className="project-card">

      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">

        <h3>

          {project.title}

        </h3>

        <p>

          {project.description}

        </p>

        <div className="project-tech">

          {

            project.technologies.map((tech) => (

              <span
                key={tech}
                className="tech-pill"
              >

                {tech}

              </span>

            ))

          }

        </div>

        <ul className="project-features">

          {

            project.features.map((feature) => (

              <li key={feature}>

                {feature}

              </li>

            ))

          }

        </ul>

        <div className="project-buttons">

          <Button
            variant="dark"
            href={project.github}
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            variant="outline-dark"
            href={project.live}
            target="_blank"
          >
            Live Demo
          </Button>

        </div>

      </div>

    </div>

  );

};

export default ProjectCard;