import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import{myaddress} from "../../../Redux/addtocart/action"
import { useDispatch,useSelector } from 'react-redux';
import{Lastbutton,Backbutton} from "../styled"
import { useNavigate } from 'react-router-dom';


export default function AddressForm1() {
    const[addressobj,setaddresobj]=React.useState({})
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const ref1=React.useRef()
    const ref2=React.useRef()
    const ref3=React.useRef()

    const handleChange = (event) => {
        if(event.target.value.length=="")
        {
          event.target.style.border="1px solid red"
        }
        else if(event.target.value.length>=3)
        {
          event.target.style.border="none"
          setaddresobj({...addressobj,[event.target.name]:event.target.value})
        }
      };
    
    
      function showaddressdata()
      {
        console.log(addressobj,"in address input")
                   let count=0;
                   for(let key in addressobj)
                   {
                       console.log(addressobj[key].length,"checking")
                       if(addressobj[key]!="" && addressobj[key].length>=3)
                       {
                           count++;
                       }
                   }
                   if(count<6)
                   {
                       alert("fill in all details")
                       ref1.current.style.border="1px solid red";
                       ref2.current.style.border="1px solid red";
                       ref3.current.style.border="1px solid red";
                   }
                   if(count>=6)
                   {
                    ref1.current.style.border="none";
                    ref2.current.style.border="none";
                    ref3.current.style.border="none";
                    dispatch(myaddress(addressobj))
                    navigate("/cart/information/shipment/payment/orderdone",{replace:true})
                   }
        
        
      }
      return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Shipping address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField ref={ref1}
                required
                id="firstName"
                name="name"
                label="Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                required
                id="lastName"
                name="email"
                label="email"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField ref={ref2}
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField ref={ref3}
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Save my information for a faster checkout"
              />
            </Grid>
          </Grid>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <Backbutton onClick={()=>{
              navigate("/cart/information/shipment",{replace:true})
            }}>{"< Return"}</Backbutton>
          <Lastbutton onClick={()=>{
            showaddressdata()
            // navigate("/cart/information/shipment",{replace:true})
          }}>Pay now</Lastbutton>
          </div>
          
        </React.Fragment>
      );
}