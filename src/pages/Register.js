import React from "react";
import { Link } from "react-router-dom";
import kIcon from "../images/k_icon.png";
const Register = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">
                    Kurakani
                </span>
                <span className="title">
                    Register
                </span>
                <form action="">
                    <input id="name" type="text" placeholder="Enter your name"/>
                   

                    <input id="email" type="email" placeholder="Enter your email"/>
                   

                    <input id="password" type="password" placeholder="********" />
                   
                    <input style={{display:"none"}} id="file" type="file" />
                    <label className="profile" htmlFor="file"> <img src={kIcon} alt=""/>
                    <span>Add an Avatar</span>
                    </label>
                   
                    <button className="login_button">Sign Up</button>
                </form>
                <p>Already have an account?<Link to='/'>Log in</Link></p>
            </div>
        </div>
    );
}

export default Register;