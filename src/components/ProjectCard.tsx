import React from "react";
import Image from "next/image";
import { GitHub, OpenInNew, Visibility } from "@mui/icons-material";

const Card = ({
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-[#29344c] border-2 hover:scale-105 transition-transform duration-300">
      <div className="w-full h-[200px] relative hidden md:block">
        <Image className="object-fill" src={image} alt={title} layout="fill" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base line-clamp-2 overflow-hidden">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
            className="text-[#00c7ff]-500 hover:text-blue-500 transition-all duration-300">
            Source Code <GitHub className="text-blue-400" />
          </a>
        )}

        {demoLink && (
          <>
            <span className="mx-2 text-white">|</span>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00c7ff]-500 hover:text-blue-500 transition-all duration-300">
              Live Preview <OpenInNew className="text-blue-400" />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
