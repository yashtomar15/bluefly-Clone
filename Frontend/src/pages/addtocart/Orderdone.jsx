import React from 'react'
import "./otp.css"
import {Link, useNavigate} from 'react-router-dom';
import { Thankyou } from './Thankyou';

export const OtpInput=({totalInputs,onChange,val})=>{
    const navigate=useNavigate();
    const inputRef=React.useRef([]);
    const [data,setdata]=React.useState([]);

//   if(data.length===4){
//     navigate('cart/information/shipment/payment/orderdone/thankyou',{replace:true});
//   }
    // React.useEffect(()=>{
    //     // var val = Math.floor(1000 + Math.random() * 9000);
    //     setTimeout(()=>{
    //         alert(`your otp is ${val}`)
    //         console.log("hello")
    //     },2000)
        
    // },[])

    const showotp=()=>{
        alert(`your otp is ${val}`)
    }
    React.useMemo(showotp,[])
    const handlePaste=(e)=>{
        e.preventDefault()
        console.log(e.clipboardData.getData("Text"))
    }
    return(
        <div onPaste={handlePaste} style={{border:"1px solid white",margin:"auto",width:"30%",height:"400px"}}>
            {/* <Link to='cart/information/shipment/payment/orderdone/thankyou' style={{fontSize:'25px'}}>Check</Link> */}
            <h1 style={{marginLeft:"20%"}} >Enter the Otp</h1>
            <img src="https://image.shutterstock.com/image-vector/secure-payment-vector-illustration-test-600w-1860566662.jpg"  style={{marginLeft:"10%",width:"350px", height:"200px"}}/>
            <div style={{marginLeft:"10%"}}>
            {
                new Array(totalInputs).fill(0).map((ele,index)=><input type="text" className='otpinput'  maxLength={1} key={index}
                ref={(element)=>{
                    console.log(element)
                    if(inputRef.current && element) //make sure that element is not null and send valid value to ref array
                    {
                        inputRef.current[index]=element
                    }
                   
                }}
                onChange={(e)=>{
                    console.log(e.target.value,index,"checking")
                    data[index]=Number(e.target.value)
                    setdata([...data])}}
                onKeyUp={(e)=>{
                    console.log(e)
                    // prevent getting error when it reaches last index

                    if(index==inputRef.current.length-1)
                    {
                        if(e.code=="Backspace")
                        {
                            inputRef.current[index-1].focus()
                            inputRef.current[index-1].select()
                            data.splice(index,1)
                            setdata([...data])
                        }
                        onChange(data)
                        return index-2
                    }
                    if(e.code=="Backspace")
                    {
                        inputRef.current[index-1].focus()
                        inputRef.current[index-1].select()
                        data.splice(index,1)
                        setdata([...data])
                    }
                    else
                    {
                        inputRef.current[index+1].focus()
                    }
                    onChange(data)
                }}/>)
            }
            </div>
            <button style={{backgroundColor:'black',color:'black',marginLeft:'25px',marginTop:'10px'}}><Link to='thankyou' style={{fontSize:'25px',textDecoration:'none',color:'white',padding:'10px'}}> Submit </Link></button>
            {/* <div style={{marginLeft:"22%",marginTop:"2%"}}>
                <img src="https://image.shutterstock.com/image-vector/secure-internet-connection-ssl-icon-600w-594228239.jpg"  style={{height:"90px", width:"100px"}}/>
                <img src="https://image.shutterstock.com/image-vector/secure-protected-payments-icon-600w-293600882.jpg" style={{height:"90px", width:"100px"}}/>
            </div> */}
        
        </div>
    )
}