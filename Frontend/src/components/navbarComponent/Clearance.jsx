import React from "react";
import "./navbar.css";

export const Clearance = () => {
  return (
    <div>
      <div className="cContainer">
        <div className="cParent">
          <div className="innerclParent">
            <div className="cimgDiv">
              <h3>CLOTHING</h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/clearance_8fa5acf3-7405-41aa-8c98-b0891649c9ab.jpg?v=1598516564"
                alt=""
              />
              <p style={{ fontWeight: "bold" }}>CLEARANCE</p>
              <p>70%-90% OFF</p>
            </div>
            <div className="clothCom">
              <div>
                <h4>WOMEN'S</h4>
              </div>
              <div>
                <p>Accessories</p>
                <p>Activewear</p>
                <p>Coats &amp; Jackets</p>
                <p>Dresses</p>
                <p>Handbags</p>
                <p>Jeans &amp; Denim</p>
                <p>Jewelry</p>
                <p>Lingerie &amp; Hosiery</p>
                <p>Pants &amp; Leggings</p>
                <p>Shoes</p>
                <p>Sunglasses</p>
                <p>Swimwear</p>
                <p>Tops</p>
                <p>Watches</p>
              </div>
            </div>
            <div className="clothCom">
              <div>
                <h4>MEN'S</h4>
              </div>
              <div>
                <p>Accessories</p>
                <p>Coats &amp; Jackets</p>
                <p>Dress Shirts</p>
                <p>Pants</p>
                <p>Polo Shirts</p>
                <p>Shorts</p>
                <p>Shoes</p>
                <p>Suits &amp; Separates</p>
                <p>Sunglasses</p>
                <p>Sweaters</p>
                <p>T-Shirts</p>
                <p>Watches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
