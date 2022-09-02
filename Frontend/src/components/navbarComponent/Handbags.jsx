import React from "react";
import "./navbar.css";

const Handbags = () => {
  return (
    <div >
      <div className="hContainer">
        <div className="cParent">
          <div className="innerhParent" >
          <div className="cimgDiv">
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag2.jpg?v=1598516541"
              alt=""
            />
            <p style={{ fontWeight: "bold" }}>SATCHELS</p>
            <p>UP TO 60% OFF</p>
          </div>
          <div className="clothCom">
            <div>
              <h4>ALL HANDBAGS</h4>
            </div>
            <div>
              <p>Shop All</p>
              <p>Backpacks</p>
              <p>Bucket Bags</p>
              <p>Clutches</p>
              <p>Crossbody Bags</p>
              <p>Hobo Bags</p>
              <p>Satchels</p>
            </div>
          </div>
          <div className="clothCom">
            <div>
              <h4>WOMEN'S DESIGNERS</h4>
            </div>
            <div style={{marginBottom:"45px"}}>
              <p>Balenciaga</p>
              <p>Bottega Veneta</p>
              <p>Burberry</p>
              <p>Celine</p>
              <p>Chloe</p>
              <p>Dolce &amp; Gabbana</p>
              <p>Fendi</p>
            </div>
          </div>
          <div className="clothCom">
            <div>
              <h4>PRE-OWNED</h4>
            </div>
            <div>
              <p>Shop All</p>
              <p>Buckets Bags</p>
              <p>Clutches</p>
              <p>Crossbody Bags</p>
              <p>Hobo Bags</p>
              <p>Satchels</p>
              <p>Shoulder Bags</p>
            </div>
          </div>
          <div className="clothCom">
            <div>
              <h4>ACCESSORIES</h4>
            </div>
            <div>
              <p>Bag Charms, Straps, &amp; Accessories</p>
              <p>Belts</p>
              <p>Cosmetic Bags</p>
              <p>Hats</p>
              <p>Gloves</p>
              <p>Scarves &amp; Wraps</p>
              <p>Optical &amp; Reading Glasses</p>
              <p>Sunglasses</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handbags;