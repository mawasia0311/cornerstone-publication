import React from "react";
import "./learningApp.css";
import appImage from "../../assets/appImage.jpg";
import DownloadSection from "./DownloadSection";
import UsageVideo from "./UsageVideo";

function LearningApp() {
  return (
    <div className="learningApp">
      <div className="aboutApp" id="aboutApp">
        <img className="appImage" src={appImage} alt="." />
        <div>
          <p className="heading" id="question">
            What is CornerStone E-Learning App?
          </p>
          <p id="aboutAppAns">
            "Cornerstone Publications is the very first stride in Pakistan in
            the early childhood education sector to meet the international
            standards of 21st century. Cornerstone Publications want to reach
            the point of excellence and perfection in the Education sector in
            Pakistan as never before."
          </p>
        </div>
      </div>
      <DownloadSection />
      <UsageVideo />
    </div>
  );
}

export default LearningApp;
