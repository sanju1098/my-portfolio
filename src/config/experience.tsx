import shine from "../assets/Images/shine-unisys.png";
import thankyou from "@src/assets/Images/thanku-unisys.png";

export const workExperiences = [
  {
    company: "Unisys India Private Limited.",
    title: "Application Development Engineer",
    period: "Jun 2023  - April 2025",
    projects: [
      {
        name: "Airline Retailing",
        responsibilities: [
          "Designed a responsive web app for IATA Airline Retailing Order View RS (21.3.4), reducing page load time by 25% and presenting data in a user-friendly format.",
          "Developed an end-to-end order creation flow with Formik for dynamic validation and ensured accurate XML data submission on the NDC client platform.",
        ],
      },
      {
        name: " Digital Engineer – Chat UI & Admin UI",
        responsibilities: [
          "Designed an AI-driven chat interface using Next.js, integrating the useChat AI/React Vercel SDK for document-based responses.",
          `Optimized performance by reducing API load times, implementing feedback logic for improved response accuracy, 
          and architecting a solution for seamless chat history management.`,
        ],
      },
      {
        name: "Unisys Framework – UI UX Framework",
        responsibilities: [
          `Developed a React-based Web Component Library with 75+ reusable components, enhancing flexibility and reusability,
          and documented component properties and types in Storybook for clear and effective documentation.`,
          `Implemented a Global Theme setup for user customization, and integrated Jest with React Testing Library,
          writing extensive unit tests to ensure high code quality and performance.`,
        ],
      },
    ],
    recognition: [
      {
        image: shine,
        link: "https://app.espresa.com/r/shared/643a0a4f-7974-46ea-be54-953178b2e353/",
      },
      {
        image: thankyou,
        link: "https://drive.google.com/file/d/1IPG9lzQ3pobGsTzYaTBJz_CatxH3Wjj0/view?usp=drive_link",
      },
    ],
  },
  {
    company: "Harlalka Services India Private Limited.",
    title: "Frontend Developer",
    period: "Oct 2021 – Jun 2023",
    projects: [
      {
        name: " VMware CSP Market Place (Client: VMWare)",
        responsibilities: [
          `Established form validation, error handling, and form factor validations using both functional and class components for
          VMware solution, while managing version control, platform integration, and EULA agreements for VMware validated solutions.`,
          `Enhanced UI components by utilizing the VMware Clarity Design System and showcased them with Storybook
          for clear documentation and consistent UI development.`,
        ],
      },
    ],
  },
  {
    company: "Sixth Circle Technologies Pvt Ltd.",
    title: "Intern Web Developer",
    period: "Feb 2021 – Sep 2021",
    projects: [
      {
        name: " Custom Local Retail Market Aggregator Platform (Custom LMAP)",
        responsibilities: [
          `Created PostgreSQL database schemas for product and stock tables, developed views, serializers, and models for the 
          Product and Order models using Python, Django, and Django Rest Framework, and implemented full - stack UI screens to 
          ensure seamless API integration.`,
        ],
      },
    ],
  },
];
