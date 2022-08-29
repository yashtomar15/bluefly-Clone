import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../styles/imageSlider.css';
import {Link } from 'react-router-dom';

export const UpperSlider=()=>{
    const settings={
        arrows:true,
        dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    }
    return (<>
    <div style={{marginTop:'-50px'}}>
    <Slider {...settings}>
        <div >
            <Link to="womens">
              <img  className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/Valentino_1944x.jpg"}  alt="First slide" />
              </Link>
      <div className="divSlides">
              <div className="slideCon">
                <h1>WORLD OF VALENTINO</h1>
                <h3>Shop Handbags, Shoes, Apparel, Accessories &amp; More</h3> 
                <button>SHOP VALENTINO</button>
              </div>
            </div>
        </div>
        <div >
           <Link to="womens">
             <img className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/gucci_1944x.jpg"} alt="Second slide" />
             </Link>
      <div className="divSlides">
              <div className="slideCon">
                <h1>GUCCI</h1>
                <h3>THIS ICONIC BRAND IS REPRESENTED WITH GREAT DESIGN &amp; CONTEMPORARY LIFESTYLE</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
        </div>
        <div >
           <Link to="womens">
             <img className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/Bottega_Veneta_1944x.jpg"} alt="Third slide" />
             </Link>
      <div className="divSlides">
      <div className="slideCon">
              <h1>BOTTEGA VENETA</h1>
              <h3>UNSURPASSED CRAFTSMANSHIP &amp; THE SIGNATURE WOVEN LEATHER</h3> 
              <button>SHOP NOW</button>
             </div>
            </div>
        </div>
        <div>
           <Link to="womens">
             <img className="sliderImages"  src={process.env.PUBLIC_URL+"sliderImages/Prada_1944x.jpg"} alt="Third slide" />
             </Link>
      <div className="divSlides">
      <div className="slideCon">
                <h1>PRADA</h1>
                <h3>AN ITALIAN FASHION HOUSE MADE WITH CLASSIC &amp; ECCENTRIC STYLE</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
        </div>
        <div>
       <Link to="womens">
         <img  className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/fENDI_1944x.jpg"} alt="Third slide" />
         </Link>
        <div className="divSlides">
      <div className="slideCon">
                <h1>FENDI</h1>
                <h3>A TOP FASHION BRAND THAT CULTIVATES THE MOST ELEVATED DESIGN OF STYLES</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
        </div>
        <div>
       <Link to="womens">
         <img  className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/saint_laurent_3_1944x.jpg"} alt="Third slide" />
         </Link>
      <div className="divSlides">
      <div className="slideCon">
                <h1>LUKE HANDBAGS</h1>
                <h3>Styles from Gucci, Prada, Saint Laurent, Bottega Veneta, Fendi &amp; More</h3> 
                <button>SHOP HANDBAGS</button>
              </div>
            </div>
        </div>
        <div>
       <Link to="womens">
         <img  className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/Designer_Shoes_1944x.jpg"} alt="Third slide" />
         </Link>
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
        <div>
       <Link to="womens">
         <img  className="sliderImages" src={process.env.PUBLIC_URL+"sliderImages/sunglasses1_1944x.jpg"} alt="Third slide" />
         </Link>
      <div className="divSlides">
      <div className="slideCon">
                <h3>Sunnies For Him &amp; Her</h3>
                <h1>ICONIC SUNGLASSES</h1>
                <h3> Featuring Dior, Tom Ford, Fendi &amp; More</h3> 
                <button>SHOP SUNGLASSES</button>
              </div>
            </div>
        </div>
    </Slider>
    </div>
    </>)
}