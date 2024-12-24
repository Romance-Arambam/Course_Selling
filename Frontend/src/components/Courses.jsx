import React, { useEffect, useState } from "react";
import API from "../api";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await API.get("/course/preview");
      setCourses(response.data.courses);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <div key={course._id} className="course-card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>Price: ${course.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
