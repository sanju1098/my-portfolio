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
          `Developed a responsive UI using React.js and TypeScript to display IATA Airline Retailing
          Order View RS (v21.3.4) data, implementing code splitting, lazy loading,
          and performance optimizations to reduce load time by 25%.`,
          `Built an end-to-end order creation flow with progress indicators and integrated
          accurate XML data submission on the NDC client platform.`,
        ],
      },
      {
        name: " Digital Engineer – Chat UI & Admin UI",
        responsibilities: [
          `Configured Vite.js for optimized builds, reducing build time by 45%, 
          and deployed applications to Azure using Docker with efficient multi-stage deployment.`,
          `Designed and built a conversational chat interface using Next.js and 
          Vercel’s useChat SDK for dynamic, document-based responses.`,
          `Enhanced performance by minimizing API load times and implemented feedback logic 
          for improved response accuracy, while architecting a robust chat history management system.`,
        ],
      },
      {
        name: "Unisys Framework – UI UX Framework",
        responsibilities: [
          `Architected and maintained a scalable React component library with 75+ reusable
          and accessible components, following modern UI architecture best practices and
          implementing a global theming system for user customization.`,
          `Integrated Storybook for interactive component documentation and applied Jest/React 
          Testing Library for automated testing to ensure high-quality, production-ready code.`,
          `Built a comprehensive demo web app to showcase components across Web and Mobile 
          and actively participated in peer code reviews to uphold code standards and
          maintain consistency.`,
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
          `Developed well-structured, responsive, and reusable UI components using React.js, 
          HTML5, and CSS3 for VMware, with form validation, error handling, and
          integration of EULA agreements using both functional and class components.`,
          `Improved accessibility to 80% WCAG compliance using A11Y best practices and NVDA testing, 
          while proactively debugging UI issues to maintain high code quality and performance.`,
          `Utilized the VMware Clarity Design System, documented components with Storybook, 
          and actively participated in code reviews, identifying performance bottlenecks and
          promoting scalable coding practices across modules.`,
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
          `Created PostgreSQL database schemas for product and stock tables, developed views,
          serializers, and models for the Product and Order models using Python, Django, and
          Django Rest Framework, and implemented full - stack UI screens to ensure seamless
          API integration.`,
        ],
      },
    ],
  },
];
