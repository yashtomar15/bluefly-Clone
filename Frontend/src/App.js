import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Component/Footer";
import NewArrival from "./Component/NewArrival";
import Offer from "./Component/Offer";
import ShopyCategory from "./Component/ShopyCategory";
import Tab from "./Component/Tab";
import Trending from "./Component/Trending";

function App() {
  const [scrWidth, setScrWidth] = useState(1200);
  useEffect(() => {
    setScrWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <div className="App">
      <ShopyCategory />

      <NewArrival />

      <Trending />

      <Offer />

      {scrWidth <= 700 ? <Tab /> : <Footer />}
    </div>
  );
}

export default App;
