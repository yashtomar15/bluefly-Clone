import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderBox.module.css";
import CloseIcon from "@mui/icons-material/Close";
import "./common.css";

const SliderBox = ({ handleZoomInOut, images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.full_width}>
      <div className={styles.s_wrapper}>
        <div onClick={handleZoomInOut} className={styles.cancel}>
          <CloseIcon></CloseIcon>
        </div>
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
    </div>
  );
};

export default SliderBox;
