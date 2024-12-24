import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </nav>
  );
};

export default Navbar;
