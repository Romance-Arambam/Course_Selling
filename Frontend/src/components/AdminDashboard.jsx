import React, { useState } from "react";
import API from "../api";

const AdminDashboard = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      await API.post("/admin/course", courseData);
      alert("Course created successfully");
    } catch (error) {
      alert("Failed to create course.");
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleCreateCourse}>
        <input
          type="text"
          placeholder="Title"
          value={courseData.title}
          onChange={(e) =>
            setCourseData({ ...courseData, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={courseData.description}
          onChange={(e) =>
            setCourseData({ ...courseData, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={courseData.price}
          onChange={(e) =>
            setCourseData({ ...courseData, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={courseData.imageUrl}
          onChange={(e) =>
            setCourseData({ ...courseData, imageUrl: e.target.value })
          }
        />
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
