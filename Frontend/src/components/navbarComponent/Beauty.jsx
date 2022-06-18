import React from "react";
import "./navbar.css";

const Beauty = () => {
  return (
    <div>
      <div className="cContainer">
        <div className="cParent">
          <div className="innerbeParent">
            <div className="clothCom">
              <div>
                <h4>BEAUTY</h4>
              </div>
              <div>
                <h4>FRAGRANCE</h4>
              </div>
              <div style={{marginBottom:"45px"}}>
                <p>Shop All</p>
              </div>
            </div>
            <div className="clothCom">
              <div>
                <h4>SKINCARE</h4>
              </div>
              <div>
                <p>Shop All</p>
              </div>
            </div>
            <div className="clothCom">
              <div>
                <h4>HAIRCARE</h4>
              </div>
              <div>
                <p>Shop All</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
