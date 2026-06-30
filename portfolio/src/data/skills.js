import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills=[

{

category:"Frontend",

items:[

{
name:"React",
icon:FaReact,
description:"Component-Based UI"
},

{
name:"JavaScript",
icon:SiJavascript,
description:"ES6+ Development"
},

{
name:"HTML5",
icon:FaHtml5,
description:"Semantic Markup"
},

{
name:"CSS3",
icon:FaCss3Alt,
description:"Responsive Styling"
},

{
name:"Bootstrap",
icon:FaBootstrap,
description:"Responsive UI"
}

]

},

{

category:"Backend",

items:[

{
name:"Python",
icon:SiPython,
description:"Programming Language"
},

{
name:"Django",
icon:SiDjango,
description:"Backend Framework"
},

{
name:"Django REST",
icon:SiDjango,
description:"RESTful APIs"
}

]

},

{

category:"Database",

items:[

{
name:"PostgreSQL",
icon:SiPostgresql,
description:"Relational Database"
},

{
name:"MySQL",
icon:SiMysql,
description:"SQL Database"
}

]

},

{

category:"Tools",

items:[

{
name:"Git",
icon:FaGitAlt,
description:"Version Control"
},

{
name:"GitHub",
icon:FaGithub,
description:"Code Hosting"
},

{
name:"VS Code",
icon:VscVscode,
description:"Code Editor"
},

{
name:"Postman",
icon:SiPostman,
description:"API Testing"
}

]

}

];

export default skills;