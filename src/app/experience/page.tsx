import { workExperience } from "@src/config/experience";
import { Award, Briefcase, BriefcaseBusiness, Calendar } from "lucide-react";

export default function Skills() {
  return (
    <>
      <div className="text-3xl font-bold text-primary flex justify-center items-center gap-2 text-center mt-4">
        Experience <BriefcaseBusiness className="w-9 h-9" />
      </div>
      <div className="space-y-8 animate-fade-in">
        {workExperience.map((exp: any, index: number) => (
          <div
            key={index}
            className="bg-card rounded-lg p-6 md:p-8 mx-12 my-6 relative overflow-hidden group hover:border-primary border-2 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="relative">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">
                  {exp.title}
                </h3>
              </div>
              <div className="flex items-center space-x-2 text-accent mb-2">
                <Briefcase className="w-4 h-4" />
                <p>{exp.company}</p>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <p>
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-foreground/80">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
