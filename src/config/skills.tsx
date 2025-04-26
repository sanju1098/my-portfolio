import { DiW3C } from "react-icons/di";
import {
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNpm,
  FaReact,
  FaSass,
  FaYarn,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiPostman,
  SiReactquery,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";

export const skills = {
  languages: [
    {
      icon: <SiJavascript size="3rem" fill="#F0DB4F" />,
      name: "JavaScript",
    },
    { icon: <SiTypescript size="3rem" fill="#3178c6" />, name: "TypeScript" },
    { icon: <FaHtml5 size="3rem" fill="#F06529" />, name: "HTML" },
    { icon: <FaCss3Alt size="3rem" fill="#264DE4 " />, name: "CSS" },
  ],
  frameworks: [
    { icon: <FaReact size="3rem" fill="#06BCEE" />, name: "React JS" },
    { icon: <SiNextdotjs size="3rem" />, name: "Next.JS" },
    { icon: <SiRedux size="3rem" fill="#764ABC" />, name: "Redux Toolkit" },
    {
      icon: <SiReactquery size="3rem" fill="#f73f51" />,
      name: "TanStack Query",
    },
    { icon: <SiMui size="3rem" fill="#1976D2" />, name: "Material UI" },
    { icon: <FaSass size="3rem" fill="#BF4080" />, name: "Sass" },
    {
      icon: <SiTailwindcss size="3rem" fill="#07b0ce" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiStyledcomponents size="3rem" fill="#ffd803" />,
      name: "Tailwind CSS",
    },
  ],
  testing: [
    {
      icon: <SiJest size="3rem" fill="#9b455e" />,
      name: "Jest",
    },
    {
      icon: <SiTestinglibrary size="3rem" fill="#f03d3c" />,
      name: "React Testing Library",
    },
    {
      icon: <DiW3C size="3rem" fill="#005a9c" />,
      name: "WCAG",
    },
  ],
  tools: [
    { icon: <SiVite size="3rem" fill="#a94eff" />, name: "Vite" },
    { icon: <SiWebpack size="3rem" fill="#1b74ba" />, name: "Webpack" },
    { icon: <SiStorybook size="3rem" fill="#e95e88" />, name: "StoryBook" },
    { icon: <FaDocker size="3rem" fill="#1d63ed" />, name: "Docker" },
    { icon: <FaFigma size="3rem" fill="#f65535" />, name: "Figma" },
    { icon: <SiPostman size="3rem" fill="#f56933" />, name: "Postman" },
  ],
  packages: [
    { icon: <FaNpm size="3rem" fill="#c63636" />, name: "NPM" },
    { icon: <FaYarn size="3rem" fill="#2b8ab5" />, name: "Yarn" },
    { icon: <FaGithub size="3rem" />, name: "Github" },
  ],
};
