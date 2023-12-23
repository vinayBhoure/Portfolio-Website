import React from "react";
import { runningProjectArr } from "../assets/data";

export default function RunningProject() {
  return (
    <div className="max-w-screen-lg mx-auto py-5 border-t">
      <div className="text-[2rem] font-bold">
        Project Currentlty I'm working on:
      </div>

      <div className="h-1 w-[100px] bg-blue-500 my-5"></div>

      <div className="flex gap-5">
        {/* project content👇 */}

        {runningProjectArr.map((project) => {
          return (
            <div className="p-3 w-1/2">
              <div className="p-3">
                <img
                  src={project.image}
                  alt="image of project"
                  className="rounded-lg "
                />
              </div>
              <div className="flex flex-col gap-2 m-3">
                <p className="text-xl font-bold opacity-80 underline">{project.title}</p>
                <p className=""><span className="font-semibold text-blue-800 ">{project.categogry}: </span>{project.description}</p>
                <p className="opacity-50 text-base font-bold">
                  {project.dates}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
