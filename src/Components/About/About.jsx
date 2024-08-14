import React from "react";
import "./About.css";
import mypic from "../../assets/my-picture.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>
          <span className="about-word">About</span> Me
        </h1>
        <hr className="about-me-hr" />
        {/* <img src={mypic} alt="" style={{ width: "300px" }} /> */}
      </div>
      <div className="about-section">
        <div className="about-left">
          <img
            src={mypic}
            alt=""
            style={{ width: "300px", borderRadius: "30px" }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a final-year Computer Engineering student at the University of
              Jaffna, specializing in web development, machine learning, and AI.{" "}
            </p>
            <p>
              I’m passionate about building web applications and exploring new
              technologies, with a strong focus on creating innovative solutions
              through machine learning and deep learning models.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivemets">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>5+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
