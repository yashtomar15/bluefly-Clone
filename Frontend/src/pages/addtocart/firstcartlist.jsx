import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import{Topcart,Topcart2,Br,Firstcont,Removebutton} from "./styled";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../../index.css"

import{totalandquant} from "../../Redux/addtocart/action"

export const Firstcartlist = (ele) => {
    const [value,setvalue]=React.useState(1)
    const[render,setrender]=React.useState(0)
    // console.log(ele.func,"js check")
    const dispatch=useDispatch()
    const{total}=useSelector((state)=>state.cart)
    // console.log(total)

    React.useEffect(()=>{
        let obj={"_id":ele._id,"value":value}
        dispatch(totalandquant(obj))
    },[])
    
  return (
    <>
    <Firstcont>
                <div >
                    <img src={ele.images1.main} style={{height:'150px',width:'250px',marginTop:'-30px'}}/>
                </div>
                <div>
                    <p className="title">{ele.title}</p>
                    <Removebutton onClick={()=>{
                        ele.func(ele._id)
                        window.location.reload(false);}}>Remove</Removebutton>
                </div>
                <div>
                    <p>{`${ele.price}`}</p>
                </div>
                <div>
                    <div style={{position:"relative"}}>
                        <input value={value} style={{height:"48px",width:"70px"}}onChange={(e)=>{
                            setvalue(e.target.value)
                            let obj={"_id":ele._id,"value":e.target.value}
                            dispatch(totalandquant(obj))}}/>
                            <div style={{display:"flex",flexDirection:"column",position:"absolute",top:"10%",left:"76%",margin:"auto"}}>
                            <button style={{width:"100%",height:"8%"}} onClick={()=>{
                                    setvalue(value+1)
                                    console.log(value,"checking")
                                    let obj={"_id":ele._id,"value":ele.quant+1||1}
                                    dispatch(totalandquant(obj)) 
                                }}>ꜛ</button>
                              <button style={{width:"100%",height:"8%"}} onClick={()=>{
                                    setvalue(value-1)
                                    let obj={"_id":ele._id,"value":ele.quant-1||1}
                                    dispatch(totalandquant(obj)) 
                              }}>ꜜ</button>
                            </div>
     
                    </div>
                </div>
                <div>
                    <p>${(ele.price*value)}</p>
                </div>
               </Firstcont>
    </>
    
  )
}
