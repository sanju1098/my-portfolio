import React from "react";
import Image from "next/image";
import { Github, SquareArrowOutUpRight } from "lucide-react";

export const ProjectCard = ({
  image,
  title,
  description,
  gitLink,
  demoLink,
  techStack,
}: {
  image: any;
  title: string;
  description: string;
  gitLink?: string;
  demoLink?: string;
  techStack: string[];
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-[#e0e0e0dc] dark:bg-slate-700 border-2 border-border hover:scale-105 transition-transform duration-300 hover:border-primary">
      <div className="w-full h-[200px] relative hidden lg:block">
        <Image
          className="object-fill p-4"
          src={image}
          alt={title}
          layout="fill"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black dark:text-white">
          {title}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-2 overflow-hidden">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-primary dark:bg-slate-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        {gitLink && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 flex justify-center items-center gap-1">
            Source Code <Github size={18} />
          </a>
        )}
      </div>
    </div>
  );
};
