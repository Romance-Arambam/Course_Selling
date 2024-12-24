export function Signup (){
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/user/signup", formData);
            alert("Signup successful!");
        } catch (error) {
            alert("Error during signup!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                }
            />
            <button type="submit">Sign Up</button>
        </form>
    )
}
import React, { useState } from "react";
import API from "../api";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/user/signup", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Signup failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
