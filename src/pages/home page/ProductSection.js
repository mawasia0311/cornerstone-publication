import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { products } from "../../ProductsApi";

function ProductSection(props) {
  const topFive = 7;
  const [currunt, setCurrunt] = useState(1);
  const [prev, setPrev] = useState(currunt - 1);
  const [next, setNext] = useState(currunt + 1);

  const checkCurrunt = () => {
    if (currunt === 0) {
      setPrev(topFive - 1);
      setNext(currunt + 1);
    } else if (currunt === topFive - 1) {
      setPrev(currunt - 1);
      setNext(0);
    } else {
      setPrev(currunt - 1);
      setNext(currunt + 1);
    }
  };

  const incrementIndex = () => {
    if (currunt === topFive - 1) {
      setCurrunt(0);
    } else {
      setCurrunt(currunt + 1);
    }
  };

  const decrementIndex = () => {
    if (currunt === 0) {
      setCurrunt(topFive - 1);
    } else {
      setCurrunt(currunt - 1);
    }
  };

  useEffect(() => {
    checkCurrunt();
  });

  return (
    <div className={`${props.backgroundColor} homepageSections`}>
      <p className="sectionHeading">Products</p>

      <div className="productSection multiSlider">
        <div onClick={decrementIndex}>
          <ArrowCircleLeftOutlinedIcon fontSize="large" />
        </div>

        <div className="nonActiveImage">
          <img
            key={prev}
            src={products[prev].frontImg}
            alt={`product`}
            style={{ animation: "flash 1.5s .5s" }}
          />
        </div>
        <div className="activeImage">
          <img
            key={currunt}
            src={products[currunt].frontImg}
            alt={`product`}
            style={{ animation: "flash 1.5s .5s" }}
          />
        </div>
        <div className="nonActiveImage">
          <img
            key={next}
            src={products[next].frontImg}
            alt={`product`}
            style={{ animation: "flash 1.5s .5s" }}
          />
        </div>

        <div onClick={incrementIndex}>
          <ArrowCircleRightOutlinedIcon fontSize="large" />
        </div>
      </div>

      <Link to="/products">
        <button className={`sectionButton ${props.backgroundColor}`}>
          View All
        </button>
      </Link>
    </div>
  );
}

export default ProductSection;
