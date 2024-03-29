import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import CustomizedBadges from "../../Navbar/carticon";
import {
  faMagnifyingGlass,
  faBagShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import bg from "../../assets/bg.webp";
import "./Header.css";
import { Link } from "react-router-dom";
import NavbarPopup from "../navbarComponent/NavbarPopup";
import { useSelector } from "react-redux";

const Header = () => {
  const [hoverState, setHoverState] = useState("");
  const [inputs, setInputs] = useState(false);
  const { token } = useSelector((state) => state);
  const handleHover = (type) => {
    setHoverState(type);
  };

  const handleNoHover = () => {
    setHoverState("");
  };

  const handleInput = () => {
    setInputs(true);
  };
  const handleCut = () => {
    setInputs(false);
  };
  return (
    <div className="hContainer">
      <div className="hzin">
        <div className="hparent" onClick={handleNoHover}>
          <div></div>
          <div className="himgDiv">
            <h1>
              <Link to={"/"}>
                <img src={bg} alt="" style={{width:'200px'}}/>
              </Link>
            </h1>
          </div>
          <div className="rightDiv">
            {inputs ? (
              <>
                <div className="iconDiv1 ? iconDiv">
                  <input type="text" name="" />
                  <button onClick={handleCut}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </>
            ) : (
              <div className="iconDiv" onClick={handleInput}>
                <span>
                  <FontAwesomeIcon className="icons" icon={faMagnifyingGlass} />
                </span>
                <span>SEARCH</span>
              </div>
            )}

            <div className="iconDiv">
              {token !== null ? (
                <Link to={"/login"}>
                <span>
                  <FontAwesomeIcon className="icons" icon={faUser} />
                </span>
                 </Link>
              ) : (
                <Link to={"/login"}>
                  <span>
                    <FontAwesomeIcon className="icons" icon={faUser} />
                  </span>

                  <span>LOG IN</span>
                </Link>
              )}
            </div>
            <div
              className="iconDiv"
              style={{ marginTop: "-10%", display: "flex" }}
            >
              <Link to={"/cart"}>
                <CustomizedBadges />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="navDiv">
            <ul className="navlink" >
              <li style={{ marginLeft: "35px" }}>
                <Link to={"/mens"}>Mens</Link>
              </li>
              <li>
                <Link to={"/womens"}>Womens</Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("HANDBAG")} 
                onClick={()=>{alert('Data is only available for mens and womens, So Please click on mens or womens')}}>
                  {/* {alert('Data is only available for mens and womens')} */}
                  HANDBAGS &amp; ACCESSORIES
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("DESIGNER")}
                onClick={()=>{alert('Data is only available for mens and womens, So Please click on mens or womens')}}>
                  DESIGNERS
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("SUNGLASSES")}
                onClick={()=>{alert('Data is only available for mens and womens, So Please click on mens or womens')}}>
                  SUNGLASSES
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("JEWELRY")}
                onClick={()=>{alert('Data is only available for mens and womens, So Please click on mens or womens')}}>
                  JEWELRY &amp; WATCHES
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("UNDER")}
                onClick={()=>{alert('Data is only available for mens and womens, So Please click on mens or womens')}}>
                  UNDER $50
                </Link>
              </li>
              <li>
                <Link to={"/"} onMouseEnter={() => handleHover("BEAUTY")}
                onClick={()=>{alert('Data is only available for mens and womens, So Please click on mens or womens')}}>
                  BEAUTY
                </Link>
              </li>
              <li style={{ color: "red" }}>
                <Link to={"/"} onMouseEnter={() => handleHover("CLEARANCE")}
                onClick={()=>{alert('Data is only available for mens and womens, So Please click on mens or womens')}}>
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