import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import ResetPassword from "./ResetPassword";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [resetStaus, setResetStaus] = useState(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <button> Create Account</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
