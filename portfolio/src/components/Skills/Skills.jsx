import "./Skills.css";

import {Container,Row,Col} from "react-bootstrap";

import {motion} from "framer-motion";

import skills from "../../data/skills";

const Skills=()=>{

return(

<section id="skills">

<Container>

<h2 className="section-title">
Skills
</h2>

{

skills.map((category)=>(

<div
key={category.category}
className="mb-5"
>

<h3 className="skill-category">

{category.category}

</h3>

<Row>

{

category.items.map((skill)=>{

const Icon=skill.icon;

return(

<Col
lg={3}
md={4}
sm={6}
xs={12}
key={skill.name}
className="mb-4"
>

<motion.div

whileHover={{
y:-8,
scale:1.03
}}

transition={{
duration:.25
}}

className="skill-card"
>

<Icon
className="skill-icon"
/>

<div className="skill-name">

{skill.name}

</div>

<div className="skill-description">

{skill.description}

</div>

</motion.div>

</Col>

);

})

}

</Row>

</div>

))

}

</Container>

</section>

);

};

export default Skills;