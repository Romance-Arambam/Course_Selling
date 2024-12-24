import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Courses from "./components/Courses";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          {/* Home Page: Displays available courses */}
          <Route path="/" element={<Courses />} />
          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />
          {/* Signin Page */}
          <Route path="/signin" element={<Signin />} />
          {/* Admin Dashboard for course creation */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

