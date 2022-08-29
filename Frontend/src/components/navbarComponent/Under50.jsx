import React from "react";
import "./navbar.css";

const Under50 = () => {
  return (
    <div>
      <div className="cContainer">
        <div className="cParent">
          <div className="inneruParent">
            <div className="clothCom">
              <div>
                <h4>SHOP BY PRICEPOINT</h4>
              </div>
              <div>
                <p>Under $25</p>
                <p>$25-$49.99</p>
                <p>Shop All Under $50</p>
              </div>
            </div>
            <div className="clothCom">
              <div>
                <h4>SHOP BY CATEGORY</h4>
              </div>
              <div style={{ marginBottom: "45px" }}>
                <p>Women</p>
                <p>Shoes</p>
                <p>Handbags &amp; Accessories</p>
                <p>Jewelry</p>
                <p>Men</p>
                <p>Kids</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Under50;