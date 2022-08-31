import React, { useRef, useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/womenOne.module.css";

export const WomensOne = (items) => {
  const { brand, price, title, images1, images2, _id,ind } = items;
  // console.log(items);
  // console.log(category,quantity,sizes,Trending,brand,price,color1,color2,title,condition,images1,images2);
  const [image, setImage] = useState(true);

  useEffect(()=>{
    if(ind===0 || ind===5 ||ind===6){
      setImage(false);
    }
  },[])
  
  const handleMouseOver = () => {
    setImage(false);
  };
  const handleMouseOut = () => {
    setImage(true);
  };
  const discount = price * 0.6;
  return (
    <>
     <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/womens/${_id}`}
          >
      <div className={styles.container}>
      {image? ( <img
          src={images1.main}
          alt="top dress"
          className={styles.dress}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
        />):( <img
          src={images1.top}
          alt="top dress"
          className={styles.dress}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
        /> )}
        {/* <p className='brand'> {brand},{color1},{color2 && color2}{sizes},condition_{condition},extra off</p> */}
        <div>
          <p className={styles.brand}> {brand}</p>
            <p className={styles.title}>{title}</p>
          <p className={styles.price}>
            <s>${price}</s> <span>${discount}</span>{" "}
          </p>
          <p className={styles.save}>Save 30%</p>
        </div>
      </div>
      </Link>
    </>
  );
};
