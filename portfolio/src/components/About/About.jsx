import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

import profile from "../../data/profile";

const About = () => {
  return (
    <section id="about" className="py-5">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fw-bold mb-5">
            About Me
          </h2>

          <Row className="align-items-center">

            <Col lg={8}>

              <h3 className="mb-3">
                Hi, I'm {profile.name}
              </h3>

              <h5 className="text-primary mb-4">
                {profile.title}
              </h5>

              <p className="lead">
                {profile.about}
              </p>

            </Col>

            <Col lg={4}>

              <Row>

                {profile.stats.map((item) => (

                  <Col
                    xs={4}
                    lg={12}
                    key={item.label}
                    className="mb-3"
                  >

                    <Card className="text-center shadow-sm">

                      <Card.Body>

                        <h3 className="fw-bold text-primary">
                          {item.number}
                        </h3>

                        <p className="mb-0">
                          {item.label}
                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                ))}

              </Row>

            </Col>

          </Row>

        </motion.div>

      </Container>

    </section>
  );
};

export default About;