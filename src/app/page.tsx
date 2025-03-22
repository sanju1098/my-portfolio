"use client";
import { ArrowDownToLine, SquareArrowOutUpRight } from "lucide-react";
import { topProjects } from "@src/config/project";
import { myWork } from "@src/config/mywork";
import { ProjectCard } from "@src/components/ui/ProjectCard";
import { Button } from "@src/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="lg:mx-12 mx-5 my-8">
        <div className="flex justify-between flex-wrap">
          <div className="w-full">
            <h1 className="text-4xl font-bold gradient-text mb-8">
              Hi There! 👋
            </h1>
            <h2 className="text-4xl my-4 font-semibold">
              I&apos;m{" "}
              <span className="text-primary text-4xl font-medium">
                Sanjay Kumar S R
              </span>
            </h2>
            <h3 className="text-3xl font-medium">
              Application Developer || Frontend Developer
            </h3>
            <p className="text-xl my-4 text-muted-foreground leading-relaxed">
              Professional Frontend Developer with 4+ years of experience in
              creating high-quality, user-centric web applications. Expertise in
              modern technologies such as React.js, TypeScript, and Next.js,
              combined with a strong understanding of core web development
              principles. Proficient in building responsive, dynamic, and
              scalable front-end solutions, optimizing website performance, and
              resolving complex code issues. Focused on leveraging best
              practices to deliver efficient, seamless user experiences and
              enhance overall application functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/assets/Resume.pdf"
                download="SanjayKumar-Resume"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white gradient-bg hover:opacity-90 transition-all duration-200">
                Download CV <ArrowDownToLine />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* What I Do Section */}
      <div className="m-4 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center">
          WHAT I DO
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {myWork.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Project */}
      <div className="my-10 animate-fade-in ">
        <h2 className="text-3xl mt-2 font-bold gradient-text text-center">
          PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-12">
          {topProjects.map((project: any, index: number) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              gitLink={project.gitLink}
              demoLink={project.demoLink}
              techStack={project.techStack}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Button
            className="flex items-center gap-2"
            onClick={() => router.push("/projects")}>
            More Projects
            <SquareArrowOutUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  );
}
