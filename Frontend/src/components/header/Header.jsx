import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import bg from '../../assets/bg.webp'
import "./Header.css";

const Header = () => {
  const [clothing,setClothing] = useState(false);

  const handleC = ()=>{
    setClothing(true)
  }
  return (
    <div className="hContainer">
     <div className="hzin">
     <div className="hparent">
        <div></div>
        <div className="himgDiv">
          <h1>
            <img src={bg} alt="" />
          </h1>
        </div>
        <div className="rightDiv">
          <div className="iconDiv">
            <span>
              <FontAwesomeIcon className="icons" icon={faMagnifyingGlass} />
            </span>
            <span>SEARCH</span>
          </div>
          <div className="iconDiv">
            <span>
              <FontAwesomeIcon className="icons" icon={faUser} />
            </span>
            <span>LOG IN</span>
          </div>
          <div className="iconDiv">
            <span>
              <FontAwesomeIcon className="icons" icon={faBagShopping} />
            </span>
            <span>CART</span>
          </div>
        </div>
      </div>

      <div>
        <div className="navDiv">
          <ul className="navlink">
            <li style={{marginLeft:"35px"}}>CLOTHING</li>
            <li>SHOES</li>
            <li>HANDBAGS & ACCESSORIES</li>
            <li>DESIGNERS</li>
            <li>SUNGLASSES</li>
            <li>JEWELRY & WATCHES</li>
            <li>UNDER $50</li>
            <li>BEAUTY</li>
            <li style={{ color: "red" }}>CLEARANCE</li>
          </ul>
        </div>
      </div>
     </div>
    </div>

  );
};

export default Header;
