import React, { useState } from "react";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };
  const handleSubmit = () => {};
  return (
    <div className={styles.singnup_wrapper}>
      <div className={styles.heading}>
        <h3>Create Account</h3>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.item}>
            <label> First Name</label>
            <input
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className={styles.item}>
            <label> Last Name</label>
            <input
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              type="text"
            />
          </div>
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
            <label>Password</label>
            <input
              name="password"
              placeholder="Password"
              onChange={handleChange}
              type="password"
            />
          </div>
          <div className={`${styles.item} ${styles.submit}`}>
            <input type="submit" value="CREATE" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
