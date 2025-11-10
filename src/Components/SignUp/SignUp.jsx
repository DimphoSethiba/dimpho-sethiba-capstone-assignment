import React, {useState}  from 'react';
import '../../Styles/Form.css';
import { Link } from "react-router-dom";

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';


const SignUp = () => {
    return (
      
 const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setSuccess("");
      return;
    }

    
    console.log("User registered:", formData);
    setError("");
    setSuccess("Account created successfully!");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });

    setTimeout(() => {
      navigate("/Login");
    }, 2000);
  };

        <div className="container">
         <div className="header">
           <div className="text">Sign Up</div>
           <div className="underline"></div> 
         </div>
         <div className="inputs">
           <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
           </div>
           <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
           </div>
           <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
           </div> 
           <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Confirm Password" />
           </div>
         </div>
         <div className="forgot-password">Already have an account? <span><Link to="/Login">Login</Link></span></div>
         <div className="submit-container">
          <div className="submit"><Link to="/SignUp">Sign Up</Link></div>
          
        </div>
      </div>
      
    )
}

export default SignUp