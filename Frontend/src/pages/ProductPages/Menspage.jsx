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
import {useSelector,useDispatch} from 'react-redux';
import { ADD_MENS_DATA,ADD_PRODUCT_DATA } from "../../Redux/prodcutPages/actiontypes";
import Header from "../../components/header/Header";
import { LowerCont } from "../Homepage/components/lowerCont";
import { OfferSlider } from "../Homepage/components/offerSlider";

export const MensPage = () => {
  const {mensData,productsData}=useSelector((state)=>state.products);
  const dispatch=useDispatch();

  const sortByprice=(order)=>{
    if(order==="inc"){
        let sortMensData=mensData.sort((a,b)=>{return Number(a.price)-Number(b.price)});
        console.log(sortMensData,"sort mensdata by price in inc");
        dispatch({type:ADD_MENS_DATA,payload:sortMensData});
    }else if(order==="dec"){
        let sortMensData=mensData.sort((a,b)=>{return Number(b.price)-Number(a.price)});
        console.log(sortMensData,"sort mensdata by price in dec");
        dispatch({type:ADD_MENS_DATA,payload:sortMensData});   
    }
   
   }

  
  useEffect(() => {
    axios
      .get("https://bluelybackend.herokuapp.com/Data")
      .then(({ data }) => {
        let filterMensData=data.filter((item)=>{
          let pattern=/Men/;
          return pattern.test(item.category);
        })
        // console.log(filterMensData,'filterMensdata')
        // mensData=[...filterData];
        dispatch({type:ADD_MENS_DATA,payload:filterMensData});
        dispatch({type:ADD_PRODUCT_DATA,payload:data});
      })
      .catch((err) => console.log("error occured: ", err));
  }, []);
  const filterData = (data) => {
    // setData(data);
  };
  const filterTypes = ["mens", "Men's", "Men's Shirt", "Men's Pant"];

  const sortCategory = ["sortmens", "Men"];
  return (
    <>
    <Header />
    <OfferSlider margintop={true}/>

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
          {mensData && mensData.map((item, i) => {
            return <MensOne key={i} {...item} ind={i}/>;
          })}
        </div>
      </div>
    </div>

    <LowerCont />
    </>
  );
};
