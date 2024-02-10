"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./UpdateForm.module.css";

function UpdateForm({ API_URL, id }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    image_url: "",
    description: "",
  });
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/id/${id}/`);
        const data = response.data.product;
        setFormData({
          name: data.name,
          price: data.price,
          stock: data.stock,
          image_url: data.image_url,
          description: data.description,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API_URL, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      Authorization: localStorage.getItem("JWT_TOKEN"),
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.put(
        `${API_URL}/id/${id}/`,
        {
          name: formData.name,
          price: formData.price,
          stock: formData.stock,
          image_url: formData.image_url,
          description: formData.description,
        },
        { headers }
      );
      console.log("Form submitted successfully:", response.data);
      setUpdated(true);
      setFormData({
        name: "",
        price: "",
        stock: "",
        image_url: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div className={`${styles.innerDiv}`}>
        <div className={updated ? styles.updated : styles.hidden}>updated</div>
        <form onSubmit={handleSubmit}>
          <div className={`${styles.formCol1}`}>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={`${styles.formCol2}`}>
            <button type="submit">Update</button>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            <label htmlFor="stock">Stock</label>
            <input
              type="text"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

UpdateForm.propTypes = {
  API_URL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default UpdateForm;
