import React from "react";
import ExpItem from "./ExpItem";
import {experienceArr} from "../assets/data"


export default function Experience() {

  return (
    <div className="w-2/5 flex-col">
      <div className="text-slate-900 text-2xl font-bold">
        <p>Experience</p>
      </div>
      <div className="bg-blue-500 h-[3px] w-[100px] my-3"></div>
      <div>
        {experienceArr.map((e) => {
          return (
            <ExpItem
              role={e.role}
              company={e.company}
              description={e.description}
              date={e.date}
            />
          );
        })}
      </div>
    </div>
  );
}
