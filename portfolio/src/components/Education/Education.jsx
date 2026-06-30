import "./Education.css";

import { Container } from "react-bootstrap";

import { motion } from "framer-motion";

import { FaGraduationCap } from "react-icons/fa";

import education from "../../data/education";

const Education = () => {

    return(

        <section id="education">

            <Container>

                <motion.div

                    initial={{opacity:0,y:40}}

                    whileInView={{opacity:1,y:0}}

                    transition={{duration:.6}}

                    viewport={{once:true}}

                >

                    <h2 className="section-title">

                        Education

                    </h2>

                    {

                        education.map((item)=>(

                            <div
                                className="education-card"
                                key={item.id}
                            >

                                <div className="education-icon">

                                    <FaGraduationCap/>

                                </div>

                                <h3 className="education-degree">

                                    {item.degree}

                                </h3>

                                <div className="education-institution">

                                    {item.institution}

                                </div>

                                <div className="education-university">

                                    {item.university}

                                </div>

                                <div className="education-location">

                                    {item.location}

                                </div>

                                <div className="education-duration">

                                    {item.duration}

                                </div>

                                <div className="coursework-title">

                                    Relevant Coursework

                                </div>

                                <ul className="coursework-list">

                                    {

                                        item.coursework.map((course)=>(

                                            <li key={course}>

                                                {course}

                                            </li>

                                        ))

                                    }

                                </ul>

                            </div>

                        ))

                    }

                </motion.div>

            </Container>

        </section>

    );

};

export default Education;