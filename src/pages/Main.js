import React from "react";
import Skill from "../components/Skill";
import WorkExperience from "../components/WorkExperience";
import Blog from "../components/Blog";
import About from "../components/About";
import Footer from "../components/Footer";
import RunningProject from "../components/RunningProject";
import Hero from "../components/Hero";

import { skillCard, blogArr, runningProjectArr } from "../assets/data";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      {skillCard.length > 0 && <Skill />}
      <WorkExperience />
      {blogArr.length > 0 && <Blog />}
      {runningProjectArr.length > 0 && <RunningProject />}
      <About />
      <Footer />
    </div>
  );
}
