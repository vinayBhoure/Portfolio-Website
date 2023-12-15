import React from "react";

export default function BlogItem({ title, date, description, imageURL }) {
  return (
    <div className="flex gap-3 w-[45%] min-h-[150px] ">
      <div className="w-[35%] p-3">
        <img src={imageURL} alt="pic" className="object-cover"/>
      </div>
      <div className="w-[65%] flex flex-col gap-4">
        <div>
          <p className="text-xl text-blue-400">{title}</p>
          <p className="text-base"> {date}</p>
        </div>
        <pc className="text-base opacity-80">{description}</pc>
      </div>
    </div>
  );
}
