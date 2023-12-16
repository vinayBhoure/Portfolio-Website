import React from "react";
import Form from "./Form";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PiCopyright } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="mt-5">
      <div className="flex mx-auto max-w-screen-lg p-5 gap-9 border-t ">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">Contact me</h1>
          <p className="text-lg py-2"> "Your emails always warm the cockles of my heart"</p>
          <p className="text-lg">
            Join a growing community of more than 412,000 (🤯) friendly readers.
            Every Sunday I share actionable productivity tips, practical life
            advice, and high-quality insights from across the web, directly to
            your inbox
          </p>
        </div>
        <div className="w-1/2">
          <Form />
        </div>
      </div>

      {/* black portion */}
      <div className="bg-black text-white flex justify-around py-12">
        <p className="text-md relative">
          <PiCopyright className="absolute top-[6px] left-[-18px]" />
          Vinay Bhoure 2024. All rights reserved.
        </p>
        <ul className="flex gap-[15px]">
          <li>
            <a href="https://twitter.com/viinaystwt/" target="_blank">
              <abbr title="Twitter">
                {" "}
                <FaTwitter className="" />
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
  );
}
