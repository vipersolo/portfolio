import "./Contact.css";

import { Container } from "react-bootstrap";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload
} from "react-icons/fa";

import contact from "../../data/contact";

const Contact = () => {

  const cards = [
    {
      icon: FaEnvelope,
      title: "Email",
      text: contact.email,
      button: "Send Email",
      link: `mailto:${contact.email}`
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      text: "Let's connect professionally",
      button: "Visit Profile",
      link: contact.linkedin
    },
    {
      icon: FaGithub,
      title: "GitHub",
      text: "Explore my projects",
      button: "View Repositories",
      link: contact.github
    },
    {
      icon: FaFileDownload,
      title: "Resume",
      text: "Download my latest resume",
      button: "Download",
      link: contact.resume
    }
  ];

  return (
    <section id="contact">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">
            Get In Touch
          </h2>

          <p
            className="text-center mb-5"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            I'm always open to discussing new opportunities,
            collaborating on exciting projects, or simply
            connecting with fellow developers.
          </p>

          <div className="contact-grid">

            {

              cards.map((card) => {

                const Icon = card.icon;

                return (

                  <div
                    className="contact-card"
                    key={card.title}
                  >

                    <Icon className="contact-icon" />

                    <div className="contact-title">

                      {card.title}

                    </div>

                    <div className="contact-text">

                      {card.text}

                    </div>

                    <a
                      href={card.link}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-button"
                    >

                      {card.button}

                    </a>

                  </div>

                );

              })

            }

          </div>

        </motion.div>

      </Container>

    </section>
  );

};

export default Contact;