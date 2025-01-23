import firebaseAppImg from "../assets/Images/firebase.png";
import chatAppImg from "../assets/Images/chatappUI.png";
import clerkAuthAppImg from "../assets/Images/clerkAuth.png";

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
