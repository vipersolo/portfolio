import "./Experience.css";

import { Container } from "react-bootstrap";

import { motion } from "framer-motion";

import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience">

      <Container>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">
            Experience
          </h2>

          <div className="timeline">

            {

              experience.map((job) => (

                <div
                  className="timeline-item"
                  key={job.id}
                >

                  <div className="timeline-dot"></div>

                  <div className="timeline-card">

                    <h3>

                      {job.role}

                    </h3>

                    <h5 className="company">

                      {job.company}

                    </h5>

                    <p>

                      {job.location}

                    </p>

                    <p className="duration">

                      {job.duration}

                    </p>

                    <div className="tech-stack">

                      {

                        job.technologies.map((tech) => (

                          <span
                            className="tech"
                            key={tech}
                          >

                            {tech}

                          </span>

                        ))

                      }

                    </div>

                    <ul>

                      {

                        job.responsibilities.map((item) => (

                          <li key={item}>

                            {item}

                          </li>

                        ))

                      }

                    </ul>

                  </div>

                </div>

              ))

            }

          </div>

        </motion.div>

      </Container>

    </section>
  );
};

export default Experience;