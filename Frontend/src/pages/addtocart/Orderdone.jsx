import React from 'react'
import "./otp.css"



export const OtpInput=({totalInputs,onChange,val})=>{
    const inputRef=React.useRef([])
    const [data,setdata]=React.useState([])


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
            <h1 style={{marginLeft:"20%"}} >Enter the Otp</h1>
            <img src="https://image.shutterstock.com/image-vector/secure-payment-vector-illustration-test-600w-1860566662.jpg" width="300" height="200" style={{marginLeft:"10%"}}/>
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
            <div style={{marginLeft:"22%",marginTop:"2%"}}>
                <img src="https://image.shutterstock.com/image-vector/secure-internet-connection-ssl-icon-600w-594228239.jpg" height="90" width="100"/>
                <img src="https://image.shutterstock.com/image-vector/secure-protected-payments-icon-600w-293600882.jpg" height="90" width="100"/>
            </div>
           
        </div>
    )
}