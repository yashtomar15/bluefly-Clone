import React from 'react'
import {ImageSlider} from './../../components/ImageSlider';
import '../../styles/homepage.css';

export const Homepage = () => {
  return (
    <div>
      <ImageSlider />
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
    </div>
  )
}