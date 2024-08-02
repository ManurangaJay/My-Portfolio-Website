import React from "react";
import "./About.css";
import mypic from "../../assets/my-picture.jpg";

const About = () => {
  return (
    <div className="about">
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
            <p>afdsafdsaf</p>
            <p>
              afdfa adsfdsafdsa sad f dsafds aasfdsafdsa sadfadsfdsaf asfdsafds
              asfadsf safdsaf dsafds fdsfsdaf ds fds f dsa fads f dsaf da sf
              dsaf dsa dsf fdsafdsafdsaf dsfdsa fds f sad f dsa fdsaf dsaf dsf
              dsafdsf
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
