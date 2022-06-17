import React, { useState } from "react";
import "./footer.css";

const Tab = () => {
  const [isOpen, isSetOpen] = useState(0);
  const handleOpen = (id) => {
    isSetOpen(id);
  };

  // console.log(window.innerWidth);

  return (
    <>
      {
        <>
          <div className="box1" key={1}>
            <h5 onClick={() => handleOpen(1)}>ABOUT US</h5>
            {isOpen == 1 && (
              <ul>
                <li> Contact Us </li>
                <li> Frequently Asked Questions </li>
                <li> Shipping & Returns </li>
                <li> Pre-Owned Guide </li>
              </ul>
            )}
          </div>

          <div className="box2" key={2}>
            <h5 onClick={() => handleOpen(2)}> SIGNUP AND SAVE</h5>
            {isOpen == 2 && (
              <div>
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
            )}
          </div>
          <div className="box4">
            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" />

            <p>
              © 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </>
      }
    </>
  );
};

export default Tab;

/* tab css */

// .box1 {
//   background-color: #e6e6e6;
//   /* margin-bottom: 1px solid grey;
//    */
//   border-bottom: 1px solid rgb(199, 177, 177);
//   margin: auto;
// }
// .box1 > h5,
// .box2 > h5 {
//   padding: 10px 20px;
//   font-size: 12px;
//   font-weight: 100;
//   color: #555151;
// }

// .box1 > ul li {
//   list-style: none;
//   line-height: 30px;
// }
// .box1 > ul {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .box2 {
//   background-color: #e6e6e6;
//   border-bottom: 1px solid rgb(199, 177, 177);
//   padding: 10px 1px;
// }

// .box2 > div > input {
//   margin-top: 20px;
//   width: 30%;
//   padding: 10px 50px;
//   /* border: 1px solid red; */
// }

// .box2 > div > button {
//   font-weight: bold;
//   /* border: 1px solid red; */
//   width: 45%;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   padding: 10px 30px;
//   color: #fff;
//   background-color: black;
//   cursor: pointer;
// }
// .box2 > div > span > img {
//   height: 40px;
//   padding-bottom: 20px;
// }

// .box4 {
//   padding: 20px 1px;
// }
