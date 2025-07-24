import {
  logo,
  backend,
  creator,
  mobile,
  web,
  css,
  mysql,
  express,
  mui,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  AbMedia,
  Ecom,
  MoneyExchange,
  fashionBlog,
  Tak,
  StonePaper,
  cafe,
  CharWordCounter,
  tempConverter,
  Animation,
  Port,
  socialMedia,
} from "../assets";

// Import gmark separately
import gmark from "../assets/company/gmark-logo.png";
import Edureka from "../assets/company/Edureka_Ver_Enter_Logo.webp";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Mern-Stack Developer",
    company_name: "Gmark",
    icon: gmark,
    iconBg: "#ffffff",
    date: "May 2025 - present",
    points: [
      "Developing and maintaining Admin pannel using MERN technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer Trainee (Paid)",
    company_name: "Edureka",
    icon: Edureka,
    iconBg: "#ffffff",
    date: "2023 - 2024",
    points: [
      "Completed Full Stack Developer training focused on the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Gained practical experience by building multiple full-stack web applications.",
      "Earned certification with a strong grade.",
    ],
  },
];

const projects = [
  {
    name: "MERN eCommerce Project",
    description:
      "Video show full functionality. The link is no longer available[free hosting period ending].",
    tags: [
      { name: "mern", color: "green-text-gradient" },
      { name: "video", color: "blue-text-gradient" },
    ],
    image: Ecom,
    source_code_link: "https://github.com/Piyush2Kaushal/MERN-PROJECT-",
  },
  {
    name: "Currency Converter",
    description:
      "A currency converter tool for converting between different global currencies.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: MoneyExchange,
    source_code_link: "https://github.com/Piyush2Kaushal/Currency-Converter",
  },
  {
    name: "Fashion Blog",
    description:
      "A stylish blog template built for showcasing man's fashion content.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: fashionBlog,
    source_code_link: "https://github.com/Piyush2Kaushal/Fashion_blog",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "A simple web-based Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: Tak,
    source_code_link:
      "https://github.com/Piyush2Kaushal/Tic-Tac-Toe-game-using-HTML-CSS-and-JavaScript",
  },
  {
    name: "Rock Paper Game",
    description:
      "A game of Stone, Paper, and Scissors built using HTML, CSS, and JavaScript.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: StonePaper,
    source_code_link:
      "https://github.com/Piyush2Kaushal/Stone-Paper-Scissors-Game",
  },
  {
    name: "My Cafe (Template)",
    description:
      "A template for a cafe/restaurant website, designed with HTML and CSS.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: cafe,
    source_code_link:
      "https://github.com/Piyush2Kaushal/HTML-CSS-Template---Cafe-Restaurant",
  },
  {
    name: "Word Counter",
    description:
      "A tool to count the number of words and characters in a given text.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: CharWordCounter,
    source_code_link:
      "https://github.com/Piyush2Kaushal/Word-and-Character-Counter",
  },
  {
    name: "Temperature Converter",
    description:
      "A web tool to convert temperature between Celsius and Fahrenheit.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: tempConverter,
    source_code_link: "https://github.com/Piyush2Kaushal/Temperature-Converter",
  },
  {
    name: "CSS Animations",
    description:
      "A collection of CSS animation effects for learning transitions and transformations.",
    tags: [
      { name: "css", color: "blue-text-gradient" },
      { name: "animation", color: "pink-text-gradient" },
    ],
    image: Animation,
    source_code_link:
      "https://github.com/Piyush2Kaushal/CSS-Animation-Transition-and-Transformation-",
  },
  {
    name: "My Portfolio",
    description: "A short portfolio website.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: Port,
    source_code_link: "https://github.com/Piyush2Kaushal/Portfolio",
  },
  {
    name: "MERN Chat Application",
    description:
      "A chat application built using the MERN stack. Project is in development and will be fully functional once backend is integrated.",
    tags: [{ name: "mern", color: "green-text-gradient" }],
    image: socialMedia,
    source_code_link: "#",
  },
  {
    name: "AB Media App",
    description:
      "A basic AB media sharing app built with the MERN stack where users can upload and view tourist location content. This project includes basic CRUD operations and user authentication.",
    tags: [
      { name: "mern", color: "green-text-gradient" },
      { name: "media", color: "blue-text-gradient" },
    ],
    image: AbMedia,
    source_code_link: "https://github.com/Piyush2Kaushal/Ab-media-Project",
  },
];

export { services, technologies, experiences, projects };
