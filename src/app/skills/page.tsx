import {
  Box,
  Laptop,
  LaptopMinimalCheck,
  SquareChartGantt,
  Zap,
} from "lucide-react";

export default function Skills() {
  return (
    <>
      <div className="text-3xl font-bold text-primary flex justify-center items-center gap-2 text-center mt-4">
        Tech Stack & Tools <LaptopMinimalCheck className="w-9 h-9" />
      </div>
      <div className="text-xl lg:m-4 m-2">
        I have hands-on experience working with various technologies, from
        programming languages to frameworks, tools, and package managers. My
        expertise lies in building scalable and high-performance applications
        while ensuring maintainability and seamless user experiences.
      </div>
      <div className="mx-8 my-4 text-2xl flex items-center gap-2 text-primary">
        <span className="flex items-center">Programming Languages</span>
        <Laptop className="w-8 h-8" />
      </div>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <div className="mx-8 my-4 text-2xl flex items-center gap-2 text-primary">
        <span className="flex items-center">Frameworks & Libraries</span>
        <Zap className="w-8 h-8" />
      </div>
      <ul>
        <li>
          React JS, TypeScript, TanStack Query (React Query), Redux, Context
          API, Vite, Material UI, Next.js, Sass, Emotion CSS, Styled Components,
          and Tailwind CSS,
        </li>
      </ul>
      <div className="mx-8 my-4 text-2xl flex items-center gap-2 text-primary">
        <span className="flex items-center">Tools & Build Systems</span>
        <SquareChartGantt className="w-8 h-8" />
      </div>
      <ul>
        <li>Webpack, Storybook, Docker, and Figma</li>
      </ul>

      <div className="mx-8 my-4 text-2xl flex items-center gap-2 text-primary">
        <span className="flex items-center">Package Managers</span>
        <Box className="w-8 h-8" />
      </div>
      <ul>
        <li>NPM and Yarn</li>
      </ul>
    </>
  );
}
