import React from "react";

export default function ProjectItem({ pname, description , image, livedemo, githubURL}) {
  return (
    <div>
    <div className="flex gap-3 justify-center py-4 bg-slate-50 rounded-lg 
              transition delay-50 hover:-translate-y-0.5
    ">
      <div className="flex items-center">
      <a href={githubURL}>
        <img className="h-12 w-18" src={image} alt="404 error" />
        </a>
      </div>
      <div className="w-2/3">
       <a href={livedemo}> <h3 className="text-slate-800 font-bold hover:text-blue-600" >{pname}</h3> </a>
        <p className="text-sm">{description}</p>
      </div>
    </div>
    </div>
  );
}
