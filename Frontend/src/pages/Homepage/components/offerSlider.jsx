import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const OfferSlider=()=>{
    const settings={
        arrows:true,
        dots:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    }
    return (<>
    <Slider {...settings}>
        <div>
      <div style={{width:'100%',backgroundColor:'black', fontSize:'15px', padding:'5px', color:'white'}} >FREE SHIPPING on Order Over $99</div>
      </div>
      <div>
      <div style={{width:'100%',backgroundColor:'black',padding:'5px',fontSize:'15px', color:'white'}} >WELCOME TO BLUEFLY: Luxury brands at discounted prices</div>
      </div>
    </Slider>
    </>)
}