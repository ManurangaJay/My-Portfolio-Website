import React from "react";
import "./Contact.css";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import github_icon from "../../assets/github.png";
import linkedin_icon from "../../assets/linkedin.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6cc9738f-86f0-4585-a2ed-38a4d18dee84");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>
          <span className="contact-title-get-in-touch">Get in touch </span>with
          me
        </h1>
        <hr className="contact-title-hr" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to work on new projects, So feel free to
            contact me for your works........
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>
                <a href="mailto:manurangajayawardhana@gmail.com">
                  manurangajayawardhana@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>
                +94 70863051
              </p>
            </div>
            <div className="contact-detail">
            <img
                src={linkedin_icon}
                alt="LinkedIn"
                style={{ cursor: "pointer" }}
                onClick={() => window.open("https://www.linkedin.com/in/manuranga-jayawardhana-761288229/", "_blank")}
              />
              <a
                href="https://www.linkedin.com/in/manuranga-jayawardhana-761288229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>ManurangaJayawardhana</p>
              </a>
            </div>
            <div className="contact-detail">
            <img
                src={github_icon}
                alt="GitHub"
                style={{ cursor: "pointer" }}
                onClick={() => window.open("https://github.com/Manurangajay", "_blank")}
              />
              <a
                href="https://github.com/Manurangajay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Manurangajay</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Embilipitiya, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
