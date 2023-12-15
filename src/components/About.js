import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profilepic from "../assets/profilepic.jpg";

export default function About() {
  return (
    <div className="flex max-w-screen-lg mx-auto py-12 border-t ">
      <div className="w-1/2 flex flex-col gap-2">
        <div className="box-border flex justify-center ">
          <img src={profilepic} alt="vinay's image" className="rounded-lg "/>
        </div>

        <div className=" py-2">
          <ul className="flex justify-center gap-2">
            <li>
              <a href="https://twitter.com/viinaystwt/" target="_blank">
                <abbr title="Twitter">
                  {" "}
                  <FaTwitter />
                </abbr>
              </a>
            </li>
            <li>
              <a href="https://github.com/vinayBhoure/" target="_blank">
                <abbr title="Github">
                  {" "}
                  <FaGithub />
                </abbr>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vinay-bhoure-440b84216/"
                target="_blank"
              >
                <abbr title="Linkedin">
                  {" "}
                  <FaLinkedin />
                </abbr>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <abbr title="Instagram">
                  <FaInstagram />
                </abbr>
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/bhoure21/" target="_blank">
                <abbr title="Leetcode">
                  {" "}
                  <SiLeetcode />
                </abbr>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 w-fit ">
      <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">About Vinay Bhoure</h1>
        <p>Full Stack Developer</p>
        <p>Skills: HTML, CSS, JS, React, Node, Express, MongoDB</p>
        <p>Projects: </p>
        <p>Blog: </p>
      </div>
       
      </div>
    </div>
  );
}
