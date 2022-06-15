import React, { useState } from "react";
import SliderBox from "./SliderBox";
import styles from "../styles/SingleProduct.module.css";
import MobileViewSlider from "./MobileViewSlider";

let images = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2097952_a048da9e-b2a7-4a32-9ee2-aed5694dd339_720x.jpg?v=1651787545",
  },
];

const SingleProduct = () => {
  const [zoomIn, setZoomIn] = useState(true);

  const handleZoomInOut = () => {
    setZoomIn(!zoomIn);
  };
  return (
    <div className={styles.product_container}>
      <div className={styles.left_side}>
        {zoomIn ? (
          <>
            <div onClick={handleZoomInOut} className={styles.img_wrap}>
              <img
                src="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547"
                alt=""
              />
            </div>
            <div className={styles.mobile_view}>
              <MobileViewSlider images={images} />
            </div>
          </>
        ) : (
          <SliderBox handleZoomInOut={handleZoomInOut} images={images} />
        )}
      </div>
      <div className={styles.right_side}>
        <div className={styles.brand}>
          <p>VALENTINO</p>
        </div>
        <div className={styles.title}>
          <h1>MEDIUM BLUE DENIM SHIRT</h1>
        </div>
        <div className={styles.price}>
          <p>
            <del>$ 1,176.00</del> $812.61
          </p>
        </div>
        <div className={styles.notice}>
          <p>FREE SHIPPING ON ORDERS OVER $99</p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.size_notice}>
          <p className={styles.size_title}>SIZE</p>
          <p className={styles.size_desc}>
            (Please reference sizing images on a product if available; if
            unavailable please use our size and conversion guide for proper
            sizing. )
          </p>
        </div>
        <div className={styles.size}>
          <div className={`${styles.box} ${styles.active_box}`}>46</div>
          <div className={styles.box}>48</div>
          <div className={styles.box}>50</div>
          <div className={styles.box}>52</div>
          <div className={styles.box}>54</div>
          <div className={styles.box}>56</div>
        </div>
        <div className={styles.color}>
          <p>COLOR - Blue</p>
        </div>
        <div className={styles.colors}>
          <div className={`${styles.color_box} ${styles.active_color_box}`}>
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547"
              alt=""
            />
          </div>
          <div className={styles.color_box}>
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547"
              alt=""
            />
          </div>
          <div className={styles.color_box}>
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2163396_540x.jpg?v=1651787547"
              alt=""
            />
          </div>
        </div>
        <div className={styles.btn_box}>
          <button>Add To Cart</button>
        </div>
        <div className={styles.description}>
          <p>
            Usually ships in 1 to 2 business days Long-sleeved blue denim shirt
            with VLogo Signature maxi print on the front. It features classic
            collar, button closure, buttoned cuffs and two pockets on chest. The
            model is 188cm tall and wears size 48.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
