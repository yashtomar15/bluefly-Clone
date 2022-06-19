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

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Information } from "./Information";

import "../../index.css";
export const Cartpage = () => {
  const [render, setrender] = React.useState(0);
  const [value, setvalue] = React.useState(1);
  const { cartdata, updateddata, total } = useSelector((state) => state);
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
      <Topcart>
        <p className="p1">CART</p>
        <p>Continue shopping</p>
        <div></div>
      </Topcart>
      <Topcart2>
        <div></div>
        <div>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </Topcart2>
      <Br></Br>
      <div style={{ marginTop: "10%" }}>
        <>
          {cartdata.length > 0 ? (
            <div>
              {cartdata.map((ele) => {
                return <Firstcartlist {...ele} key={ele._id} func={removing} />;
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
                navigate("/cart/information", { replace: true });
              }}
            >
              CHECKOUT
            </Checkoutbutton>
          </Forbuttons>
        </div>
      </Totalcontainer>
      <Br style={{ marginTop: "2%" }}></Br>
    </>
  );
};
