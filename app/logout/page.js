"use client"
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // This function will run when the component mounts
    // It removes three items from the localStorage: JWT_TOKEN, User_Email, and User_Name
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("User_Email");
    localStorage.removeItem("User_Name");

    // After removing the items, it sets a timeout function to redirect the user to the login page
    // Redirect after 2000 milliseconds (2 seconds)
    setTimeout(() => {
      window.location.href = '/login'; // Redirecting to the login page
    }, 2000);

  }, []); // The empty dependency array [] means this effect will only run once after the component mounts

  return (
    <><h1 className='loggout'>Logged Out <br /> Redirecting to Login Page</h1></>
  );
}
