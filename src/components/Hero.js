import React from "react";
import vectorImg from "../assets/vectorImg.jpg";
import picofme from "../assets/picofme.jpg";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const scrollHandler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-screen-lg mx-auto h-[93vh] flex flex-col">
      {/* div for upper body 👇 */}
      <div className="flex  items-center relative basis-1/2">
        <div className="ml-14">
          <h1 className="text-3xl font-bold ">MERN Stack Developer</h1>
          <p className="text-xl leading-10">
            Creating Seamless and innovative digital solutions
          </p>
          <button
            className="bg-blue-500 rounded-lg py-1 px-4 font-semibold text-white border-2
          active:-translate-y-0.5
          hover:bg-blue-600 hover:border-2 hover:border-blue-900
          "
            onClick={scrollHandler}
          >
            Contact us
          </button>
        </div>

        <div className="absolute top-[55px] right-[-55px]">
          <img
            src={picofme}
            alt="vinay bhoure"
            className="max-h-[70%] max-w-[70%]"
          />
        </div>
      </div>
      {/* div for lower bopdy 👇*/}
      <div className="basis-1/2 flex items-center">
        <div className="basis-1/2">
          <img
            src={vectorImg}
            alt="vector-img"
            className="mix-blend-multiply"
          />
        </div>
        <div className="basis-1/2 h-full py-16">
          <div >
            <p className="text-xs font-bold text-blue-600">WHAT I DO</p>
            <h2 className="text-xl font-semibold my-1 ">
              Your Partner in digital transformation
            </h2>
            <p>
              Greetings, I'm 
              <span className="font-semibold text-blue-500 text-lg">
                Vinay Bhoure
              </span>
              , a web developer based in Indore, India. I'm passionate about
              bringing both technical and visual aspects of digital products to
              life. I find pure joy in the process of creating, constantly
              expanding my knowledge, and
              brainstorming ways to enhance user experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
