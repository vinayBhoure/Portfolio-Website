import React from "react";
import Projects from "./Projects";
import Experience from "./Experience";
export default function WorkExperience() {
  return (
    <div className="flex justify-between  max-w-screen-lg m-auto my-5 p-3 border-t">
      <Experience />
      <Projects />
    </div>
  );
}
