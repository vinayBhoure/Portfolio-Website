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
        <div className="w-1/2 flex flex-col">
          <h1 className="text-3xl font-bold">Contact me</h1>
          {/* <p className="text-lg py-2 italic"> "Unlock the digital potential for your business with just one click your customized solution is just an email away."</p> */}

          <p className="text-md py-2 mb-3 italic">
            {" "}
            "Get the perfect digital solution for your business by sending us an
            email. We're just one message away!!"
          </p>
          <p className="text-md pb-1">
            Need web solutions? Contact us! We specialize in transforming
            digital goals into reality, enhancing online presence, and
            optimizing business processes.{" "}
            <span className="font-semibold">
              Contact us for a seamless journey to digital success.
            </span>
          </p>
        </div>
        <div className="w-1/2">
          <Form />
        </div>
      </div>

      {/* black portion */}
      <div className="bg-black text-white flex justify-around py-12">
        <p className="text-md relative items-center flex">
          <PiCopyright className="absolute top-[35%] left-[-7%]" />
          Vinay Bhoure 2024. All rights reserved.
        </p>

        <ul className="flex justify-center gap-2">
          <li className="border-2 border-white p-2 rounded-3xl">
            <a href="https://twitter.com/viinaystwt/" target="_blank">
              <abbr title="Twitter">
                {" "}
                <FaTwitter size={30} />
              </abbr>
            </a>
          </li>
          <li className="border-2 border-white p-2 rounded-3xl">
            <a href="https://github.com/vinayBhoure/" target="_blank">
              <abbr title="Github">
                {" "}
                <FaGithub size={30} />
              </abbr>
            </a>
          </li>
          <li className="border-2 border-white p-2 rounded-3xl">
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
          <li className="border-2 border-white p-2 rounded-3xl">
            <a href="#" target="_blank">
              <abbr title="Instagram">
                <FaInstagram size={30} />
              </abbr>
            </a>
          </li>
          <li className="border-2 border-white p-2 rounded-3xl">
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
  );
}
