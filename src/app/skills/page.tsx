"use client";
import { skills } from "@src/config/skills";
import { Award, Box, Laptop, SquareChartGantt, Zap } from "lucide-react";
import { ReactNode } from "react";
import { SiVitest } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="text-3xl font-bold text-primary flex justify-center items-center gap-2 text-center mt-4">
        Tech Stack & Tools <Award className="w-9 h-9" />
      </div>
      <div className="text-xl lg:m-4 m-2">
        I have hands-on experience working with various technologies, from
        programming languages to frameworks, tools, and package managers. My
        expertise lies in building scalable and high-performance applications
        while ensuring maintainability and seamless user experiences.
      </div>

      <div className="mx-8 my-4 text-2xl font-semibold flex items-center gap-2 text-primary">
        <span className="flex items-center">Programming Languages</span>
        <Laptop className="w-8 h-8" />
      </div>
      <div className="flex flex-wrap gap-8 mx-8 my-4 text-md">
        {skills.languages.map(
          (
            { icon, name }: { icon: ReactNode; name: string },
            index: number,
          ) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center">
              <div>{icon}</div>
              <p>{name}</p>
            </div>
          ),
        )}
      </div>
      <br />

      <div className="mx-8 my-4 text-2xl font-semibold flex items-center gap-2 text-primary">
        <span className="flex items-center">Frameworks & Libraries</span>
        <Zap className="w-8 h-8" />
      </div>
      <div className="flex flex-wrap gap-8 mx-8 my-4 text-lg">
        {skills.frameworks.map(
          (
            { icon, name }: { icon: ReactNode; name: string },
            index: number,
          ) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center">
              <div>{icon}</div>
              <p>{name}</p>
            </div>
          ),
        )}
      </div>
      <br />

      <div className="mx-8 my-4 text-2xl font-semibold flex items-center gap-2 text-primary">
        <span className="flex items-center">Testing Tools</span>
        <SiVitest className="w-8 h-8" />
      </div>
      <div className="flex flex-wrap gap-8 mx-8 my-4 text-lg">
        {skills.testing.map(
          (
            { icon, name }: { icon: ReactNode; name: string },
            index: number,
          ) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center">
              <div>{icon}</div>
              <p>{name}</p>
            </div>
          ),
        )}
      </div>
      <br />

      <div className="mx-8 my-4 text-2xl font-semibold flex items-center gap-2 text-primary">
        <span className="flex items-center">Tools & Build Systems</span>
        <SquareChartGantt className="w-8 h-8" />
      </div>
      <div className="flex flex-wrap gap-8 mx-8 my-4 text-lg">
        {skills.tools.map(
          (
            { icon, name }: { icon: ReactNode; name: string },
            index: number,
          ) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center">
              <div>{icon}</div>
              <p>{name}</p>
            </div>
          ),
        )}
      </div>
      <br />

      <div className="mx-8 my-4 text-2xl font-semibold flex items-center gap-2 text-primary">
        <span className="flex items-center">Package Managers</span>
        <Box className="w-8 h-8" />
      </div>
      <div className="flex flex-wrap gap-8 mx-8 my-4 text-lg">
        {skills.packages.map(
          (
            { icon, name }: { icon: ReactNode; name: string },
            index: number,
          ) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center">
              <div>{icon}</div>
              <p>{name}</p>
            </div>
          ),
        )}
      </div>
      <br />
    </>
  );
}
