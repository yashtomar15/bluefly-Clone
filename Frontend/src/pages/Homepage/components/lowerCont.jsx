import React from 'react';
import { lowerImages } from '../homedata';
import styles from '../styles/homepage.module.css';
import {Link} from 'react-router-dom';

export const LowerCont=()=>{
    return (
        <div className={styles.lowerImagesDiv}>
{lowerImages.map((item,ind)=>{
    return <div key={ind}>
      <Link to="/womens" style={{textDecoration:'none',color:'black'}}>
      <img src={item.image} />
      <h2>{item.offerTagline}</h2>
      <p>{item.title}</p>
      <button className={styles.homeButtons} style={{padding:'5px'}}>{item.btn}</button>
      </Link>
          </div>
})}
</div>
    )
}