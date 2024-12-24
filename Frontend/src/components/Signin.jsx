import React, { useState } from "react";
import API from "../api";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/user/signin", formData);
      localStorage.setItem("token", response.data.token);
      alert("Signin successful");
    } catch (error) {
      alert("Signin failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signin</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Signin;
