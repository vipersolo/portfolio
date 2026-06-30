import "./ProjectDetails.css";

import { useParams, Link } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

import projects from "../../data/projects";

const ProjectDetails = () => {

    const { slug } = useParams();

    const project = projects.find(
        p => p.slug === slug
    );

    if (!project) {

        return (

            <Container className="py-5">

                <h2>Project Not Found</h2>

                <Link to="/">

                    Back Home

                </Link>

            </Container>

        );

    }

    return (

        <>
            <section className="project-hero">

                <Container>

                    <h1>

                        {project.title}

                    </h1>

                    <p className="lead">

                        {project.description}

                    </p>

                    <div className="project-tech">

                        {

                            project.technologies.map(tech => (

                                <span
                                    key={tech}
                                    className="project-pill"
                                >

                                    {tech}

                                </span>

                            ))

                        }

                    </div>

                    <Button
                        href={project.github}
                        target="_blank"
                        className="me-3"
                    >

                        GitHub

                    </Button>

                    <Button
                        href={project.live}
                        target="_blank"
                        variant="outline-dark"
                    >

                        Live Demo

                    </Button>

                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-banner"
                    />

                </Container>

            </section>

            <Container>

                <section className="project-section">

                    <h2>

                        Overview

                    </h2>

                    <p>

                        {project.overview}

                    </p>

                </section>

                <section className="project-section">

                    <h2>

                        Architecture

                    </h2>

                    <div className="architecture">

                        {

                            project.architecture.map(step => (

                                <p key={step}>

                                    {step}

                                </p>

                            ))

                        }

                    </div>

                </section>

                <section className="project-section">

                    <h2>

                        Key Features

                    </h2>

                    <ul>

                        {

                            project.features.map(feature => (

                                <li key={feature}>

                                    {feature}

                                </li>

                            ))

                        }

                    </ul>

                </section>

                <section className="project-section">

                    <h2>

                        Challenges

                    </h2>

                    <p>

                        {project.challenges}

                    </p>

                </section>

                <section className="project-section">

                    <h2>

                        What I Learned

                    </h2>

                    <p>

                        {project.learned}

                    </p>

                </section>

                <section className="project-section">

                    <h2>

                        Gallery

                    </h2>

                    <div className="gallery">

                        {

                            project.gallery.map(image => (

                                <img
                                    key={image}
                                    src={image}
                                    alt={project.title}
                                />

                            ))

                        }

                    </div>

                </section>

            </Container>

        </>

    );

};

export default ProjectDetails;