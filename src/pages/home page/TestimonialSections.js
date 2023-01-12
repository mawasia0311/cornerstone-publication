import React, { useState } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import testiImg from "../../assets/testimonial.jpg";

const testimonials = [
  {
    text: "We tried CornerStone books in our different campuses. We found that the children studying CornerStone books performed better than the children studying conventional syllabuses.  We are thankful to CornerStone for introducing us to new ways of teaching and learning.",
    person: "Parent",
  },
  {
    text: "Adapting our educating ways to CornerStone innovative learning materials and trainings was an outstanding experience for our teachers and students. We found this multi intelligence course a very comprehensive leaning methodology. Audio/Visual aids are amazing and extremely helpful to clear the concepts of the subject matter.",
    person: "Teacher",
  },
  {
    text: "Now our team is more efficient and our students are more intelligent. Great thanks to CornerStone.  More than 80% better results we found after teaching CornerStone syllabus in our campuses. CornerStone books, audio/visual aids, teacher guides and training programs cover all aspect of teaching and learning. We appreciate CornerStone’s efforts.",
    person: "Parent",
  },
  {
    text: "Now our team is more efficient and our students are more intelligent. Great thanks to CornerStone.  More than 80% better results we found after teaching CornerStone syllabus in our campuses. CornerStone books, audio/visual aids, teacher guides and training programs cover all aspect of teaching and learning. We appreciate CornerStone’s efforts.",
    person: "Student",
  },
];

function TestimonialSections(props) {
  const [currunt, setCurrunt] = useState(1);

  const incrementIndex = () => {
    if (currunt === testimonials.length - 1) {
      setCurrunt(0);
    } else {
      setCurrunt(currunt + 1);
    }
  };

  const decrementIndex = () => {
    if (currunt === 0) {
      setCurrunt(testimonials.length - 1);
    } else {
      setCurrunt(currunt - 1);
    }
  };

  return (
    <div
      className={`${props.backgroundColor} homepageSections`}
      style={{ paddingBottom: "50px" }}
    >
      <div
        className="sectionHeading"
        style={{ marginBottom: "0px", paddingBottom: "0px" }}
      >
        Testimonials
      </div>
      <div className="testimonialSection">
        <div onClick={decrementIndex}>
          <ArrowCircleLeftOutlinedIcon fontSize="large" />
        </div>
        <div id="testimonial">
          <div className="testimonialText">
            <p className="quotes">"</p>
            <p className="testimonialText">{testimonials[currunt].text}</p>
            <p className="quotes">"</p>
          </div>
          <div className="testimonialPerson">
            {testimonials[currunt].person}
          </div>
        </div>
        <div onClick={incrementIndex}>
          <ArrowCircleRightOutlinedIcon fontSize="large" />
        </div>
      </div>
      <img className="sectionImage" src={testiImg} alt="." />
    </div>
  );
}

export default TestimonialSections;
