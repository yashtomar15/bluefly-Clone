import React from "react";
import{Routes,Route} from "react-router-dom"
import{Homepage} from "./pages/Homepage"
import{Cartpage} from "./pages/addtocart/cartpage"
import{Navbar} from "./Navbar/navbar"
import{Information} from "./pages/addtocart/Information"
import { WomensPage } from "./pages/ProductPages/womenspage";

function App() {
  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/cart/*" element={<Cartpage/>}></Route>
      <Route path="/cart/information" element={<Information/>}></Route>
    </Routes>
{/* <WomensPage/> */}
  </div>;
}

export default App;
