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
      <div className="w-1/2 flex flex-col gap-2 justify-center">
        <div className="box-border flex justify-center ">
          <img
            src={profilepic}
            alt="vinay's image"
            className="rounded-lg shadow-inner drop-shadow-2xl border-8 border-neutral-300"
          />
        </div>

        <div className=" py-2">
          <ul className="flex justify-center gap-2">
            <li className="border-2 border-black p-2 rounded-3xl">
              <a href="https://twitter.com/viinaystwt/" target="_blank">
                <abbr title="Twitter">
                  {" "}
                  <FaTwitter size={30} />
                </abbr>
              </a>
            </li>
            <li className="border-2 border-black p-2 rounded-3xl">
              <a href="https://github.com/vinayBhoure/" target="_blank">
                <abbr title="Github">
                  {" "}
                  <FaGithub size={30} />
                </abbr>
              </a>
            </li>
            <li className="border-2 border-black p-2 rounded-3xl">
              <a
                href="https://www.linkedin.com/in/vinay-bhoure-440b84216/"
                target="_blank"
              >
                <abbr title="Linkedin">
                  {" "}
                  <FaLinkedin size={30} />
                </abbr>
              </a>
            </li>
            <li className="border-2 border-black p-2 rounded-3xl">
              <a href="#" target="_blank">
                <abbr title="Instagram">
                  <FaInstagram size={30} />
                </abbr>
              </a>
            </li>
            <li className="border-2 border-black p-2 rounded-3xl">
              <a href="https://leetcode.com/bhoure21/" target="_blank">
                <abbr title="Leetcode">
                  {" "}
                  <SiLeetcode size={30} />
                </abbr>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 w-fit basis-1/2">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">About Vinay Bhoure</h1>
          <p >
            Hey there, I'm Vinay Bhoure, hailing from Indore, MP, India. After
            my schooling in Indore, I made my academic move to Bhopal. Currently
            in my third year, I'm diving into the world of computer science at
            NIT Bhopal.
          </p>
          <p>
            After participating in a June 2023 hackathon, I immersed myself in
            web development for several months, leading to a secured internship.
            Committed to continuous learning, I am enthusiastic about embracing
            new technologies as I persist in this rewarding journey.{" "}
          </p>
          <p>
            Passionate full-stack developer skilled in MERN stack, Golang, and
            PostgreSQL. Experienced in crafting diverse projects, showcased in
            my portfolio. Actively seeking freelance opportunities to contribute
            expertise
          </p>
          <p>
            Bringing industry-level Golang and PostgreSQL expertise from
            Codesmith Dev internship. Under mentorship, mastered both,
            constructing a robust Golang API. Employed SQLc for efficient query
            management.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
