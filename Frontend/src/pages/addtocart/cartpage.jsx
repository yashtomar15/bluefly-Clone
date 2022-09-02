import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Topcart,
  Topcart2,
  Br,
  Firstcont,
  Checkoutbutton,
  Updatebutton,
  Forbuttons,
  Forbuttons1,
  Totalcontainer,
  Removebutton,
} from "./styled";
import { Firstcartlist } from "./firstcartlist";
import { removecart, addcartdata } from "../../Redux/addtocart/action";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import {Link} from 'react-router-dom';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Information } from "./Information";
import "../../index.css";
import { OfferSlider } from "../Homepage/components/offerSlider";
import { LowerCont } from "../Homepage/components/lowerCont";

export const Cartpage = () => {
  const [render, setrender] = React.useState(0);
  const [value, setvalue] = React.useState(1);
  const { cartdata, updateddata, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  // console.log(cartdata.length)
  // console.log(cartdata,"this is cart data")
  // console.log(updateddata,"this i updated data")
  // console.log(total,"my toal cart price")
  const dispatch = useDispatch();

  // console.log(cartdata.length)
  // console.log(cartdata,"this is cart data")
  // console.log(updateddata,"this i updated data")
  // console.log(total,"my toal cart price")
  // const dispatch=useDispatch()

  const removing = (_id) => {
    dispatch(removecart(_id));
    setrender(render + 1);
  };
  return (
    <>
      <Header />
      <OfferSlider margintop={true} />

      <Topcart>
        <p className="p1">CART</p>
        <p>Continue shopping</p>
        {/* <div></div> */}
      </Topcart>
      <Topcart2>
        {/* <div></div> */}
        <div>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </Topcart2>
      <Br></Br>
      <div style={{display:'flex'}}>
      <div>
        <>
        {/* {console.log(cartdata.length,"cartdata length")} */}
          {cartdata.length > 0 ? (
            <div style={{height:'450px',overflow:'scroll',width:'120%'}}>
              {cartdata.map((ele,ind) => {
                return  <div style={{width:'90%',marginTop:"70px" }} key={ind} >
                  <Firstcartlist {...ele} func={removing} />
                  </div>
              })}
            </div>
          ) : (
            ""
          )}
        </>

        <Br></Br>
      </div>
      <Totalcontainer>
        <div></div>
        <div style={{ marginRight: "4%" }}>
          <Forbuttons1>
            <p>SUBTOTAL</p>
            <p>${total}</p>
          </Forbuttons1>
          <div style={{ margin: "10px" }}>
            <p style={{ fontSize: "10px" }}>
              Shipping, taxes, and discounts codes calculated at checkout.
            </p>
          </div>
          <Forbuttons>
            <Updatebutton
              onClick={() => {
                navigate("/cart", { replace: true });
              }}
            >
              UPDATE CART
            </Updatebutton>
            <Checkoutbutton
              onClick={() => {
                localStorage.setItem('cartroute',JSON.stringify('cart/information'));
              }}
            >
              <Link to="/cart/information" style={{color:'white',textDecoration:'none'}}>ChECKOUT</Link>
              {/* CHECKOUT */}
            </Checkoutbutton>
          </Forbuttons>
        </div>
      </Totalcontainer>
      </div>
      <Br style={{ marginTop: "2%" }}></Br>
      <LowerCont />
    </>
  );
};
