import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";

function ProductDetails(props) {
  const [image, setImage] = useState(props.product.frontImg);

  const handleImage = () => {
    if (image === props.product.frontImg) {
      setImage(props.product.backImg);
    } else {
      setImage(props.product.frontImg);
    }
  };

  return (
    <div className="detailsComponent">
      <header>
        <CloseOutlinedIcon
          className="closeButton"
          fontSize="large"
          onClick={props.close}
        />
        <h2 className="componentHeading">Product Details</h2>
      </header>

      <section className="productContainer">
        <div className="imageArea">
          <div className="mainImage">
            <ArrowCircleLeftOutlinedIcon
              fontSize="large"
              onClick={handleImage}
            />
            <img src={image} alt=""></img>
            <ArrowCircleRightOutlinedIcon
              fontSize="large"
              onClick={handleImage}
            />
          </div>
          <div className="secondaryImages">
            <img
              src={props.product.frontImg}
              alt="front"
              onClick={() => setImage(props.product.frontImg)}
            ></img>
            <img
              src={props.product.backImg}
              alt="back"
              onClick={() => setImage(props.product.backImg)}
            ></img>
          </div>
        </div>
        <div className="detailsArea">
          <div className="productName">{props.product.title}</div>
          <div className="productDetails">
            <div>
              <b>Grade:</b> {` ${props.product.grade}`}
            </div>

            <div>
              <b>Subject:</b> {` ${props.product.subject}`}
            </div>

            <div>
              <b>Series:</b>
              {` ${props.product.series}`}
            </div>
          </div>
          <div className="productDiscription">
            <b>Discription:</b>
            <p>{` ${props.product.discription}`}</p>
          </div>
          <Link to="/contactus">
            <button className="contactButton">
              For more Information Contact us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
