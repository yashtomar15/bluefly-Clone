import React from 'react'
import{useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
export const Thankyou = () => {
  const state=useSelector((state)=>state)
  console.log(state,"done with this")
    const navigate=useNavigate()
    React.useEffect(()=>{
        setTimeout(()=>{
          // fetch(" https://blueflyapp.herokuapp.com/Purchase",{
          //   method:"POST",
          //   headers: {
          //     'Content-Type': 'application/json'
          //     // 'Content-Type': 'application/x-www-form-urlencoded',
          //   },
          //   body:JSON.parse(state.cartdata)
          // })
            navigate("/",{replace:"true"})
            localStorage.clear();
            window.location.reload(false);
        },10000)
    },[])
  return (
    <div>
        <img src='https://raw.githubusercontent.com/darkwingpatil/Task-manag/main/rhodes.png' height="100%" width="100%"/>
    </div>
  )
}
