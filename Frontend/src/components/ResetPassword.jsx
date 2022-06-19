import React, { useState } from "react";
import styles from "../styles/Login.module.css";
const ResetPassword = ({ toogleResetStatus }) => {
  const [email, setEmail] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles.heading}>
        <h2>RESET YOUR PASSWORD</h2>
        <p>We will send you an email to reset your password.</p>
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
          <div className={`${styles.item} ${styles.submit}`}>
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
        <div className={styles.item}>
          <button onClick={toogleResetStatus}> Cancel</button>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
