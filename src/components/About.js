import React from "react";
import { image } from "../data/data";  // Import the image from your data file

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Hello! I'm a passionate web developer, constantly learning new skills, 
        and working on exciting projects. I love solving problems with code and creating impactful solutions.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
