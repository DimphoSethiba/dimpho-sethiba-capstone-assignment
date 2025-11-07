import React  from 'react';
import '../../Styles/Form.css';
import { Link } from "react-router-dom";

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
    return (
      
        <div className="container">
         <div className="header">
           <div className="text">Login</div>
           <div className="underline"></div> 
         </div>
         <div className="inputs">
           <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
           </div>
           <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
           </div> 
         </div>
         <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
         <div className="submit-container">
          <div className="submit"><Link to="/SignUp">Sign Up</Link></div>
          <div className="submit">Login</div>
         </div>
        </div>
      
    )
}

export default Login