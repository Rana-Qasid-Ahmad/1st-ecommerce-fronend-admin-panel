"use client";
import styles from './createForm.module.css'
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";

function CreateForm({ API_URL }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    image_url: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    // Define headers object with authorization
    const headers = {
      'Authorization': localStorage.getItem('JWT_TOKEN'), // Add your authorization token here
      'Content-Type': 'application/json', // Set Content-Type according to your data format
    };

    try {
      const response = await axios.post(
        `${API_URL}/add-product`,
        {
          name: formData.name,
          price: formData.price,
          stock: formData.stock,
          image_url: formData.image_url,
          description: formData.description
        },
        { headers }
      );
      console.log("Form submitted successfully:", response.data);
      // Optionally, you can reset the form data state after submission
      setFormData({
        name: "",
        price: "",
        stock: "",
        image_url: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error.response.data);
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div className={`${styles.innerDiv}`}>
        <form onSubmit={handleSubmit}>
          <div className={`${styles.formCol1}`}>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            /> <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            /> <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={`${styles.formCol2}`}> <button type="submit">Submit</button><label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
            /> <label htmlFor="stock">Stock</label>
            <input
              type="text"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            /></div>
        </form>
      </div>
    </div>
  );
}

CreateForm.propTypes = {};

export default CreateForm;
