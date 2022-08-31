import React from "react";
import { Fade } from "@mui/material";
import Clothing from "./Clothing";
import Shoe from "./Shoe";
import Handbags from "./Handbags";
import Designer from "./Designer";
import Jewelry from "./Jewelry";
import Sunglass from "./Sunglass";
import Under50 from "./Under50";
import Beauty from "./Beauty";
import { Clearance } from "./Clearance";

const NavbarPopup = ({ type }) => {
  console.log(type)
  return (
    <Fade in={!!type}  >
      <div>
        {type === "CLOTHING" && <Clothing />}
        {type === "SHOE" && <Shoe />}
        {type === "HANDBAG" && <Handbags />}
        {type === "DESIGNER" && <Designer />}
        {type === "SUNGLASSES" && <Sunglass />}
        {type === "JEWELRY" && <Jewelry />}
        {type === "UNDER" && <Under50 />}
        {type === "BEAUTY" && <Beauty />}
        {type === "CLEARANCE" && <Clearance />}
      </div>
     </Fade>
  );
};

export default NavbarPopup;