import SimpleImageSlider from "react-simple-image-slider";
import { useState } from "react";
import '../styles/imageSlider.css';
// import Slide from 'react-reveal/Slide';

export const ImageSlider= () => {
  const [offerText,setOfferText]=useState("WELCOME TO BLURFLY:  Luxury brands at discounted prices")

  //  setInterval(()=>{
  //     if(offerText==="WELCOME TO BLURFLY: Luxury brands at discounted prices"){
  //       setOfferText("FREE SHIPPINF on orders over $99");
  //     }else{
  //       setOfferText("WELCOME TO BLURFLY: Luxury brands at discounted prices");
  //     }
  //    },5000)
  return (
    <>
   <div className="offerSlider">
    {/* <Slide left> */}
    <p>{ offerText}</p>
    {/* </Slide> */}
    </div>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner" >
    <div class="carousel-item active">
    <img class="d-block w-100" className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/Valentino_1944x.jpg"}  alt="First slide" />
      <div className="divSlides">
              <div className="slideCon">
                <h1>WORLD OF VALENTINO</h1>
                <h3>Shop Handbags, Shoes, Apparel, Accessories &amp; More</h3> 
                <button>SHOP VALENTINO</button>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/gucci_1944x.jpg"} alt="Second slide" />
      <div className="divSlides">
              <div className="slideCon">
                <h1>GUCCI</h1>
                <h3>THIS ICONIC BRAND IS REPRESENTED WITH GREAT DESIGN &amp; CONTEMPORARY LIFESTYLE</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/Bottega_Veneta_1944x.jpg"} alt="Third slide" />
      <div className="divSlides">
      <div className="slideCon">
              <h1>BOTTEGA VENETA</h1>
              <h3>UNSURPASSED CRAFTSMANSHIP &amp; THE SIGNATURE WOVEN LEATHER</h3> 
              <button>SHOP NOW</button>
             </div>
            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" className="sliderImages"  src={process.env.PUBLIC_URL+"sliderImages/Prada_1944x.jpg"} alt="Third slide" />
      <div className="divSlides">
      <div className="slideCon">
                <h1>PRADA</h1>
                <h3>AN ITALIAN FASHION HOUSE MADE WITH CLASSIC &amp; ECCENTRIC STYLE</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/fENDI_1944x.jpg"} alt="Third slide" />
      <div className="divSlides">
      <div className="slideCon">
                <h1>FENDI</h1>
                <h3>A TOP FASHION BRAND THAT CULTIVATES THE MOST ELEVATED DESIGN OF STYLES</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/saint_laurent_3_1944x.jpg"} alt="Third slide" />
      <div className="divSlides">
      <div className="slideCon">
                <h1>LUKE HANDBAGS</h1>
                <h3>Styles from Gucci, Prada, Saint Laurent, Bottega Veneta, Fendi &amp; More</h3> 
                <button>SHOP HANDBAGS</button>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/Designer_Shoes_1944x.jpg"} alt="Third slide" />
      <div className="divSlides">
      <div className="slideCon">
                <h1>DESIGNER SHOE</h1>
                <h3>Step Into The New Season With New Designer Shoes</h3> 
                <div>
                  <button>SHOP WOMEW</button>
                  <button>SHOP MEN</button>
                </div>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/sunglasses1_1944x.jpg"} alt="Third slide" />
      <div className="divSlides">
      <div className="slideCon">
                <h3>Sunnies For Him &amp; Her</h3>
                <h1>ICONIC SUNGLASSES</h1>
                <h3> Featuring Dior, Tom Ford, Fendi &amp; More</h3> 
                <button>SHOP SUNGLASSES</button>
              </div>
            </div>
    </div>
  </div>

  <a class="carousel-control-prev"  href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


    </>
  )
}