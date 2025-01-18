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
              I'm a final-year Computer Engineering student at the University of
              Jaffna, specializing in web development, machine learning, and AI.
            </p>
            <p>
              I’m passionate about building web applications and exploring new
              technologies, with a strong focus on creating innovative solutions
              through machine learning and deep learning models.
            </p>
          </div>
          <div className="technical-skills">
            <h2>Technical Skills:</h2>
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
          <div className="about-soft-skills">
            <h2>Soft Skills:</h2>
            <div className="soft-skills-columns">
              <div className="soft-skills-column">
                <ul>
                  <li>Excellent Communication</li>
                  <li>Excellent Team Work</li>
                </ul>
              </div>
              <div className="soft-skills-column">
                <ul>
                  <li>Leadership</li>
                  <li>Time Management</li>
                </ul>
              </div>
              <div className="soft-skills-column">
                <ul>
                  <li>Problem Solving</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
