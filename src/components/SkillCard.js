import React from "react";

function SkillCard({ image }) {
  return (
    <div className="w-[75px] flex items-center">
      <img
        src={image}
        alt="skill"
        className="hover:drop-shadow-2xl hover:-translate-y-1 hover:scale-125 hover:filter-none
        filter grayscale  transition transitiion-delay-50 rounded-lg "
      />
    </div>
  );
}

export default SkillCard;
