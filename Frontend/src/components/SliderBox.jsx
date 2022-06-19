import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/SliderBox.module.css";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/common.css";

const SliderBox = ({ handleZoomInOut, images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setRerender(!rerender);
  }, [images]);

  console.log(images, "Slider BOx");
  return (
    <div className={styles.full_width}>
      {images.length > 0 && (
        <div className={styles.s_wrapper}>
          <div onClick={handleZoomInOut} className={styles.cancel}>
            <CloseIcon></CloseIcon>
          </div>
          <Slider {...settings}>
            {images.map((item, i) => {
              return (
                <div key={i} className={styles.imgBox}>
                  <div style={{ color: "white" }}>HI</div>
                  <img src={`${item}`} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default SliderBox;
