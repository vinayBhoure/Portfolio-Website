import React from "react";

export default function SkillCategory({ category, skills, image }) {
  return (
    <div className=" w-1/4 m-auto flex-row text-center rounded-md hover:-translate-y-2 transition delay-100 shadow-xl h-3/4 p-1">
      <div className="h-18 flex justify-center ">
        <img src={image} alt="" className="object-cover w-1/4"/>
      </div>
      <h3 className="text-xl text-slate-900 font-bold">{category}</h3>
      <div className="flex-wrap flex py-5 justify-center gap-3">
        {skills.map((skill) => {
          return <span className="w-4/10 text-center border-2 p-1 text-sm rounded-md hover:border-slate-600 hover:bg-blue-400 hover:text-white ">{skill}</span>
        })}
      </div>
    </div>
  );
}
