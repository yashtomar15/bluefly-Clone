import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sideinfodiv, Sideinfodivcont, Br, Forbuttons2 } from "../styled";
import { Loaddata, Savedata } from "../../../utils/localstorage";
import { mycoupon } from "../../../Redux/addtocart/action";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

export const Sideinfo = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let img = state.cart.cartdata[0].images1["main"];
  const [input, setinput] = React.useState("");
  const shapeStyles = { bgcolor: `${img}`, width: 80, height: 80 };
  const rectangle = <Box component="span" sx={shapeStyles} />;
  // console.log(state);

  const applycopoun = () => {
    console.log(state.cart.coupon);
    if (input === "get10off" && state.cart.coupon == 0) {
      console.log(input);
      const data = Loaddata("total");
      let newtotal = data - data * 0.1;
      console.log(newtotal);
      Savedata("total", newtotal);
      alert("10% off coupon applied successfully");
      dispatch(mycoupon(1));
      // window.location.reload(false)
    } else if (input === "firstorder20" && state.cart.coupon === 0) {
      console.log(input);
      const data = Loaddata("total");
      let newtotal = data - data * 0.2;
      console.log(newtotal);
      Savedata("total", newtotal);
      alert(" 20% off coupon applied successfully");
      dispatch(mycoupon(1));
      //   window.location.reload(false);
    } else if (input == "welcome30" && state.cart.coupon == 0) {
      console.log(input);
      const data = Loaddata("total");
      let newtotal = data - data * 0.3;
      console.log(newtotal);
      Savedata("total", newtotal);
      alert(" 30% off coupon applied successfully");
      dispatch(mycoupon(1));
      //   window.location.reload(false);
    } else if (state.cart.coupon == 1) {
      alert("Coupon already applied");
    }
  };
  return (
    <Sideinfodiv>
      {state.cart.updateddata.map((ele,ind) => {
        return (
          <Sideinfodivcont key={ind}>
            <div style={{ marginTop: "5%" }}>
              <Badge color="secondary" badgeContent={ele.quant}>
                {
                  <img
                    src={ele.images1.main}
                    style={{ borderRadius: "20px" ,width:'60px',height:'60px'}}
                  ></img>
                }
              </Badge>
            </div>
            <div>
              <p>{ele.title}</p>
            </div>
            <div>
              <p>${ele.price * ele.quant}</p>
            </div>
          </Sideinfodivcont>
        );
      })}
      <Br style={{ width: "80%", margin: "auto" }} />
      <div>
        <input
          placeholder="Gift Card or discount code"
          style={{
            height: "50px",
            marginTop: "5%",
            marginLeft: "25%",
            width: "250px",
          }}
          onChange={(e) => setinput(e.target.value)}
        />
        <button
          style={{
            height: "50px",
            width: "50px",
            border: "none",
            background: "grey",
            color: "white",
          }}
          onClick={applycopoun}
        >
          Apply
        </button>
      </div>
      <Br style={{ width: "80%", margin: "auto", marginTop: "6%" }} />

      <div>
        <Forbuttons2>
          <p>Subtotal</p>
          <p>${state.cart.total}</p>
        </Forbuttons2>
        <Forbuttons2>
          <p>Shipping </p>
          <p>$19.95</p>
        </Forbuttons2>
        <Forbuttons2>
          <p>Taxes (estimated)</p>
          <p style={{ marginRight: "3%" }}>$60.00</p>
        </Forbuttons2>
      </div>
      <Br style={{ width: "80%", margin: "auto", marginTop: "6%" }} />

      <Forbuttons2>
        <p>Total</p>
        <p>${state.cart.total + Number(19.95) + Number(60.0)}</p>
      </Forbuttons2>
    </Sideinfodiv>
  );
};
