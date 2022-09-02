import React from "react";
import { useNavigate } from "react-router-dom";

export const Thankyou = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: "true" });
      let token=JSON.parse(localStorage.getItem('token'));
      localStorage.clear();
      // set token
      localStorage.setItem('token',JSON.stringify(token));
      window.location.reload(false);
    }, 3000);
  }, []);
  return ( 
      <img
        src="https://raw.githubusercontent.com/darkwingpatil/Task-manag/main/rhodes.png"
         style={{width:'90%',height:'700px'}}
      />
  );
};
