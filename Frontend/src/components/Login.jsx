import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../Redux/addtocart/action";
import styles from "../styles/Login.module.css";
import ResetPassword from "./ResetPassword";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [resetStaus, setResetStaus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toogleResetStatus = () => {
    setResetStaus(!resetStaus);
  };
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
      let res = await fetch("https://blueflyapp.herokuapp.com/Auth/login", {
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
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
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
  );
};

export default Login;
