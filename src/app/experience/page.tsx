import { workExperiences } from "@src/config/experience";
import { Briefcase, Calendar, Building, Award } from "lucide-react";

export default function Skills() {
  return (
    <>
      <div className="text-3xl font-bold text-primary flex justify-center items-center gap-2 text-center mt-4">
        Experience <Briefcase className="w-9 h-9" />
      </div>
      <div className="text-xl lg:m-4 m-2">
        I have extensive experience working with frontend technologies like
        React.js, TypeScript, HTML, and CSS. I focus on building scalable,
        high-performance applications with seamless user experiences. My
        expertise includes creating interactive UIs, optimizing performance, and
        maintaining code quality using tools like Jest, Storybook, and React
        Testing Library.
      </div>

      <div className="relative space-y-12 animate-fade-in">
        {/* Timeline line for large screens */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 transform -translate-x-1/2 hidden lg:block" />

        {workExperiences.map((exp: any, index: number) => (
          <div key={index} className="relative mx-8">
            {/* Stepper layout for large screens */}
            <div
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 lg:block">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
              </div>

              {/* Content */}
              <div
                className={`w-full lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}>
                <div className="bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:border-primary transition-colors duration-300">
                  {/* Company Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <Building className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>

                  {/* Title Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <span className="text-lg">{exp.title}</span>
                  </div>

                  {/* Period Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Projects Section */}
                  <div className="space-y-4">
                    <div className="grid gap-4">
                      {exp.projects.map((project: any, pIndex: number) => (
                        <div
                          key={pIndex}
                          className="bg-background/50 p-4 rounded-lg border border-primary/10">
                          <h5 className="text-primary text-lg font-semibold mb-2">
                            {project.name}
                          </h5>
                          <div className="mt-2">
                            <ul className="list-disc list-inside space-y-2">
                              {project.responsibilities.map(
                                (responsibility: any, rIndex: number) => (
                                  <li
                                    key={rIndex}
                                    className="text-muted-foreground text-sm">
                                    {responsibility}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
