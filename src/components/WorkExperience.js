import React from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import { experienceArr, projectArr } from "../assets/data";

export default function WorkExperience() {
  return (
    <div className="flex justify-between  max-w-screen-lg m-auto my-5 p-3 border-t">
      {experienceArr.length > 0 && <Experience />}
      {projectArr.length > 0 && <Projects />}
    </div>
  );
}
