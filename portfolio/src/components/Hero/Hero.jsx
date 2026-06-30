import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="d-flex align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <Container>
        <Row className="align-items-center">

          {/* Left Content */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary fw-bold">
                Hello, I'm
              </p>

              <h1 className="display-3 fw-bold">
                Antony Jose
              </h1>

              <h3 className="text-secondary mb-4">
                Python Full Stack Developer
              </h3>

              <p className="lead">
                I build scalable web applications using
                React, Django REST Framework and PostgreSQL.
              </p>

              <div className="mt-4">
                <Button
                  variant="dark"
                  className="me-3"
                >
                  View Projects
                </Button>

                <Button variant="outline-dark">
                  Download Resume
                </Button>
              </div>

              <div className="mt-4 fs-3">
                <a href="#" className="text-dark me-4">
                  <FaGithub />
                </a>

                <a href="#" className="text-dark me-4">
                  <FaLinkedin />
                </a>

                <a href="#" className="text-dark">
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </Col>

          {/* Right Image */}
          <Col lg={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://placehold.co/400x400"
                alt="Profile"
                className="img-fluid rounded-circle shadow"
              />
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;