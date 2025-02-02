import firebaseAppImg from "../assets/Images/firebase.png";
import chatAppImg from "../assets/Images/chatappUI.png";
import clerkAuthAppImg from "../assets/Images/clerkAuth.png";
import notesImg from "../assets/Images/notes.png";
import weatherImg from "../assets/Images/weather.png";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCodeSandbox } from "react-icons/ai";

export const topProjects = [
  {
    image: firebaseAppImg,
    title: "Firebase Authentication with Google OAuth",
    description:
      "Developed a secure user authentication system within a React.js application, leveraging Firebase Authentication for seamless login functionality. The application features a modern and intuitive user interface built with Material-UI components, ensuring a polished user experience. Firebase Authentication provides robust, scalable security with support for multiple sign-in methods, including email/password and Google authentication.",
    gitLink: "https://github.com/sanju1098/Firebase-Authentication",
    techStack: ["React JS", "Material UI", "JavaScript", "CSS", "Firebase"],
  },
  {
    image: chatAppImg,
    title: "WebSocket Real-Time Chat Application",
    description:
      "Developed a WebSocket-based chat application that enables users to log in and engage in real-time conversations. The app supports dynamic user authentication and maintains chat connections for seamless communication. A login page with user identification and enhance the user experience. Material UI was used to ensure a consistent and user-friendly interface throughout the application.",
    gitLink: "https://github.com/sanju1098/react-websocket-chat",
    techStack: ["React JS", "Vite", "Material UI", "Node Server", "JavaScript"],
  },
  {
    image: clerkAuthAppImg,
    title: "Clerk-authenticated Web app with Mock.io API",
    description:
      "Next.js web application that integrates Clerk for secure user authentication, providing a seamless login and registration experience. It utilizes mockapi.io to handle API requests, simulating a real backend and enabling easy management of user data and interactions.",
    gitLink: "https://github.com/sanju1098/clerk-auth-nextjs",
    techStack: [
      "React JS",
      "TypeScript",
      "Next.JS",
      "Clert Next.JS",
      "Mock.io",
      "Tailwind CSS",
    ],
  },
];

export const allProjects = [
  {
    image: firebaseAppImg,
    title: "Firebase Authentication with Google OAuth",
    description:
      "Developed a secure user authentication system within a React.js application, leveraging Firebase Authentication for seamless login functionality. The application features a modern and intuitive user interface built with Material-UI components, ensuring a polished user experience. Firebase Authentication provides robust, scalable security with support for multiple sign-in methods, including email/password and Google authentication.",
    gitLink: "https://github.com/sanju1098/Firebase-Authentication",
    techStack: ["React JS", "Material UI", "JavaScript", "CSS", "Firebase"],
  },
  {
    image: notesImg,
    title: "Notes Management App – A Simple CRUD Application",
    description:
      "This project is a CRUD-based Notes Management Application that allows users to create, update, delete, and search for notes efficiently. Users can add new notes, edit existing ones, and remove unwanted notes while utilizing a search functionality to quickly find notes by name.",
    gitLink: "https://github.com/sanju1098/Simple-Notes-App",
    techStack: ["React JS", "Redux", "Bootstrap", "JavaScript", "CSS"],
  },
  {
    image: weatherImg,
    title: "WeatherNow - Real-Time Weather Updates",
    description:
      "WeatherNow allows users to search for any city or state and get real-time weather conditions, including temperature, to stay updated with the latest forecasts.",
    gitLink: "https://github.com/sanju1098/Simple-Notes-App",
    techStack: ["React JS", "Open Weathermap API", "JavaScript", "CSS"],
  },
  {
    image: chatAppImg,
    title: "WebSocket Real-Time Chat Application",
    description:
      "Developed a WebSocket-based chat application that enables users to log in and engage in real-time conversations. The app supports dynamic user authentication and maintains chat connections for seamless communication. A login page with user identification and enhance the user experience. Material UI was used to ensure a consistent and user-friendly interface throughout the application.",
    gitLink: "https://github.com/sanju1098/react-websocket-chat",
    techStack: ["React JS", "Vite", "Material UI", "Node Server", "JavaScript"],
  },
  {
    image: clerkAuthAppImg,
    title: "Clerk-authenticated Web app with Mock.io API",
    description:
      "Next.js web application that integrates Clerk for secure user authentication, providing a seamless login and registration experience. It utilizes mockapi.io to handle API requests, simulating a real backend and enabling easy management of user data and interactions.",
    gitLink: "https://github.com/sanju1098/clerk-auth-nextjs",
    techStack: [
      "React JS",
      "TypeScript",
      "Next.JS",
      "Clert Next.JS",
      "Mock.io",
      "Tailwind CSS",
    ],
  },
];

export const otherProfiles = [
  {
    profileName: "GitHub Profile",
    icon: <FaGithub size="3rem" className="text-gray-800 dark:text-white" />,
    description: `I actively maintain several repositories focused on frontend
            development, UI components, and performance optimizations. Explore
            my projects, code snippets, and experiments on GitHub.`,
    link: "https://github.com/sanju1098",
  },
  {
    profileName: "CodeSandbox Profile",
    icon: (
      <AiOutlineCodeSandbox
        size="3rem"
        className="text-gray-800 dark:text-white"
      />
    ),
    description: `Apart from my projects, I experiment with React components, UI
            designs, state management techniques, and JavaScript utilities in
            CodeSandbox. You’ll find reusable components, small projects, and
            interactive demos showcasing my work.`,
    link: "https://codesandbox.io/u/Sanjay%20Kumar%20SR",
  },
];
