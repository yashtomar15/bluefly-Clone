import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// page imports
import { WomensOne } from "./womenOne";
import styles from "./Styles/womens.module.css";
// import  components
import CustomizedAccordions from "./Components/FilterAccordian";
import { DropDown } from "./Components/DropDown";
import { MensOne } from "./menOne";

export const MensPage = () => {
  const [mensData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://blueflyapp.herokuapp.com/Data/men's")
      .then(({ data }) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log("error occured: ", err));
  }, []);
  const filterData = (data) => {
    setData(data);
  };
  console.log("mensdata", mensData);
  const filterTypes = ["mens", "Men's", "Men's Shirt", "Men's Pant"];

  const sortCategory = ["sortmens", "mens"];
  return (
    <div>
      <h1 className={styles.pageHeading}>Mens's Dress</h1>
      <div className={styles.Cont1}>
        <p>
          Showing <span>19605</span> results for "Men's Dresses"
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
          {mensData.map((item, i) => {
            return <MensOne key={i} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};
