import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>
          My <span className="services-word">Services</span>
        </h1>
        <hr className="my-services-hr" />
        {/* <img src="" alt="" /> */}
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              {/* <div className="services-readmore">
                <p>Read More</p>
                <img src={arrowIcon} alt="" />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
