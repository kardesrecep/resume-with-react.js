import React from "react";
import "./about.css"
import Intro from "./intro/Intro";
import SectionHeader from "../section-header/SectionHeader";
import Skills from "./skills/Skills";

const About = () => {
  return (
    <section id="about" className="about">
      <SectionHeader title="About Me"  isButtonVisible={true} />
      <Intro />
      <Skills/>
      


    </section>
  );
};

export default About;
