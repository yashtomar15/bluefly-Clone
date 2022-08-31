import React, { useState,useEffect } from "react";
import "./styles/dropdown.css";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { ADD_MENS_DATA, ADD_WOMENS_DATA ,ADD_PRODUCT_DATA} from "../../../Redux/prodcutPages/actiontypes";

// resuable dropdown
// sortCategory[0]=sortwomens||sortmens
// sortCategory[1] = mens || womens
export const DropDown = ({ filterData, sortCategory }) => {
  const [Value, setValue] = useState("Bestselling");
  const {productsData,mensData,womensData}=useSelector((state)=>state.products);
  // console.log(productsData,"productsdata from redux dropdown");
  const dispatch=useDispatch();

  const filterByCategory=(category)=>{
    let filterData=productsData.filter((item)=>{
      let pattern;
      if(sortCategory[1]==="Men"){
         pattern=/Men/;
      }else{
        pattern=/Women/;
      }
      return pattern.test(item.category) && item.Trending===category;
    })
    // console.log(filterData,"filter data by category")
    if(sortCategory[1]==="Men"){
      dispatch({type:ADD_MENS_DATA,payload:filterData});
    }else{
      dispatch({type:ADD_WOMENS_DATA,payload:filterData});
    }
  }
 
 const sortByprice=(order)=>{
  if(order==="inc"){
    if(sortCategory[1]==="Men"){
      let sortMensData=mensData.sort((a,b)=>{return Number(a.price)-Number(b.price)});
      console.log(sortMensData,"sort mensdata by price in inc");
      dispatch({type:ADD_MENS_DATA,payload:sortMensData});
    }
    else{
     let sortWomensData=womensData.sort((a,b)=>{return Number(a.price)-Number(b.price)});
     console.log(sortWomensData,"sort Womensdata by price in inc");
     dispatch({type:ADD_WOMENS_DATA,payload:sortWomensData});
   }
  }else if(order==="dec"){
    if(sortCategory[1]==="Men"){
      let sortMensData=mensData.sort((a,b)=>{return Number(b.price)-Number(a.price)});
      console.log(sortMensData,"sort mensdata by price in dec");
      dispatch({type:ADD_MENS_DATA,payload:sortMensData});
    }
    else{
     let sortWomensData=womensData.sort((a,b)=>{return Number(b.price)-Number(a.price)});
     console.log(sortWomensData,"sort Womensdata by price in dec");
     dispatch({type:ADD_WOMENS_DATA,payload:sortWomensData});
   }
  }
 
 }

 const sortByTitle=(order)=>{
  if(order==='inc'){
    if(sortCategory[1]==="Men"){
      let sortMensData=mensData.sort((a,b)=>{return a.title.toLowerCase().charCodeAt()-b.title.toLowerCase().charCodeAt()});
      console.log(sortMensData,"sort mensdata in inc by title");
      dispatch({type:ADD_MENS_DATA,payload:sortMensData});
    }
    else{
     let sortWomensData=womensData.sort((a,b)=>{return a.title.toLowerCase().charCodeAt()-b.title.toLowerCase().charCodeAt()});
     console.log(sortWomensData,"sort Womensdata in inc by title");
     dispatch({type:ADD_WOMENS_DATA,payload:sortWomensData});
   }
  }else if(order==='dec'){ 
    if(sortCategory[1]==="Men"){
      let sortMensData=mensData.sort((a,b)=>{return b.title.toLowerCase().charCodeAt()-a.title.toLowerCase().charCodeAt()});
      console.log(sortMensData,"sort mensdata in dec by title");
      dispatch({type:ADD_MENS_DATA,payload:sortMensData});
    }
    else{
     let sortWomensData=womensData.sort((a,b)=>{return b.title.toLowerCase().charCodeAt()-a.title.toLowerCase().charCodeAt()});
     console.log(sortWomensData,"sort Womensdata in dec by title");
     dispatch({type:ADD_WOMENS_DATA,payload:sortWomensData});
   }
  }
  
 }
  const handleClick = (e) => {
    let text = e.target.innerText;
    {
      if (text[0] === "B") {
        //  for bestseller
       filterByCategory('Bestseller');
        setValue("Trending");
        setValue("Bestselling");
      } else if (text[text.length - 1] === "Z") {
        sortByTitle('inc')
        setValue("Title: A-Z");
      } else if (text[text.length - 1] === "A") {
        
        sortByTitle('dec');
        setValue("Title: Z-A");
      } else if (text[text.length - 1] === "D") {
        if(sortCategory[1]==="Men"){
          let sortMensData=mensData.sort((a,b)=>{return a.title.toLowerCase().charCodeAt()-b.title.toLowerCase().charCodeAt()});
          console.log(sortMensData,"sort mensdata");
          dispatch({type:ADD_MENS_DATA,payload:sortMensData});
        }
        else{
         let sortWomensData=womensData.sort((a,b)=>{return a.title.toLowerCase().charCodeAt()-b.title.toLowerCase().charCodeAt()});
         console.log(sortWomensData,"sort Womensdata");
         dispatch({type:ADD_WOMENS_DATA,payload:sortWomensData});
       }
        setValue("Date: New To Old");
      } else if (text[text.length - 1] === "H") {
        sortByprice("inc");
        setValue("Price: Low To High");
      } else if (text[text.length - 1] === "W") {
        sortByprice('dec');
        setValue("Price: High To Low");
      } else if (text[7] === "T") {
        // discount is not present in data.
        sortByprice('dec');
        setValue("Discount: High To Low");
      } else if (text[text.length - 1] === "G") {
        filterByCategory('Trending');
        setValue("Trending");
      }
    }
  };
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">{Value}</button>
        <div className="dropdown-content">
          <p onClick={handleClick}>BESTSELLING</p>
          <p onClick={handleClick}>TITLE: A-Z</p>
          <p onClick={handleClick}>TITLE: Z-A</p>
          <p onClick={handleClick}>DATE: NEW TO OLD</p>
          <p onClick={handleClick}>PRICE: LOW TO HIGH</p>
          <p onClick={handleClick}>PRICE: HIGH TO LOW</p>
          <p onClick={handleClick}>DISCOUNT: HIGH TO LOW</p>
          <p onClick={handleClick}>TRENDING</p>
        </div>
      </div>
    </>
  );
};
