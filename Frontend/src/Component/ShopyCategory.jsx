import React from "react";
import "./shopByCategory.css";

const ShopyCategory = () => {
  return (
    <>
      <h2> SHOP BY CATEGORY</h2>
      <div className="shopByCategory">
        <div className="div1">
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg1.png"} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg2.png"} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg3.png"} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg4.png"} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg5.png"} alt="" />
          </div>
        </div>
        <div className="div2">
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg6.png"} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg7.png"} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg8.png"} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg9.png"} alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/sbg10.png"} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ShopyCategory;
