import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// page imports
import { WomensOne } from "./womenOne";
import styles from "./Styles/womens.module.css";
// import  components
import CustomizedAccordions from "./Components/FilterAccordian";
import { DropDown } from "./Components/DropDown";

export const WomensPage = () => {
  const [womensData, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    axios
      .get("https://blueflyapp.herokuapp.com/Data/Women's")
      .then(({ data }) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log("error occured: ", err));
  }, []);
  const filterData = (data) => {
    setData(data);
  };

  const filterTypes = ["womens", "Women's", "Women's wear", "Women's jeans"];
  const sortCategory = ["sortwomens", "womens"];

  return (
    <div>
      <h1 className={styles.pageHeading}>Womens's Dress</h1>
      <div className={styles.Cont1}>
        <p>
          Showing <span>19605</span> results for "Women's Dresses"
        </p>
        <div>
          <DropDown filterData={filterData} sortCategory={sortCategory} />
        </div>
      </div>
      <div className={styles.clothesContainer}>
        <div>
          <CustomizedAccordions
            filterData={filterData}
            filterCategory={filterTypes}
          />
        </div>
        <div className={styles.dresess}>
          {womensData.map((item, i) => {
            return <WomensOne key={i} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};
