import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import CustomizedBadges from "../../Navbar/carticon" 
import {
  faMagnifyingGlass,
  faBagShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import bg from "../../assets/bg.webp";
import "./Header.css";
import { Link } from "react-router-dom";
import NavbarPopup from "../navbarComponent/NavbarPopup";

const Header = () => {
  const [hoverState, setHoverState] = useState("");
  const [inputs, setInputs] = useState(false);

  const handleHover = (type) => {
    setHoverState(type);
  };

  const handleNoHover = () => {
    setHoverState("");
  };

  const handleInput = () => {
    setInputs(true);
  };
  const handleCut= ()=>{
    setInputs(false)
  }
  return (
    <div className="hContainer">
      <div className="hzin">
        <div className="hparent">
          <div></div>
          <div className="himgDiv">
            <h1>
              <Link to={"/"}>
                <img src={bg} alt="" />
              </Link>
            </h1>
          </div>
          <div className="rightDiv">
            {inputs ? (
              <>
              <div className="iconDiv1 ? iconDiv">
                <input type="text" name=""/>
                <button onClick={handleCut}><FontAwesomeIcon icon={faXmark}/></button>
                </div></>
            ) : (
              <div className="iconDiv" onClick={handleInput}>
                <span>
                  <FontAwesomeIcon className="icons" icon={faMagnifyingGlass} />
                </span>
                <span>SEARCH</span>
              </div>
            )}

            <div className="iconDiv">
              <Link to={"/"}><span>
                <FontAwesomeIcon className="icons" icon={faUser} />
              </span>
              <span>LOG IN</span></Link>
            </div>
            <div className="iconDiv" style={{marginTop:"-10%",display:"flex"}}>
              <Link to={"/cart"}>
              <CustomizedBadges/>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="navDiv">
            <ul className="navlink">
              <li style={{ marginLeft: "35px" }}>
                <Link to={"/temp"} onMouseEnter={() => handleHover("CLOTHING")}>
                  CLOTHING
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("SHOE")}>
                  SHOES
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("HANDBAG")}>
                  HANDBAGS &amp; ACCESSORIES
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("DESIGNER")}>
                  DESIGNERS
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("SUNGLASSES")}>
                  SUNGLASSES
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("JEWELRY")}>
                  JEWELRY &amp; WATCHES
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("UNDER")}>
                  UNDER $50
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("BEAUTY")}>
                  BEAUTY
                </Link>
              </li>
              <li style={{ color: "red" }}>
                <Link to={"/"} onMouseEnter={() => handleHover("CLEARANCE")}>
                  CLEARANCE
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="popupNav">
        <div onMouseLeave={handleNoHover}>
          {hoverState && (
            <NavbarPopup type={hoverState} className="positionPop" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
