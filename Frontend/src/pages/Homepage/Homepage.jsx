import React,{useState,useEffect} from 'react'
import '../../styles/homepage.css';
import {shopByCategory,newArrivals,trendingNow,lowerImages} from './homedata';
import styles from './styles/homepage.module.css';
import {UpperSlider} from './components/upperSlider';
import { MidImageSlider } from './components/midImageSlider';
import { FlexProducts } from './components/flexProducts';
import { OfferSlider } from './components/offerSlider';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { ADD_PRODUCT_DATA } from '../../Redux/prodcutPages/actiontypes';
import Header from '../../components/header/Header';
import { LowerCont } from './components/lowerCont';

export const Homepage = () => {
const state=useSelector((state)=>state);
const dispatch=useDispatch();
let token=JSON.parse(localStorage.getItem('token'));

useEffect(()=>{
  if(token){
    dispatch({type:"SET TOKEN",payload:token});
  }  
},[])
  return (
    <>
    <Header />
    <div style={{position:"relative",top:'20px'}}>

      <OfferSlider />
      {/* <p>hello</p> */}
      <UpperSlider />

      <div className="dressDiv">
        <div className="woDiv">
          <div className="dress">
            <div className="cwoDiv">
              <h2>DRESSES FOR EVERY OCCASION</h2>
              <h1>UP TO 94% OFF</h1>
              <h3>Featuring BCBGMaxazria, Halston, Kay Unger &More</h3>
              <button>SHOP DRESSES</button>
            </div>
          </div>
          <div className="bautique">
            <div className="cwoDiv2">
              <h2>DESIGNER BOUTIQUE</h2>
              <h1>UP TO 84% OFF</h1>
              <h3>
                Best-Selling Style from: Gucci, Valentino, Balenciaga, Stuart
                Weitzman & More
              </h3>
              <button style={{ width: "70%" }}>SHOP DESIGNER BOUTIQUE</button>
            </div>
          </div>
          <div className="top">
            <div className="cwoDiv2">
              <h2>TRENDING TOPS FOR THE NEW SEASON</h2>
              <h1>UP TO 85% OFF</h1>
              <h3>Featuring Gracia, Theory, Trina Turk & More</h3>
              <button>SHOP WOMEN'S TOP</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.shopByCategoryHeading}>shop by category</h2>
      <div className={styles.shopByCategory}>
        {shopByCategory.map((item,ind)=>{
          return <div key={ind}>
            <Link to="womens" style={{textDecoration:'none',color:'black'}}>
            <img src={item.image} alt={"products"}/>
            <p >{item.title}</p>
            </Link>
            </div>
        })}
      </div>

      <MidImageSlider />
    
    {/* For new Arrival products */}
    {/* <div className={styles.line}></div> */}
      <FlexProducts 
      headingText={"new Arrivals"} 
      buttonText={"view All"}
       productData={newArrivals}/> 

   {/* For trending now products */}
   <div className={styles.line}></div>
   <FlexProducts 
      headingText={"Trending now"} 
      buttonText={"view All"}
       productData={trendingNow}/> 

{/* <div className={styles.line}></div> */}
{/*Lower images div */}
<LowerCont />

 </div>
 </>
  )
}