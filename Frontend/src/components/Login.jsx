import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../Redux/addtocart/action";
import styles from "../styles/Login.module.css";
import ResetPassword from "./ResetPassword";
import Header from "./header/Header";
import { OfferSlider } from "../pages/Homepage/components/offerSlider";
import { LowerCont } from "../pages/Homepage/components/lowerCont";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [resetStaus, setResetStaus] = useState(false);
  const navigate = useNavigate();
  const state=useSelector((state)=>state);
  const dispatch = useDispatch();
  const toogleResetStatus = () => {
    setResetStaus(!resetStaus);
  };
  let cartRoute=JSON.parse(localStorage.getItem('cartroute'));
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://bluelybackend.herokuapp.com/Auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      let data = await res.json();
      console.log(data);
      if (data.status == 400) {
        alert(data.response);
        return;
      }
      localStorage.setItem("token", JSON.stringify(data.token));
      dispatch(setToken(data.token));
      alert(data.response);
    
      if(cartRoute){
        navigate(`/${cartRoute}`,{replace:true});
      }else{
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout=()=>{
    localStorage.setItem('token',null);
    dispatch({type:"SET TOKEN",payload:null});
  }
  return (
    <>
    <Header />
    <OfferSlider margintop={true} />
    {state.cart.token? (<div >
      <h1 style={{textAlign:"center",marginTop:'1%'}}>MY ACCOUNT</h1>
      <button onClick={handleLogout} 
      style={{width:'100px',
      padding:'3px' ,
      backgroundColor:'white',
      coloe:'black',
      border:'1px solid grey',
      cursor:'pointer',
      marginTop:'1%'
      }}
      >LOG OUT</button>
      </div>):(
      <div className={styles.login_wrapper}>
      {resetStaus ? (
        <ResetPassword toogleResetStatus={toogleResetStatus} />
      ) : (
        <>
          <div className={styles.heading}>
            <h3>LOG IN</h3>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.item}>
                <label> Email</label>
                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  type="email"
                />
              </div>
              <div className={styles.item}>
                <div className={styles.flex}>
                  <label>Password</label>
                  <p onClick={toogleResetStatus}>Forgot Password?</p>
                </div>
                <input
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <div className={`${styles.item} ${styles.submit}`}>
                <input type="submit" value="SIGN IN" />
              </div>
            </form>
            <div className={styles.item}>
              <button onClick={() => navigate("/signup")}>
                {" "}
                Create Account
              </button>
            </div>
          </div>
        </>
      )}
    </div>
    )}

    <LowerCont />
    </>
  );
};

export default Login;
