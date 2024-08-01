import React from "react";
import "./Hero.css";
import profPic from "../../assets/profile_pic.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profPic} alt="" style={{ width: "300px" }}></img>
      <h1>
        <span>I'm Manuranga,</span> Full Stack Developer in Sri Lanka
      </h1>
      <p>
        I'm an undergraduate student in Faculty of Engineering, University of
        Jaffna
      </p>
      <div className="hero-actions">
        <div className="hero-connect">Connect with me </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
