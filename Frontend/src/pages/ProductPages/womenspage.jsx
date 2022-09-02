import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// page imports
import { WomensOne } from "./womenOne";
import styles from "./Styles/womens.module.css";
// import  components
import CustomizedAccordions from "./Components/FilterAccordian";
import { DropDown } from "./Components/DropDown";
import {useSelector,useDispatch} from 'react-redux';
import { ADD_WOMENS_DATA,ADD_PRODUCT_DATA } from "../../Redux/prodcutPages/actiontypes";
import Header from "../../components/header/Header";
import { LowerCont } from "../Homepage/components/lowerCont";
import { OfferSlider } from "../Homepage/components/offerSlider";

export const WomensPage = () => {
  const [update, setUpdate] = useState(false);

  const {womensData}=useSelector((state)=>state.products);
console.log(womensData,'womesdata form redux');
const dispatch=useDispatch();

  useEffect(() => {
    axios
      .get("https://bluelybackend.herokuapp.com/Data")
      .then(({ data }) => {
        let filterWomensData=data.filter((item)=>{
          let pattern=/Women/;
          return pattern.test(item.category);
        })
        // console.log(filterMensData,'filterMensdata')
        dispatch({type:ADD_WOMENS_DATA,payload:filterWomensData});
        dispatch({type:ADD_PRODUCT_DATA,payload:data});
      })
      .catch((err) => console.log("error occured: ", err));
  }, []);
  const filterData = (data) => {
    // setData(data);
  };

  const filterTypes = ["womens", "Women's", "Women's wear ", "Women's jeans"];
  const sortCategory = ["sortwomens", "womens"];

  return (
    <>
   <Header /> 
<OfferSlider margintop={true}/>

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
            return <WomensOne key={i} {...item} ind={i} />;
          })}
        </div>
      </div>
    </div>

    <LowerCont />
    </>
  );
};
