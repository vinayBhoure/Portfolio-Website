import React from "react";
import SkillCategory from "./SkillCategory";
import { skillsArr } from "../assets/data";

export default function Skill() {

  return (
    <div className=" max-w-screen-lg m-auto">
      <div >
        <p className="text-slate-900 text-2xl font-bold">Skills I Work On</p>
      </div>
      <div className="bg-blue-500 h-[3px] w-[100px] my-3"></div>
      <div className="flex py-7 h-3/4 ">
        {skillsArr.map((item, i) => {
          return (
            <SkillCategory category={item.category} skills={item.skills} image={item.image}/>
          );
        })}
      </div>
    </div>
  );
}
