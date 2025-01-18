import React from "react";
import "./Hero.css";
import profPic from "../../assets/profile_pic.png";
import resume from "../../assets/D.D.V.M Jayawardhana - CV.pdf"; // Import your CV file
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profPic} alt=""></img>
      <h1>
        <span>I'm Manuranga, </span>
        Full Stack Developer in Sri Lanka
      </h1>
      <p>
        I'm an undergraduate student in Faculty of Engineering, University of
        Jaffna
      </p>
      <div className="hero-actions">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <a
          href={resume} // Link to the resume file
          download="Manuranga_Jayawardhana-Resume.pdf" // Specify the download file name
          className="hero-resume"
        >
          Get My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
