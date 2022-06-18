import React from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { addcartdata } from '../Redux/addtocart/action'
export const Productlist = (ele) => {
const {cartdata}=useSelector((state)=>state)


console.log(cartdata)
const dispatch=useDispatch()
  return (
    <div>
    <h3>{ele.title}</h3>
    <img src={ele.images1.bottom} height="200" width="200"/>
    <p>{ele.brand}</p>
    <p>{ele.price}</p> 

    <button onClick={()=>{
        dispatch(addcartdata(ele))
    }}>Add to Cart</button>

</div>
  )
}
