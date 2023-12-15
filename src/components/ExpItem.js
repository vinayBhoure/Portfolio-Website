import React from "react";

export default function ExpItem({ role, company, date, description, location }) {
  return (
    <div className="py-3 flex-col border-b">
      <p className="text-sm font-bold opacity-50">{role}</p>
      <h2 className="text-base font-bold opacity-80">{company}</h2>
      <p className="text-base leading-5 font-light">{description}</p>
      <p className="text-xs italic mt-2">{date}</p>
    </div>
  );
}
