import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/MobileViewSlider.module.css";
import "../styles/common.css";
const MobileViewSlider = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.mobile_view_wrapper}>
      <Slider {...settings}>
        {images.length > 0 &&
          images.map((item) => {
            return (
              <div key={item.id} className={styles.imgBox}>
                <img src={item.img} alt="" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default MobileViewSlider;
