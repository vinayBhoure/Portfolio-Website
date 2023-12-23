import React from "react";
import ProjectItem from "./ProjectItem";
import { projectArr } from "../assets/data";

export default function Projects() {

  return (
    <div className="w-2/5">
      <div className="text-slate-900 text-2xl font-bold">Popular Projects</div>
      <div className="border-l-4 border-blue-400 flex-col my-3 px-1">
        <h6 className="text-blue-400 font-semibold italic ">"<span className="text-black">I made this project through my learnings.</span>"</h6>
        
      </div>
      <div className="flex flex-col gap-3">
        {projectArr.map((project) => {
          return (
            <ProjectItem
              pname={project.name}
              description={project.description}
              image={project.image}
              githubURL={project.githubURL}
              livedemo={project.livedemo}
            />
          );
        })}
      </div>
    </div>
  );
}
