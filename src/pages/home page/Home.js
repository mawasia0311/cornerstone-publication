import React from "react";
import "./Home.css";
import Carousel from "../../components/Caraousel";
import ProductSection from "./ProductSection";
import LearningAppSection from "./LearningAppSection";
import EventSection from "./EventSection";
import AboutUsSection from "./AboutUsSection";
import TestimonialSections from "./TestimonialSections";

function Home() {
  return (
    <div className="homePage">
      <Carousel />
      <ProductSection backgroundColor={`sectionWhite`} />
      <LearningAppSection backgroundColor={"sectionGrey"} />
      <EventSection backgroundColor={"sectionWhite"} />
      <AboutUsSection backgroundColor={"sectionGrey"} />
      <TestimonialSections backgroundColor={"sectionWhite"} />
    </div>
  );
}

export default Home;
