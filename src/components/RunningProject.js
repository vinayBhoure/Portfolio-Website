import React from "react";

export default function RunningProject() {
  const src =
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fHww";
  return (
    <div className="max-w-screen-lg mx-auto py-5 border-t">
      <div className="text-[2rem] font-bold">
        Project Currentlty I'm working on:
      </div>

      <div className="h-1 w-[100px] bg-blue-500 my-5"></div>
      {/* project content👇 */}
      <div className="flex gap-5">
        <div className="p-3 w-1/2">
          <div>
            <img src={src} alt="image of project" className="rounded-lg " />
          </div>
          <div className="flex flex-col gap-2 m-3">
            <p className="text-xl font-bold">title</p>
            <p className="opacity-50 text-base font-bold">date</p>
          </div>
        </div>

        <div className="p-3 w-1/2">
          <div>
            <img src={src} alt="image of project" className="rounded-lg " />
          </div>
          <div className="flex flex-col gap-2 m-3">
            <p className="text-xl font-bold">title</p>
            <p className="opacity-50 text-base font-bold">date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
