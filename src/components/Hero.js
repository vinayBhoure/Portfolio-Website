import React from "react";

export default function Hero() {
  return (
    <div className="max-w-screen-lg mx-auto text-center">
      <div className="flex flex-col gap-3 py-12">
        <h1 className="text-4xl font-medium ">Hey, I'm Vinay Bhoure</h1>
        <p className="text-2xl">A Mern Stack Developer</p>
        <p className="text-2xl italic">
          As a thank you for pre-ordering my book, I'll be giving you an
          exclusive ticket to The Feel-Good Productivity Annual Planning
          Workshop. Let's make 2024 the best year of your life
        </p>
      </div>
      <div>
        {/* <img src={no} alt="hero"/> */}
      </div>
    </div>
  );
}
