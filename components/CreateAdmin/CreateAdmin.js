"use client";
import styles from './CreateAdmin.module.css'
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";

function CreateAdmin({ API_URL }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "admin"
  });
  const [added, setAdded] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

console.log(formData)

    // Define headers object with authorization
    // const headers = {
    //   'Authorization': localStorage.getItem('JWT_TOKEN'), // Add your authorization token here
    //   'Content-Type': 'application/json', // Set Content-Type according to your data format
    // };

    try {
      const response = await axios.post(
        `${API_URL}/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        },
      );
      console.log("Form submitted successfully:", response.data.message);
      setAdded(response.data.message)
      // Optionally, you can reset the form data state after submission
      setFormData({
        username: "",
        email: "",
        password: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error.response.data);
      setAdded(error.response.data.message)
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div className={`${styles.innerDiv}`}>
        {added}
        <form onSubmit={handleSubmit}>
          <div className={`${styles.formCol1}`}>
          
            <label htmlFor="title">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            /> <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            /> <label htmlFor="price">Password</label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.formCol2}`}> <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

CreateAdmin.propTypes = {};

export default CreateAdmin;
