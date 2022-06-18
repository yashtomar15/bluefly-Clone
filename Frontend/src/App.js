import React from "react";
import{Routes,Route} from "react-router-dom"
import{Homepage} from "./pages/Homepage"
import{Cartpage} from "./pages/addtocart/cartpage"
import{Navbar} from "./Navbar/navbar"
import{Information} from "./pages/addtocart/Information"
import{Shipment} from "./pages/addtocart/Shipmentpage"
import{Payment} from "./pages/addtocart/Payment"
import{OtpInput} from "./pages/addtocart/Orderdone"
import{Thankyou} from "./pages/addtocart/Thankyou"
import{useNavigate} from "react-router-dom"
function App() {
const navigate=useNavigate()
  const val=Math.floor(1000 + Math.random() * 9000);
  const Handleinput=(otp)=>{
    console.log(otp.join(""),"recvieved")
    if(otp.join("")==val)
    {
      navigate("/cart/information/shipment/payment/orderdone/thankyou")
    }
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
      <Route path="/cart/information/shipment/payment/orderdone/thankyou" element={<Thankyou/>}></Route>

    </Routes>
  </div>;
}

export default App;
