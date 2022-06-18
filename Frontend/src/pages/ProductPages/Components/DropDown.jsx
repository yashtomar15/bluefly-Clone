import React, { useState } from "react";
import "./styles/dropdown.css";

export const DropDown = () => {
  const [Value, setValue] = useState("Bestselling");
  const handleClick = (e) => {
    let text = e.target.innerText;
    {
      if (text[0] === "B") {
        setValue("Bestselling");
      } else if (text[text.length - 1] === "Z") {
        setValue("Title: A-Z");
      } else if (text[text.length - 1] === "A") {
        setValue("Title: Z-A");
      } else if (text[text.length - 1] === "D") {
        setValue("Date: New To Old");
      } else if (text[text.length - 1] === "H") {
        setValue("Price: Low To High");
      } else if (text[text.length - 1] === "W") {
        setValue("Price: High To Low");
      } else if (text[7] === "T") {
        setValue("Discount: High To Low");
      } else if (text[text.length - 1] === "G") {
        setValue("Trending");
      }
    }
  };
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">{Value}</button>
        <div className="dropdown-content">
          <p onClick={handleClick}>BESTSELLING</p>
          <p onClick={handleClick}>TITLE: A-Z</p>
          <p onClick={handleClick}>TITLE: Z-A</p>
          <p onClick={handleClick}>DATE: NEW TO OLD</p>
          <p onClick={handleClick}>PRICE: LOW TO HIGH</p>
          <p onClick={handleClick}>PRICE: HIGH TO LOW</p>
          <p onClick={handleClick}>DISCOUNT: HIGH TO LOW</p>
          <p onClick={handleClick}>TRENDING</p>
        </div>
      </div>
    </>
  );
};
