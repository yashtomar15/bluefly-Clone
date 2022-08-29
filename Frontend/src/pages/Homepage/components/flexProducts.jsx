import styles from '../styles/homepage.module.css';
import { Link } from 'react-router-dom';

export const FlexProducts=({headingText,buttonText,productData})=>{
    return (
        <>
            <div className={styles.newArrivals}>
        <h1 className={styles.textUppercase}>{headingText}</h1>
        <button className={styles.homeButtons} style={{width:'8%'}}>{buttonText}</button>
      <div >
      {productData.map((item,ind)=>{
        return <div key={ind} >
          <Link to="/womens" style={{textDecoration:'none',color:'black'}}>
          <img src={item.image} alt="product arrivals"/>
           <button></button>
          <p>{item.title}</p>
          <div><s>${item.cutPrice}</s> from <span>${item.finlPrice}</span> <span>save {item.save}</span></div>
          </Link>
          </div>
      })}
      </div>
      </div>
        </>
    )
}