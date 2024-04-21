import Hero_person from "./assets/images/Hero/result.png";

import html from "./assets/images/Skills/html.png";
import tailwindCSS from "./assets/images/Skills/tailwindCSS.png";
import JavaScript from "./assets/images/Skills/js.png";
import nodejs from "./assets/images/Skills/node.png";
import reactjs from "./assets/images/Skills/react.png";
import typescript from "./assets/images/Skills/ts.png";
import graphQL from "./assets/images/Skills/graphQL.png";
import expressJS from "./assets/images/Skills/expressJS.png";
import mongoDB from "./assets/images/Skills/mongoDB.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo4 from "./assets/images/Services/logo4.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";
import avatar5 from "./assets/images/Testimonials/avatar5.png";

import Hireme_person from "./assets/images/Hireme/person.png";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "WASIB",
    LastName: "ILYAS",
    btnText: "Hire Me",
    btnResume: "Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Web development",
      },
      {
        count: "12+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Html",
        para: "Crafting Web Experiences with HTML",
        logo: html,
        point1: "Proficient in writing clean and semantic HTML code.",
        point2:
          "Skilled in creating visually appealing designs and layouts using CSS",
        point3:
          "Experienced in developing responsive websites that adapt to different devices and screen sizes.",
        point4:
          "Familiar with optimizing HTML elements for improved search engine visibility.",
        point5:
          "Capable of ensuring cross-browser compatibility for consistent website performance.",
      },
      {
        name: "Tailwind CSS",
        para: "Stylish Web Simplicity",
        logo: tailwindCSS,
        point1:
          "Proficient in utilizing the utility-first framework to rapidly build modern and responsive web interfaces.",
        point2:
          "Skilled in creating dynamic and mobile-friendly designs using Tailwind CSS.",
        point3:
          "Experienced in customizing and extending Tailwind CSS to match unique design requirements.",
        point4:
          "Capable of efficiently styling components and UI elements with Tailwind CSS classes.",
        point5:
          "Knowledgeable in using Tailwind CSS's built-in utilities for creating flexible and grid-based layouts.",
      },
      {
        name: "JavaScript",
        para: "Unleashing the Power of JavaScript",
        logo: JavaScript,
        point1: "Proficient in core JavaScript concepts and syntax.",
        point2:
          "Skilled in dynamically modifying and interacting with HTML elements using JavaScript.",
        point3:
          "Experienced in handling user interactions and events using JavaScript.",
        point4:
          "Capable of working with asynchronous JavaScript, including Promises and async/await.",
        point5:
          "Proficient in integrating and leveraging various Web APIs using JavaScript.",
      },
      {
        name: "Node js",
        para: "Empowering Server-Side Solutions",
        logo: nodejs,
        point1:
          "Proficient in building server-side applications using Node.js.",
        point2:
          "Skilled in developing web applications with the Express.js framework.",
        point3:
          "Experienced in designing and implementing RESTful APIs using Node.js.",
        point4:
          "Capable of integrating databases like MongoDB or PostgreSQL with Node.js applications.",
        point5:
          "Proficient in using npm to manage and install Node.js packages and dependencies.",
      },
      {
        name: "React js",
        para: "Revolutionizing Web Interfaces",
        logo: reactjs,
        point1: "Proficient in developing web applications using React.js.",
        point2:
          "Skilled in building modular and reusable components with React.js.",
        point3:
          " Experienced in managing application state using React's built-in state management or libraries like Redux.",
        point4:
          "Proficient in utilizing UI libraries like Material-UI or Ant Design to enhance the visual appearance of React applications.",
        point5:
          "Skilled in leveraging React Hooks and Context API for state management and functional components.",
      },
      {
        name: "TypeScript",
        para: "Web Dev Mastery",
        logo: typescript,
        point1: "Proficient in developing web applications with TypeScript.",
        point2:
          "Skilled in leveraging TypeScript's static typing to catch errors during development.",
        point3:
          "Capable of utilizing TypeScript's class-based approach for building scalable applications.",
        point4:
          "Knowledgeable in leveraging TypeScript's tooling and integration with popular IDEs.",
        point5:
          "Proficient in integrating and working with third-party libraries in TypeScript projects.",
      },
      {
        name: "Express JS",
        para: "Streamlined Web Development",
        logo: expressJS,
        point1:
          "Proficient in building web applications using the Express.js framework.",
        point2:
          "Skilled in designing and implementing RESTful APIs with Express.js.",
        point3:
          "Experienced in leveraging Express.js middleware for request processing and custom logic.",
        point4:
          "Capable of setting up routes and controllers for handling HTTP requests in Express.js.",
        point5:
          "Skilled in implementing secure authentication and authorization mechanisms in Express.js.",
      },
      {
        name: "MongoDB",
        para: "Powering Data-Driven Applications",
        logo: mongoDB,
        point1:
          "Proficient in working with MongoDB, a NoSQL database solution.",
        point2:
          "Skilled in designing and creating efficient data models in MongoDB.",
        point3:
          "Experienced in performing Create, Read, Update, and Delete operations in MongoDB.",
        point4:
          "Capable of optimizing MongoDB queries for improved performance.",
        point5:
          "Knowledgeable in utilizing MongoDB's Aggregation Framework for complex data analysis.",
      },
      {
        name: "GraphQL",
        para: "Empowering Flexible APIs",
        logo: graphQL,
        point1:
          "Proficient in working with GraphQL, a modern API query language.",
        point2:
          "Skilled in designing and defining GraphQL schemas for data models and operations.",
        point3:
          "Experienced in writing GraphQL queries and mutations to retrieve and modify data.",
        point4:
          "Capable of implementing resolvers and handling data fetching in GraphQL.",
        point5:
          "Skilled in using Apollo Server and Apollo Client for GraphQL server and client-side integration.",
      },
      {
        name: "Python",
        para: "Empowering Efficient Development",
        logo: python,
        point1: "Proficient in writing Python code for various applications.",
        point2:
          "Experienced in performing data analysis and manipulation using Python libraries like Pandas.",
        point3:
          "Capable of automating tasks and writing scripts in Python for increased efficiency.",
        point4:
          "Knowledgeable in integrating and working with APIs using Python.",
        point5:
          "Experienced in utilizing Python libraries like TensorFlow or Scikit-learn for machine learning tasks.",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend Development",
        para: "Specialized in frontend development, transforming your design visions into captivating web experiences. With expertise in HTML, CSS, and JavaScript, I create visually appealing and interactive interfaces that engage your audience and leave a lasting impression.",
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: "My backend development expertise empowers your web applications with seamless functionality. Leveraging technologies like Node.js and databases such as MongoDB, I build robust and scalable backend systems that handle complex tasks and ensure smooth operations.",
        logo: services_logo2,
      },
      {
        title: "Data Science",
        para: "My data science solutions unlock valuable insights from your data, driving business success and informed decision-making. With expertise in data analysis, machine learning, and predictive modeling, I help you harness the power of data to gain a competitive edge and achieve your goals.",
        logo: services_logo4,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "HooBank - Payment GateWay Website",
        image: project1,
        projectLink:
          "https://github.com/WasibIlyas786/Payment_Gateway_Website-HooBank-",
        liveHosted: "https://paymentbyhoobank.vercel.app/",
      },
      {
        title: "Profolio Website - v1",
        image: project2,
        projectLink:
          "https://github.com/WasibIlyas786/Professional_Porfolio_Website_wasibilyas",
        liveHosted: "https://wasibilyas.vercel.app/",
      },
      {
        title: "Amazon.com - Landing Page",
        image: project3,
        projectLink: "https://github.com/WasibIlyas786/landingPage-Amazon.com",
        liveHosted: "https://landing-page-amazon-com.vercel.app/",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Wasib is an incredible full-stack developer. He built a patient management application for me using React.js, Node.js, PostgreSQL, and REST API. The application exceeded my expectations by far. Wasib's professionalism and deep understanding of the project were impressive. I highly recommend his services.”",
        img: avatar5,
        name: "Ali Armaghan - Pakistan",
      },
      {
        review:
          "“I was amazed by the skills of Wasib, who effortlessly combined React.js, Node.js, and Express.js to develop a high-performing and feature-rich application. His proficiency in these technologies truly stood out.”",
        img: avatar2,
        name: "Tom Alex - Germany",
      },
      {
        review:
          "“Wasib's expertise in React.js and Python has been instrumental in my project. I found him on Upwork.com and have been impressed by his knowledge and experience in these technologies. His excellent communication skills and cooperative nature have made our collaboration a seamless experience.”",
        img: avatar3,
        name: "David Patton - USA",
      },
      {
        review:
          "“Working with Wasib was a pleasure. His mastery of Python and TypeScript, along with his deep knowledge of web development, brought a unique level of sophistication to my project. I am highly impressed with the outcome.”",
        img: avatar4,
        name: "Zeeshan Ahmed - Pakistan",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    para: "Need web development services? Look no further! I offer front-end, back-end, and full-stack development solutions. Whether you require a stunning user interface, robust server-side functionality, or a complete end-to-end solution, I have you covered. Contact me today for a consultation or to discuss your project requirements. Let me bring your web development vision to life",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "contact@wasibilyas.com",
        icon: GrMail,
        link: "mailto:wasibilyas786@gmail.com",
      },
      {
        text: "Wasib Ilyas",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/wasibilyas/",
      },
      {
        text: "wasib_ilyas",
        icon: BsInstagram,
        link: "https://www.instagram.com/wasib_ilyas/",
      },
      {
        text: "Wasib Ilyas",
        icon: BsGithub,
        link: "https://github.com/WasibIlyas786/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
