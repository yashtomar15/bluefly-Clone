import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.css";

const Custom = () => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="pDiv">
        <p>
          <span className="sp1">WELCOME TO BLUEFLY: </span>
          <span className="sp2">Luxury brands at discounted price</span>
        </p>
      </div>

      <div className="sliderDivM">
        <div className="sliderDiv">
          <Slider {...settings}>
            <div className="slide1">
              <div className="slideCon">
                <h1>WORLD OF VALENTINO</h1>
                <h3>Shop Handbags, Shoes, Apparel, Accessories &amp; More</h3>
                <button>SHOP VALENTINO</button>
              </div>
            </div>
            <div className="slide2">
              <div className="slideCon">
                <h1>GUCCI</h1>
                <h3>THIS ICONIC BRAND IS REPRESENTED WITH GREAT DESIGN &amp; CONTEMPORARY LIFESTYLE</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
            <div className="slide3">
             <div className="slideCon">
              <h1>BOTTEGA VENETA</h1>
              <h3>UNSURPASSED CRAFTSMANSHIP &amp; THE SIGNATURE WOVEN LEATHER</h3> 
              <button>SHOP NOW</button>
             </div>
            </div>
            <div className="slide4">
              <div className="slideCon">
                <h1>PRADA</h1>
                <h3>AN ITALIAN FASHION HOUSE MADE WITH CLASSIC &amp; ECCENTRIC STYLE</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
            <div className="slide5">
              <div className="slideCon">
                <h1>FENDI</h1>
                <h3>A TOP FASHION BRAND THAT CULTIVATES THE MOST ELEVATED DESIGN OF STYLES</h3> 
                <button>SHOP NOW</button>
              </div>
            </div>
            <div className="slide6">
              <div className="slideCon">
                <h1>LUKE HANDBAGS</h1>
                <h3>Styles from Gucci, Prada, Saint Laurent, Bottega Veneta, Fendi &amp; More</h3> 
                <button>SHOP HANDBAGS</button>
              </div>
            </div>
            <div className="slide7">
              <div className="slideCon">
                <h1>DESIGNER SHOE</h1>
                <h3>Step Into The New Season With New Designer Shoes</h3> 
                <div>
                  <button>SHOP WOMEW</button>
                  <button>SHOP MEN</button>
                </div>
              </div>
            </div>
            <div className="slide8">
              <div className="slideCon">
                <h3>Sunnies For Him &amp; Her</h3>
                <h1>ICONIC SUNGLASSES</h1>
                <h3> Featuring Dior, Tom Ford, Fendi &amp; More</h3> 
                <button>SHOP SUNGLASSES</button>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="dressDiv">
        <div className="woDiv">
          <div className="dress">
            <div className="cwoDiv">
              <h2>DRESSES FOR EVERY OCCASION</h2>
              <h1>UP TO 94% OFF</h1>
              <h3>Featuring BCBGMaxazria, Halston, Kay Unger &More</h3>
              <button>SHOP DRESSES</button>
            </div>
          </div>
          <div className="bautique">
            <div className="cwoDiv2">
              <h2>DESIGNER BOUTIQUE</h2>
              <h1>UP TO 84% OFF</h1>
              <h3>
                Best-Selling Style from: Gucci, Valentino, Balenciaga, Stuart
                Weitzman & More
              </h3>
              <button style={{ width: "70%" }}>SHOP DESIGNER BOUTIQUE</button>
            </div>
          </div>
          <div className="top">
            <div className="cwoDiv2">
              <h2>TRENDING TOPS FOR THE NEW SEASON</h2>
              <h1>UP TO 85% OFF</h1>
              <h3>Featuring Gracia, Theory, Trina Turk & More</h3>
              <button>SHOP WOMEN'S TOP</button>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ marginTop: "45px" }} />
      
    </div>
  );
};

export default Custom;
