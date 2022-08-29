import React from "react";
import "./navbar.css";

const Shoe = () => {
  return (
    <div>
      <div className="sContainer">
        <div className="cParent">
          <div className="innersParent">
            <div className="cimgDiv">
              <img
                src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women_shoes.jpg?v=1598516516"
                alt=""
              />
              <p style={{ fontWeight: "bold" }}>SANDALS</p>
              <p>UP TO 70% OFF</p>
            </div>
            <div className="clothCom">
              <div>
                <h4>WOMEN'S SHOES</h4>
              </div>
              <div>
                <p>Shop All</p>
                <p>Boots</p>
                <p>Espadrilles</p>
                <p>Flats</p>
                <p>Mules &amp; Slides</p>
                <p>Oxfords &amp; Loafers</p>
                <p>Pumps &amp; Heels</p>
                <p>Sandals</p>
                <p>Slippers</p>
                <p>Sneakers</p>
                <p>Wedges</p>
              </div>
            </div>
            <div className="clothCom">
              <div>
                <h4>WOMEN'S DESIGNERS</h4>
              </div>
              <div style={{marginBottom:"45px"}}>
                <p>Burberry</p>
                <p>Chloe</p>
                <p>Christian Louboutin</p>
                <p>Dolce &amp; Gabbana</p>
                <p>Giuseppe Zanotti</p>
                <p>Gucci</p>
                <p>Jimmy Choo</p>
                <p>Manolo Blahnik</p>
                <p>Prada</p>
                <p>Saint Laurent</p>
                <p>Salvatore Ferragamo</p>
                <p>Tad's</p>
                <p>Valentino</p>
              </div>
            </div>
            <div className="clothCom">
              <div>
                <h4>MEN'S SHOES</h4>
              </div>
              <div>
                <p>Shop All</p>
                <p>Boots</p>
                <p>Drivers, Loafers &amp; Slip-Ons</p>
                <p>Oxford &amp; Derby Shoes</p>
                <p>Sandals &amp; Flip Flops</p>
                <p>Slippers</p>
                <p>Sneakers</p>
              </div>
            </div>
            <div className="clothCom">
              <div>
                <h4>MEN'S DESIGNERS</h4>
              </div>
              <div>
                <p>Antonio Maurizi</p>
                <p>Aquatalia</p>
                <p>Balenciaga</p>
                <p>Christian Louboutin</p>
                <p>Cole Haan</p>
                <p>Common Projects</p>
                <p>Giuseppe Zanotti</p>
                <p>Gucci</p>
                <p>Prada</p>
                <p>Saint Laurent</p>
                <p>Salvatore Ferragamo</p>
                <p>Tod's</p>
                <p>Valentino</p>
              </div>
            </div>
            <div className="cimgDiv">
              <img
                src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/SHOES-MEN.jpg?4112"
                alt=""
              />
              <p style={{ fontWeight: "bold" }}>
                DRIVERS, LOAFER &amp; SLIP-ONS
              </p>
              <p>UP TO 80% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoe;