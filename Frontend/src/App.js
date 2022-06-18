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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart/*" element={<Cartpage />}></Route>
        <Route path="/cart/information" element={<Information />}></Route>
        <Route path="/products" element={<WomensPage />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/singleProduct" element={<ProductPage />}></Route>
      </Routes>
      {/* <WomensPage/> */}
    </div>
  );
}

export default App;
