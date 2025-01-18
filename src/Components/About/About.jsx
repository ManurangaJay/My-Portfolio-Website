import React from "react";
import "./About.css";
import mypic from "../../assets/my-picture_2.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>
          <span className="about-word">About</span> Me
        </h1>
        <hr className="about-me-hr" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img
            src={mypic}
            alt="My Picture"
            style={{ width: "300px", borderRadius: "30px" }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            I am a proactive and dedicated final-year <strong>Computer Engineering undergraduate 
            in University of Jaffna</strong> with a strong aptitude for teamwork and problem-solving. 
            I am an enthusiastic learner, eager to explore emerging technologies and apply 
            innovative ideas to drive success and growth in any organization I contribute to. 
            </p>
            <p>
            I’m passionate about<strong> full-stack development, blockchain,</strong> and creating innovative solutions using modern technologies. 
            I am working with <strong>React, Spring Boot</strong>, and <strong>blockchain</strong> technologies to build scalable and secure applications.
            </p>
            <p>
            I’m also interested in <strong>machine learning and AI</strong>, applying these technologies to create intelligent and efficient solutions. 
            I constantly explore new tools and frameworks to improve my development skills.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="skills-section">
        <div className="technical-skills">
          <h2>Technical Skills:</h2>
          <div className="skills-list">
            <ul>
              <li>
                <strong>Languages:</strong> Java, Python, C++
              </li>
              <li>
                <strong>Frameworks:</strong> Spring Boot
              </li>
              <li>
                <strong>Web Development:</strong> ReactJS, HTML, CSS, JavaScript
              </li>
              <li>
                <strong>Cloud:</strong> AWS, Google Cloud
              </li>
              <li>
                <strong>Database:</strong> MySQL, PostgreSQL, MongoDB
              </li>
              <li>
                <strong>Other Tools:</strong> Git, GitHub, Docker, Jira, Figma
              </li>
              <li>
                <strong>Testing:</strong> Postman, Junit
              </li>
              <li>
                <strong>Data Science & AI:</strong> Machine Learning, Deep
                Learning, Artificial Intelligence, Data Mining
              </li>
            </ul>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="about-soft-skills">
          <h2>Soft Skills:</h2>
          <div className="soft-skills-columns">
            <div className="soft-skills-column">
              <ul>
                <li>Excellent Communication</li>
                <li>Excellent Team Work</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <div className="soft-skills-column">
              <ul>
                <li>Leadership</li>
                <li>Time Management</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
