"use client";
import styles from './LoginForm.module.css'
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

function LoginForm({ API_URL }) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const router = useRouter();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        // Define headers object with authorization
        const headers = {
            // Add your authorization token here
            'Content-Type': 'application/json', // Set Content-Type according to your data format
        };

        try {
            const response = await axios.post(
                `${API_URL}/login`,
                {
                    username: formData.username,
                    password: formData.password,

                },
                { headers }
            );
            console.log("Form submitted successfully");
            localStorage.setItem("JWT_TOKEN", response.data.token)
            localStorage.setItem("User_Name", response.data.username)
            localStorage.setItem("User_Email", response.data.email)


            // Optionally, you can reset the form data state after submission
            setFormData({
                username: "",
                password: "",

            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        router.push('/')
    };
    return (

        <div className={styles.mainDiv}>
            <div className={`${styles.innerDiv}`}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <label htmlFor="price">Password</label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />



                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
