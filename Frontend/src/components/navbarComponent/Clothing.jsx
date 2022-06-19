import React from "react";
import "./navbar.css";

const Clothing = () => {
  return (
    <div>
      <div className="cContainer">
        <div className="cParent">
          <div className="innercParent">
          <div className="cimgDiv">
            <h3>CLOTHING</h3>
            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women.jpg?v=1598516476" alt="" />
            <p style={{fontWeight:"bold"}}>DRESSES</p>
            <p>UP TO 80% OFF</p>
          </div>
          <div className="clothCom">
            <div>
              <h4>WOMEN'S CLOTHING</h4>
            </div>
            <div>
              <p>Activewear</p>
              <p>Coats &amp; Jackets</p>
              <p>Dresses</p>
              <p>Jeans &amp; Denim</p>
              <p>Jumpsuits &amp; Rompers</p>
              <p>Lingerie &amp; Hosiery</p>
              <p>Loungewear &amp; Sleepwear</p>
              <p>Pants &amp; Leggings</p>
              <p>Shorts</p>
              <p>Skirts</p>
              <p>Sweaters</p>
              <p>Sweatshirts &amp; Hoodies</p>
              <p>Swimwear &amp; Coverups</p>
              <p>Tops &amp; Tees</p>
            </div>
          </div>
          <div className="clothCom">
            <div>
              <h4>MEN'S CLOTHING</h4>
            </div>
            <div style={{marginBottom:"45px"}}>
              <p>Activewear</p>
              <p>Causal Button-Down Shirts</p>
              <p>Coats &amp; Jackets</p>
              <p>Dress Shirts</p>
              <p>Jeans &amp; Denim</p>
              <p>Pants</p>
              <p>Polo Shirts</p>
              <p>Shorts</p>
              <p>Sport Coats &amp; Blazers</p>
              <p>Suits &amp; Separates</p>
              <p>Sweaters</p>
              <p>Sweatshirts &amp; Hoodies</p>
              <p>Swimwear</p>
              <p>T-Shirts</p>
              <p>Underwear &amp; Socks</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothing;
