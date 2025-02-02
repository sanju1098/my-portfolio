import Image from "next/image";
import { allProjects, otherProfiles } from "@src/config/project";
import { CodeXml, Github } from "lucide-react";
import Link from "next/link";

export default function Project() {
  return (
    <>
      <div className="text-3xl font-bold text-primary flex justify-center items-center gap-2 text-center mt-4">
        Projects <CodeXml className="w-9 h-9" />
      </div>
      <div className="text-xl lg:m-4 m-2">
        I've built websites using everything from HTML to React and Next.js.
        Here’s a list of projects I've worked on throughout my journey.
      </div>
      {allProjects.map((project: any, index: number) => {
        return (
          <section
            key={index}
            className="flex lg:flex-row flex-col items-center justify-evenly w-full p-8">
            <div className="lg:w-[45%] w-full p-4">
              <Image
                className="w-full object-fill h-auto rounded-lg shadow-lg"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-[55%] w-full flex flex-col justify-end text-center p-4">
              <h2 className="text-3xl font-bold ">{project.title}</h2>
              <p className="mt-4 text-lg text-justify">
                {project.description}{" "}
              </p>
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 flex justify-start items-center gap-1 ">
                Source Code <Github size={18} />
              </a>

              <div className="text-left">
                {project.techStack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-primary dark:bg-slate-500 dark:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Github & CodeSandbox */}
      <div className="flex flex-wrap justify-evenly mx-8 gap-6">
        {otherProfiles.map((profile: any, index: number) => {
          return (
            <div
              key={index}
              className="bg-card w-full md:w-5/12 rounded-lg p-6 md:p-8 hover:border-primary border-2 transition-colors duration-300 flex flex-col items-center text-center shadow-lg">
              {profile.icon}
              <h3 className="text-xl font-semibold mt-4">
                {profile.profileName}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {profile.description}
              </p>
              <Link
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-primary font-medium hover:underline">
                Visit {profile.profileName} →
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
