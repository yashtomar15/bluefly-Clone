import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {midSliderImages} from '../homedata';
import styles from '../styles/midImageslider.module.css';

export const MidImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{marginTop:'20px'}}>
  <Slider {...settings}>
  <div>
        <img className={styles.midSliderImages} src={midSliderImages[0]} alt="First slide" />  
      <div className={styles.divSlides}>
              <div className={styles.slideCon}>
                <h1>WORLD OF VALENTINO</h1>
                <h3>Shop Handbags, Shoes, Apparel, Accessories &amp; More</h3> 
                <button>SHOP VALENTINO</button>
              </div>
            </div>
  </div>

  <div>
  <img className={styles.midSliderImages} src={midSliderImages[2]} alt="Third slide" />    
      <div className={styles.divSlides}>
      <div className={styles.slideCon}>
              <h1>BOTTEGA VENETA</h1>
              <h3>UNSURPASSED CRAFTSMANSHIP &amp; THE SIGNATURE WOVEN LEATHER</h3> 
              <button>SHOP NOW</button>
             </div>
            </div>
  </div>

  <div>
  <img className={styles.midSliderImages} src={midSliderImages[2]} alt="Third slide" />
      
      <div className={styles.divSlides}>
      <div className={styles.slideCon}>
              <h1>BOTTEGA VENETA</h1>
              <h3>UNSURPASSED CRAFTSMANSHIP &amp; THE SIGNATURE WOVEN LEATHER</h3> 
              <button>SHOP NOW</button>
             </div>
            </div>
  </div>

  <div>
  <img className={styles.midSliderImages}  src={midSliderImages[3]}  alt="Third slide" />
      
      <div className={styles.divSlides}>
      <div className={styles.slideCon}>
                <h1>PRADA</h1>
                <h3>AN ITALIAN FASHION HOUSE MADE WITH CLASSIC &amp; ECCENTRIC STYLE</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
  </div>
  </Slider>
  </div>
  );
};
