import React from "react";
import vectorImg from "../assets/vectorImg.jpg";
import picofme from '../assets/picofme.jpg'

export default function Hero() {
  return (
    <div className="max-w-screen-lg mx-auto h-[93vh] flex flex-col">
      {/* div for upper body 👇 */}
      <div className="flex  items-center relative basis-1/2">
        <div className="ml-14">
          <h1>Full Stack Developer</h1>
          <p>Creating Seamless and innovative solutions</p>
          <button className="bg-blue-400 rounded-lg ">Contact us</button>
        </div>

        <div className="absolute top-[55px] right-[-55px]">
          <img
            src={picofme}
            alt="vinay bhoure"
            className="rounded-[50%] max-h-[70%] max-w-[70%] "
          />
        </div>
      </div>
      {/* div for lower bopdy 👇*/}
      <div className="basis-1/2 flex items-center">
        <div className="basis-1/2">
          <img src={vectorImg} alt="vector-img" className="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
