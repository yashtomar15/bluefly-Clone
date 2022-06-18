import React from "react";
import { Homepage } from "./pages/Homepage";
import { Cartpage } from "./pages/addtocart/cartpage";
import { Navbar } from "./Navbar/navbar";
import { Information } from "./pages/addtocart/Information";
import { WomensPage } from "./pages/ProductPages/womenspage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SingleProduct from "./components/SingleProduct";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Shipment } from "./pages/addtocart/Shipmentpage";
import { Payment } from "./pages/addtocart/Payment";
import { OtpInput } from "./pages/addtocart/Orderdone";
import { MensPage } from "./pages/ProductPages/Menspage";
import { RequiredAuth } from "./components/RequiredAuth";
function App() {
  const val = Math.floor(1000 + Math.random() * 9000);
  const Handleinput = (otp) => {
    console.log(otp.join(""), "recvieved");
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart/*" element={<Cartpage />}></Route>
          <Route
            path="/cart/information"
            element={
              <RequiredAuth>
                <Information />
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/cart/information/shipment"
            element={
              <RequiredAuth>
                <Shipment />
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/cart/information/shipment/payment"
            element={
              <RequiredAuth>
                <Payment />
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/cart/information/shipment/payment/orderdone"
            element={
              <RequiredAuth>
                <OtpInput totalInputs={4} onChange={Handleinput} val={val} />
              </RequiredAuth>
            }
          ></Route>
          <Route path="/womens" element={<WomensPage />}></Route>
          <Route path="/mens" element={<MensPage />}></Route>
          <Route path="/womens/:id" element={<SingleProduct />}></Route>
          <Route path="/mens/:id" element={<SingleProduct />}></Route>
          <Route path="/singleProduct" element={<ProductPage />}></Route>
        </Routes>
        {/* <WomensPage/> */}
      </div>
    </div>
  );
}

export default App;
