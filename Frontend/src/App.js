<<<<<<< HEAD
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <ProductPage />
        <Signup />
        <Login />
      </div>
    </div>
  );
=======
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
>>>>>>> main
}

export default App;
