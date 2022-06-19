import React from 'react'
import{useNavigate} from "react-router-dom"

export const Thankyou = () => {

    const navigate=useNavigate()
    React.useEffect(()=>{
        setTimeout(()=>{
            navigate("/",{replace:"true"})
            localStorage.clear();
            window.location.reload(false);
        },6000)
    },[])
  return (
    <div>
        <img src='https://raw.githubusercontent.com/darkwingpatil/Task-manag/main/rhodes.png' height="100%" width="100%"/>
    </div>
  )
}
