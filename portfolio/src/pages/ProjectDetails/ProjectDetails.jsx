import "./ProjectDetails.css";

import { Link, useParams } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";

import projects from "../../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <Container className="py-5 text-center">

        <h1>Project Not Found</h1>

        <p>
          The requested project does not exist.
        </p>

        <Button
          as={Link}
          to="/"
          variant="dark"
        >
          Back to Home
        </Button>

      </Container>
    );
  }

  return (
    <section className="project-details">

      <Container>

        <div className="project-header">

          <h1>{project.title}</h1>

          <p className="project-overview">

            {project.overview}

          </p>

          <div className="tech-stack">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="tech-pill"
              >
                {tech}
              </span>

            ))}

          </div>

          <div className="project-links">

            <Button
              href={project.githubFrontend}
              target="_blank"
            >
              Frontend
            </Button>

            <Button
              href={project.githubBackend}
              target="_blank"
              variant="secondary"
            >
              Backend
            </Button>

            <Button
              href={project.liveDemo}
              target="_blank"
              variant="outline-dark"
            >
              Live Demo
            </Button>

          </div>

        </div>

        <img
          src={project.coverImage}
          alt={project.title}
          className="cover-image"
        />

        <Row className="mt-5">

          <Col lg={6}>

            <div className="details-card">

              <h2>Architecture</h2>

              <ul>

                {project.architecture.map((item) => (

                  <li key={item}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </Col>

          <Col lg={6}>

            <div className="details-card">

              <h2>Features</h2>

              <ul>

                {project.features.map((feature) => (

                  <li key={feature}>
                    {feature}
                  </li>

                ))}

              </ul>

            </div>

          </Col>

        </Row>

        <Row className="mt-4">

          <Col lg={6}>

            <div className="details-card">

              <h2>Challenges</h2>

              <ul>

                {project.challenges.map((item) => (

                  <li key={item}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </Col>

          <Col lg={6}>

            <div className="details-card">

              <h2>Lessons Learned</h2>

              <ul>

                {project.lessonsLearned.map((item) => (

                  <li key={item}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </Col>

        </Row>

        <div className="gallery-section">

          <h2>Gallery</h2>

          <Row>

            {project.gallery.map((image, index) => (

              <Col
                md={6}
                lg={4}
                className="mb-4"
                key={index}
              >

                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="gallery-image"
                />

              </Col>

            ))}

          </Row>

        </div>

      </Container>

    </section>
  );
};

export default ProjectDetails;