import React from "react";
import "./offer.css";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offerCard">
          <img src={process.env.PUBLIC_URL + "/images/pic1.png"} alt="pic1" />
        </div>
        <div className="offerCard">
          <img src={process.env.PUBLIC_URL + "/images/pic2.png"} alt="pic1" />
        </div>
        <div className="offerCard">
          <img src={process.env.PUBLIC_URL + "/images/pic4.png"} alt="pic1" />
        </div>
      </div>
    </>
  );
};

export default Offer;
