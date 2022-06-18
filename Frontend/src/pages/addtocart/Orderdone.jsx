import React from 'react'
import "./otp.css"



export const OtpInput=({totalInputs,onChange,val})=>{
    const inputRef=React.useRef([])
    const [data,setdata]=React.useState([])


    React.useEffect(()=>{
        // var val = Math.floor(1000 + Math.random() * 9000);
        setTimeout(()=>{
            alert(`your otp is ${val}`)
            console.log("hello")
        },2000)
        
    },[])

    const handlePaste=(e)=>{
        e.preventDefault()
        console.log(e.clipboardData.getData("Text"))
    }
    return(
        <div onPaste={handlePaste}>
            <h1 >Enter the Otp</h1>
            {
                new Array(totalInputs).fill(0).map((ele,index)=><input type="text" className='otpinput' maxLength={1} key={index}
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
    )
}