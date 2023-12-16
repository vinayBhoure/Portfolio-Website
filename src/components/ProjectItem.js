import React from "react";

export default function ProjectItem({
  pname,
  description,
  image,
  livedemo,
  githubURL,
}) {
  return (
    <div>
      <div
        className="flex gap-3 justify-center py-4 bg-slate-50 rounded-lg 
              transition delay-50 hover:-translate-y-0.5
    "
      >
        <div className="flex items-center">
          <abbr title="Github Repo">
            <a href={githubURL} target="_blank">
              <img className="h-12 w-18" src={image} alt="404 error" />
            </a>
          </abbr>
        </div>
        <div className="w-2/3">
          <a href={livedemo} target="_blank" >
            <abbr title="Live Demo" className="no-underline">
              {" "}
              <h3 className="text-slate-800 font-bold hover:text-blue-600">
                {pname}
              </h3>
            </abbr>{" "}
          </a>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
