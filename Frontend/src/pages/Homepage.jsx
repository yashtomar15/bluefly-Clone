import React from "react";
import { useSelector } from "react-redux";
import { Productlist } from "../pages/Productlist";

export const Homepage = () => {
  const [productdata, setProdctdata] = React.useState([]);
  const [val, setval] = React.useState(1);
  const state = useSelector((store) => store);
  console.log(state);

  React.useEffect(() => {
    fetch("https://blueflyapp.herokuapp.com/Data/")
      .then((res) => res.json())
      .then((data) => {
        setProdctdata(data);
      })
      .catch((err) => console.log(err));
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
