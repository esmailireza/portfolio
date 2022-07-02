import { RiComputerLine, RiCodeBoxFill } from "react-icons/ri";
import { MdAppSettingsAlt } from "react-icons/md";
import {SiGoogleoptimize} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import { IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b>  and and <b>next.js</b>",
  },

  {
    Icon: MdAppSettingsAlt,
    title: "Production and maintenance",
    about:
      "Production and maintenance of websites and web application user interfaces",
  },
  {
    Icon: SiGoogleoptimize,
    title: "Looking at SEO best practices",
    about: "<b>SEO</b> best practices are a set of tasks designed to help improve a website’s search engine rankings.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "TailWind",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "MaterialUI",
    level: "80",
  },
  
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Sass",
    level: "80",
  },

  {
    Icon: BsCircleFill,
    name: "Git",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "NextJS",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "70",
  },
];

export const projects: IProject[] = [
  {
    name: "Panel Admin Dashboard",
    image_path: "/images/panel1.jpg",
    deployed_url:" https://admin-dashboard-panell.netlify.app/",
    github_url: "https://github.com/esmailireza/Admin-Dashboard-Panel",
    category: ["react"],
    description:
      "React Admin Panel With ReactJS and State management with context and use scss for styling",
    key_techs: ["React"],
  },

  {
    name: "Portfolio",
    image_path: "/images/portfolio.jpg",
    deployed_url: "",
    github_url: "",
    category: ["react","next", "redux", "tailwind"],
    description:
      "Build Portfolio with ReactJS,NextJS,TypeScript,TailWind",
    key_techs: [
      "React",
      "Next",
      "Redux",
      "Tailwind",
    ],
  },
  {
    name: "weather-app",
    image_path: "/images/weather-app.JPG",
    deployed_url: "https://weather-app-template.netlify.app/",
    github_url: "https://github.com/esmailireza/weather-app",
    category: ["html","css","javascript","chart js"],
    description:
      "Implement weather api app with html,css,javascript and chart.js library.",
    key_techs: [
      "Html",
      "Css",
      "Javascript",
      "Chart js",
    ],
  },
  {
    name: "clothing-store",
    image_path: "/images/clothing-store.JPG",
    deployed_url: "https://clothing-store-online.netlify.app/",
    github_url: "https://github.com/esmailireza/clothing-store",
    category: [
      "react",
      "bootstrap",
      "material ui",
    ],
    description:
      "Clothing store project with javascript , react. From Hooks useState, useReducer, useContext,useHistory and etc, has been used. Icons and select are implemented using react-icons and react-select librarys. Components are reusable. custom Hooks have also been used.",
    key_techs: [
      "React",
      "Bootstrap",
      "Material ui",
    ],
  },
  {
    name: "music-player-project",
    image_path: "/images/music-player-project.JPG",
    deployed_url: "https://music-player-pro.netlify.app/",
    github_url: "https://github.com/esmailireza/music-player-project",
    category: [
      "html",
      "css",
      "vanilla",
    ],
    description:
      "Implement music player using html, css, javascript.",
    key_techs: [
      "Html",
      "Css",
      "vanilla",
    ],
  },
  {
    name: "travel-with-us",
    image_path: "/images/travel-with-us.JPG",
    deployed_url: "https://travel-with.netlify.app/",
    github_url: "https://github.com/esmailireza/travel-with-us",
    category: [
      "html",
      "css",
      "vanilla",
    ],
    description:
      "Home page of the project where you can search for your desired trip by selecting the area and date of the trip ",
    key_techs: [
      "Html",
      "Css",
      "vanilla",
    ],
  },
  {
    name: "landing-page",
    image_path: "/images/landing-page-with-tailwind.JPG",
    deployed_url: "https://managee-landing-page.netlify.app/",
    github_url: "https://github.com/esmailireza/landing-page-with-tailwind",
    category: [
      "html",
      "css",
      "tailwind",
    ],
    description:
      "implement landing page with tailwind css",
    key_techs: [
      "Html",
      "Css",
      "Tailwind",
    ],
  },
  {
    name: "pizza-restaurant",
    image_path: "/images/pizza-restaurant.JPG",
    deployed_url: "https://pizza-restaurant-demo.netlify.app/",
    github_url: "https://github.com/esmailireza/pizza-restaurant",
    category: [
      "react",
      "next",
    ],
    description:
      "Implement admin dashboard panel using next js.",
    key_techs: [
      "React",
      "Next",
    ],
  },
];
