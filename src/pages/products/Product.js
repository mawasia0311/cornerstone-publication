import React, { useEffect, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ProductDetails from "./ProductDetails";

function Product({ item }) {
  // const [image, setImage] = useState(item.frontImg);

  // const frontImage = () => {
  //   setImage(item.frontImg);
  // };
  // const backImage = () => {
  //   setImage(item.backImg);
  // };

  const [detailBox, setDetailBox] = useState(false);

  const showBox = () => {
    if (detailBox === true) {
      return <ProductDetails product={item} close={hideDetails} />;
    } else {
      return <></>;
    }
  };

  const showDetails = () => {
    setDetailBox(true);
  };
  const hideDetails = () => {
    setDetailBox(false);
  };

  useEffect(() => {
    showBox();
  }, [detailBox]);

  return (
    <>
      {showBox()}
      <div className="product">
        <img className="productImg" variant="top" src={item.frontImg} alt="" />
        <div className="productBody">
          <h4 className="productTitle">{item.title}</h4>
          <p className="productDetails">
            <b>Grade:</b> {item.grade}
          </p>
          <p className="productDetails">
            <b>Subject:</b> {item.subject}
          </p>
          <p className="productDetails">
            <b>Series:</b> {item.series}
          </p>
          <button className="viewDetails" onClick={showDetails}>
            <VisibilityOutlinedIcon fontSize="medium" /> View Details
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
