import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const Navbar = () => {
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};
