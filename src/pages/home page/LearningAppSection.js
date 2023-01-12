import React from "react";
import { Link } from "react-router-dom";

function LearningAppSection(props) {
  return (
    <div className={`${props.backgroundColor} homepageSections`}>
      <div className="sectionHeading">E-Learning App</div>
      <div className="sectionParagraph">
        "Corner Stone is an upshot of inmost research and study by conversant
        scholars and highly qualified academic intelligentsia. Cornerstone is
        the very first stride in Pakistan in the early childhood education
        sector to meet the international standards of 21st century. Our vision
        is to introduce the latest, technical and scientifically tested and
        approved trends and approaches in Early Childhood Teaching and Learning
        process in Pakistan."
      </div>
      <Link to="/learningapp">Download app</Link>
      <Link to="/learningapp">
        <button className={`sectionButton ${props.backgroundColor}`}>
          Learn more
        </button>
      </Link>
    </div>
  );
}

export default LearningAppSection;
