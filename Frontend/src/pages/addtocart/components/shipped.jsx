import React from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import{Backbutton,Lastbutton} from "../styled"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Shipped = () => {

    const state=useSelector((state)=>state)
    const navigate=useNavigate()
    // console.log(state.cart.address1)
  return (
    <div>
        <h3 style={{marginBottom:"5%"}}>Shipping Method</h3>
        <TextField
        id="input-with-icon-textfield"
        label="Free"
        value="S t a n d a r d"
        style={{border:"1px solid grey",width:"80%"}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{color:"blue"}}>
              <RadioButtonCheckedIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"5%"}}>
        <Backbutton onClick={()=>{
          navigate("/cart/information",{replace:true})
        }}>{"< Return to cart"}</Backbutton>
      <Lastbutton style={{marginRight:"20%"}}onClick={()=>{

        navigate("/cart/information/shipment/payment",{replace:true})
      }}>Continue to Shipping</Lastbutton>
      </div>
    </div>
  )
}
