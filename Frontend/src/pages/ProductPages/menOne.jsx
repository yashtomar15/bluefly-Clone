import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/womenOne.module.css";

export const MensOne = (items) => {
  const { brand, price, title, images1, images2, _id } = items;
  // console.log(items);
  // console.log(category,quantity,sizes,Trending,brand,price,color1,color2,title,condition,images1,images2);
  const [image, setImage] = useState(images1.main);

  const handleMouseOver = () => {
    setImage(images1.top);
  };
  const handleMouseOut = () => {
    setImage(images1.main);
  };
  const discount = price * 0.6;
  return (
    <>
      <div className={styles.container}>
        <img
          src={image}
          alt="top dress"
          className={styles.dress}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        {/* <p className='brand'> {brand},{color1},{color2 && color2}{sizes},condition_{condition},extra off</p> */}
        <div>
          <p className={styles.brand}> {brand}</p>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/mens/${_id}`}
          >
            <p className={styles.title}>{title}</p>
          </Link>
          <p className={styles.price}>
            <s>${price}</s> <span>${discount}</span>{" "}
          </p>
          <p className={styles.save}>Save 30%</p>
        </div>
      </div>
    </>
  );
};
