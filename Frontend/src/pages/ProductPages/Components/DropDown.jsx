import React, { useState } from "react";
import "./styles/dropdown.css";
import axios from "axios";

// resuable dropdown
// sortCategory[0]=sortwomens||sortmens
// sortCategory[1] = mens || womens
export const DropDown = ({ filterData, sortCategory }) => {
  const [Value, setValue] = useState("Bestselling");
  const handleClick = (e) => {
    let text = e.target.innerText;
    {
      if (text[0] === "B") {
        axios
          .get(
            `https://blueflyapp.herokuapp.com/Data/filter?${sortCategory[1]}trendingcat=best_seller`
          )
          .then(({ data }) => {
            filterData(data);
          })
          .catch((err) => {
            console.log("err occured: ", err);
          });
        setValue("Trending");
        setValue("Bestselling");
      } else if (text[text.length - 1] === "Z") {
        axios
          .get(
            `https://blueflyapp.herokuapp.com/Data/${sortCategory[0]}?title=inc`
          )
          .then(({ data }) => {
            filterData(data);
            console.log(data);
          })
          .catch((err) => {
            console.log("err occured: ", err);
          });
        setValue("Title: A-Z");
      } else if (text[text.length - 1] === "A") {
        axios
          .get(
            `https://blueflyapp.herokuapp.com/Data/${sortCategory[0]}?title=dec`
          )
          .then(({ data }) => {
            filterData(data);
          })
          .catch((err) => {
            console.log("err occured: ", err);
          });
        setValue("Title: Z-A");
      } else if (text[text.length - 1] === "D") {
        axios
          .get(`https://blueflyapp.herokuapp.com/Data/Women's`)
          .then(({ data }) => {
            filterData(data);
          })
          .catch((err) => {
            console.log("err occured: ", err);
          });
        setValue("Date: New To Old");
      } else if (text[text.length - 1] === "H") {
        axios
          .get(
            `https://blueflyapp.herokuapp.com/Data/${sortCategory[0]}?price=inc`
          )
          .then(({ data }) => {
            filterData(data);
          })
          .catch((err) => {
            console.log("err occured: ", err);
          });
        setValue("Price: Low To High");
      } else if (text[text.length - 1] === "W") {
        axios
          .get(
            `https://blueflyapp.herokuapp.com/Data/${sortCategory[0]}?price=dec`
          )
          .then(({ data }) => {
            filterData(data);
          })
          .catch((err) => {
            console.log("err occured: ", err);
          });
        setValue("Price: High To Low");
      } else if (text[7] === "T") {
        axios
          .get(`https://blueflyapp.herokuapp.com/Data/Women's`)
          .then(({ data }) => {
            filterData(data);
          })
          .catch((err) => {
            console.log("err occured: ", err);
          });
        setValue("Discount: High To Low");
      } else if (text[text.length - 1] === "G") {
        axios
          .get(
            `https://blueflyapp.herokuapp.com/Data/filter?${sortCategory[1]}trendingcat=Trending`
          )
          .then(({ data }) => {
            filterData(data);
          })
          .catch((err) => {
            console.log("err occured: ", err);
          });
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
