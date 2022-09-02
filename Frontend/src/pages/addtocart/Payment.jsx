import React from "react";
import { Cartnavbar } from "./components/cartnavbar";
import{Maininfopage,Br,Lastbutton,Backbutton} from "./styled"
import{Sideinfo} from "./components/sideinfo"
import{Shipped} from "./components/shipped"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaymentForm from "./components/PaymentForm"
import { positions } from "@mui/system";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AddressForm1 from "./components/Editaddress"

export const Payment = () => {
  const state=useSelector((state)=>state)
  const[addre,setaddre]=React.useState(false)
  const myref=React.useRef("")
  const myref1=React.useRef("")
  const navigate=useNavigate()
  // console.log(state.cart)

  const helo=()=>{
    console.log("hello")
    myref.current.style.color="blue"
    myref1.current.style.color="grey"
    setaddre(true)
  }
  const helo1=()=>{
    myref.current.style.color="grey"
    myref1.current.style.color="blue"
    setaddre(false)
  }
  return(
      <div>
      <div style={{marginLeft:"5%"}}>
      <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?187446"/>
      <Cartnavbar/>
      </div>
      <Maininfopage>
         <div style={{width:"50%"}}>
          <div style={{width:"80%",height:"85px",border:"1px solid grey",marginTop:"5%",marginBottom:"5%",borderRadius:"5px",alignItems:"center"}}>
              <div style={{display:"flex",justifyContent:"space-around",paddingBottom:"1%",alignItems:"center"}}>
                  <p style={{color:"grey"}}>Contact</p>
                  <p>{state.cart.address1.email}</p>
                  <p style={{fontWeight:"bold",cursor:"pointer"}} onClick={()=>navigate("/cart/information")}>Change</p>
              </div>
              <Br style={{width:"90%",margin:"auto"}}/>
              <div style={{display:"flex",justifyContent:"space-around",paddingTop:"1%",paddingBottom:"1%"}}>
                  <p style={{color:"grey"}}>Ship to</p>
                  <p>{state.cart.address1.address1}</p>
                  <p style={{fontWeight:"bold",cursor:"pointer"}} onClick={()=>navigate("/cart/information")}>Change</p>
              </div>
              <Br style={{width:"90%",margin:"auto"}}/>
              <div style={{display:"flex",justifyContent:"space-around",paddingTop:"1%"}}>
                <p style={{marginRight:"27%",color:"grey"}}>Method</p>
                <p>Standard · Free</p>
                <p></p>
              </div>
          </div>
          {/* <PaymentForm/> */}
          <div style={{height:"500px",width:"90%",position:"relative"}}>
            <img src="https://raw.githubusercontent.com/darkwingpatil/sudoku/main/payment.png" height="350" width="90%"/>
            <div>
            <input placeholder="Card Number" style={{height:"63px",width:"85%",position:"absolute",top:"20%",left:"3%",borderRadius:"5px"}}/>
            <input placeholder="name on card" style={{height:"63px",width:"85%",position:"absolute",top:"36%",left:"3%",borderRadius:"5px"}}/>
            <input placeholder="Expiration date" style={{height:"63px",width:"42%",position:"absolute",top:"51%",left:"3%",borderRadius:"5px"}}/>
            <input placeholder="security" style={{height:"63px",width:"42%",position:"absolute",top:"51%",left:"46%",borderRadius:"5px"}}/>
            </div>
            <div style={{marginTop:"5%"}}>
            <h2>Billing address</h2>
            <p>Select the address that matches your card or payment method.</p>
            <div>
            <TextField
        id="input-with-icon-textfield"
        // label="Free"
        value="Same as shipping address"
        style={{border:"1px solid grey",width:"80%",marginTop:"5%"}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" ref={(ele)=>{
              myref1.current=ele
            }} style={{color:"blue",cursor:"pointer",borderRadius:"5px"}} onClick={helo1}>
              <RadioButtonCheckedIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
       <TextField
        id="input-with-icon-textfield"
        // label="Free"
        value="Use a different billing address"
        style={{border:"1px solid grey",width:"80%"}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" ref={(ele)=>{
              myref.current=ele
            }} style={{color:"grey",cursor:"pointer",borderRadius:"5px"}} onClick={helo}>
              <RadioButtonCheckedIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      {addre?<AddressForm1/>:""}
      {!addre? <div style={{display:"flex",justifyContent:"space-between"}}>
            <Backbutton onClick={()=>{
              navigate("/cart/information/shipment",{replace:true})
            }}>{"< Return"}</Backbutton>
          <Lastbutton onClick={()=>{
            navigate("/cart/information/shipment/payment/orderdone",{replace:true})
          }}>Pay now</Lastbutton>
          </div>:""}
            </div>

          </div>
          </div>

         </div>
         <div style={{height:"817px",width:"600px"}}>
          <Sideinfo/>
         </div> 
      </Maininfopage>
      </div>
  )
}

