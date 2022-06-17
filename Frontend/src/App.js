import React from "react";
import{Routes,Route} from "react-router-dom"
import{Homepage} from "./pages/Homepage"
import{Cartpage} from "./pages/addtocart/cartpage"
import{Navbar} from "./Navbar/navbar"
import{Information} from "./pages/addtocart/Information"
import{Shipment} from "./pages/addtocart/Shipmentpage"
import{Payment} from "./pages/addtocart/Payment"
import{OtpInput} from "./pages/addtocart/Orderdone"
function App() {

  const val=Math.floor(1000 + Math.random() * 9000);
  const Handleinput=(otp)=>{
    console.log(otp.join(""),"recvieved")
  }
  return <div className="App">
    <Navbar/>
    <Routes>


      
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/cart/*" element={<Cartpage/>}></Route>
      <Route path="/cart/information" element={<Information/>}></Route>
      <Route path="/cart/information/shipment" element={<Shipment/>}></Route>
      <Route path="/cart/information/shipment/payment" element={<Payment/>}></Route>
      <Route path="/cart/information/shipment/payment/orderdone" element={<OtpInput totalInputs={4} onChange={Handleinput} val={val}/>}></Route>
    </Routes>
  </div>;
}

export default App;
