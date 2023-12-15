import React from "react";
import Skill from "../components/Skill";
import WorkExperience from "../components/WorkExperience";
import Blog from "../components/Blog";
import About from "../components/About";
import Footer from "../components/Footer";
import RunningProject from "../components/RunningProject";
import Hero from "../components/Hero";

export default function Main() {
  return (
    <div className="main ">
    <Hero/>
      <Skill />
      <WorkExperience />
      <Blog />
      <RunningProject/>
      <About />
      <Footer />
    </div>
  );
}
