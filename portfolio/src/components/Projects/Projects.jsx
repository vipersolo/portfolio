import { Container, Row, Col } from "react-bootstrap";

import projects from "../../data/projects";

import ProjectCard from "./ProjectCard";

const Projects = () => {

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects">

      <Container>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <Row>

          {featuredProjects.map((project) => (

            <Col
              lg={6}
              className="mb-4"
              key={project.id}
            >

              <ProjectCard project={project} />

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
};

export default Projects;