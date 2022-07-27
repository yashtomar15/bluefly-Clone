import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Cartpage } from "./pages/addtocart/cartpage";
import { Navbar } from "./Navbar/navbar";
import { Information } from "./pages/addtocart/Information";
import { Shipment } from "./pages/addtocart/Shipmentpage";
import { Payment } from "./pages/addtocart/Payment";
import { OtpInput } from "./pages/addtocart/Orderdone";
import { Thankyou } from "./pages/addtocart/Thankyou";
import { useNavigate } from "react-router-dom";
import { Forhome } from "./forhome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/header/Header";
import { MensPage } from "./pages/ProductPages/Menspage";
import { WomensPage } from "./pages/ProductPages/womenspage";
import SingleProduct from "./components/SingleProduct";
import { RequiredAuth } from "./components/RequiredAuth";
import { useDispatch } from "react-redux";
import { checkToken } from "./Redux/addtocart/action";
import SliderBox from './components/SliderBox';
import MobileViewSlider from "./components/MobileViewSlider";
import {ImageSlider} from './components/ImageSlider';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const val = Math.floor(1000 + Math.random() * 9000);
  const Handleinput = (otp) => {
    console.log(otp.join(""), "recvieved");
    if (otp.join("") == val) {
      navigate("/cart/information/shipment/payment/orderdone/thankyou");
    }
  };
  useEffect(() => {
    dispatch(checkToken());
  });
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<ImageSlider />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mens" element={<MensPage />}></Route>
        <Route path="/womens" element={<WomensPage />}></Route>
        <Route path="/womens/:id" element={<SingleProduct />}></Route>
        <Route path="/mens/:id" element={<SingleProduct />}></Route>
        <Route path="/temp" element={<Homepage />}></Route>
        <Route path="/cart/*" element={<Cartpage />}></Route>
        <Route path="/slider" element={<MobileViewSlider />}></Route>
        <Route  path="/cart/information"
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
        <Route
          path="/cart/information/shipment/payment/orderdone/thankyou"
          element={
            <RequiredAuth>
              <Thankyou />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
