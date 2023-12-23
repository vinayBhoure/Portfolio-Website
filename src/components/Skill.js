import React from "react";
import { skillCard } from "../assets/data";
import SkillCard from "./SkillCard";

export default function Skill() {
  return (
    <div className=" max-w-screen-lg m-auto my-5">
      <div>
        <p className="text-slate-900 text-2xl font-bold">Skills I Work On</p>
      </div>
      <div className="bg-blue-500 h-[3px] w-[100px] my-3"></div>
      {/* skill card 👇 */}
      <div className="flex p-7 h-3/4 flex-wrap gap-14 justify-center ">
        {skillCard.map((item, i) => {
          return <SkillCard image={item.image} key={i} />;
        })}
      </div>
    </div>
  );
}
