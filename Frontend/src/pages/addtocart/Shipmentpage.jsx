import React from "react";
import { Cartnavbar } from "./components/cartnavbar";
import { Maininfopage, Br } from "./styled";
import { Sideinfo } from "./components/sideinfo";
import { Shipped } from "./components/shipped";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Shipment = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  console.log(state);
  return (
    <div>
      <div style={{ marginLeft: "5%" }}>
        <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?187446" />
        <Cartnavbar />
      </div>
      <Maininfopage>
        <div style={{ width: "50%" }}>
          <div
            style={{
              width: "80%",
              height: "60px",
              border: "1px solid grey",
              marginTop: "5%",
              marginBottom: "5%",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: "1%",
                alignItems: "center",
              }}
            >
              <p style={{ color: "grey" }}>Contact</p>
              <p>{state.address1.email}</p>
              <p
                tyle={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => navigate("/cart/information")}
              >
                Change
              </p>
            </div>
            <Br style={{ width: "90%", margin: "auto" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "1%",
              }}
            >
              <p style={{ color: "grey" }}>Ship to</p>
              <p>{state.address1.address1}</p>
              <p
                tyle={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => navigate("/cart/information")}
              >
                Change
              </p>
            </div>
          </div>
          <Shipped />
        </div>
        <div style={{ height: "817px", width: "600px" }}>
          <Sideinfo />
        </div>
      </Maininfopage>
    </div>
  );
};
