import React from "react";
import "./MyWork.css";
import myWorkData from "../../assets/My_Work.js";
import arrowIcon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>
          My <span className="latest-work-words">Latest Work</span>
        </h1>
        <hr className="my-work-hr" />
      </div>
      <div className="mywork-container">
        {myWorkData.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
