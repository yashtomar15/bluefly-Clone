import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {
        <>
          <div id="box">
            <div id="box1">
              <h5>ABOUT US</h5>
              <br />

              <p> Contact Us</p>
              <p> Frequently Asked Questions</p>
              <p>Shipping & Returns</p>
              <p> Pre-Owned Guide</p>
            </div>
            <div id="box2">
              <br />
              <br />
              <p> Sell on bluefy</p>
              <p> Privacy Policy</p>
              <p>Terms & Condition</p>
            </div>
            <div id="box3">
              <h5>SIGNUP AND SAVE</h5>
              <br />
              <br />
              <br />
              <p> Subscribe to get exclusive offers on designer brands</p>
              <input type="text" placeholder="Enter your email" />
              <br />
              <button id="subs">Subscribe</button>
              <br />
              <span>
                {" "}
                <img
                  id="ins"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
                />
              </span>
              <span>
                {" "}
                <img
                  id="fb"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
                />
              </span>
            </div>
          </div>

          <div id="box4">
            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" />

            <p>
              © 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS
              RESERVED.
            </p>
            <br />
            <br />
            <br />
          </div>
        </>
      }
    </>
  );
};

export default Footer;
