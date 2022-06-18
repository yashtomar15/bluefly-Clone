import React from "react";
import { Productlist } from "../pages/Productlist";

export const Homepage = () => {
  const [productdata, setProdctdata] = React.useState([]);
  const [val, setval] = React.useState(1);

  React.useEffect(() => {
    fetch("https://blueflyapp.herokuapp.com/Data/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProdctdata(data);
      })
      .catch((err) => console.log(err));
    console.log(val);
  }, []);

  return (
    <div>
      <h1>home page</h1>
      {productdata.map((ele, ind) => {
        return <Productlist key={ind} {...ele} />;
      })}
    </div>
  );
};
