import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import bg from '../../assets/bg.webp'
import "./Header.css";
import Custom from "../custom/Custom";

const Header = () => {
  return (
    <div className="hContainer">
     <div className="hzin">
     <div className="hparent">
        <div></div>
        <div className="himgDiv">
          <h1>
            <img src={bg} />
          </h1>
          <img src="" alt="" />
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
            <li>SHOES</li>
            <li>HANDBAGS & ACCESSORIES</li>
            <li>DESIGNERS</li>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>SUNGLASSES</li>
            <li>JEWELRY & WATCHES</li>
            <li>UNDER $50</li>
            <li>BEAUTY</li>
            <li style={{ color: "red" }}>CLEARANCE</li>
          </ul>
        </div>
      </div>
     </div>
    <Custom/>
    </div>

  );
};

export default Header;
