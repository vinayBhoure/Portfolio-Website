import React from "react";
import { navlinks } from "../assets/data";
import profilepic from "../assets/profilepic.jpg";
import resume from "../assets/resume.pdf";
import toast from "react-hot-toast";

export default function Navbar() {

  function downloadHandler() {
       toast.success("Downloading Resume");
       const image = "https://xobpoebtsusxzvfqpchs.supabase.co/storage/v1/object/sign/Data%20for%20portfolio/Vinay_profilefpic.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEYXRhIGZvciBwb3J0Zm9saW8vVmluYXlfcHJvZmlsZWZwaWMuanBnIiwiaWF0IjoxNzAyNDA4Mjc3LCJleHAiOjIwMTc3NjgyNzd9.8tv0GuwC2ISsxPp20ELBIGbFzn5EbrCNBEn_MT9AOtg&t=2023-12-12T19%3A11%3A18.173Z"
  }
  return (
    <div className="navbar flex max-w-screen-lg m-auto justify-between mt-4 items-center">
      <div href="/">
        <div className="text-2xl font-bold italic opacity-100 leading-10 flex gap-2 items-center hover:cursor-pointer">
          <img
            src={profilepic}
            alt="profilepic"
            className="w-12 rounded-full border-[3px] border-blue-600"
          />
          <p className="opacity-70">Vinay Bhoure</p>
        </div>
      </div>
      <div className="">
        <ul className="flex gap-10">
          {navlinks.map((link) => {
            return (
              <li className="leading-10 items-center text-lg leading-10 hover:cursor-pointer hover:text-blue-600">
                {link}
              </li>
            );
          })}
          <div className="hover:border-slate-600 active:shadow-lg active:-translate-y-1 transition delay-100 text-lg items-center flex hover:cursor-pointer bg-blue-400 rounded-lg px-4 border-p text-white">
            <a
              href={resume}
              download="Resume-Vinay Bhoure"
              target="_blank"
              rel="noreferrer"
              onClick={downloadHandler}
            >
              Resume
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}
