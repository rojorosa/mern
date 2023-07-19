import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">
                    Kurakani
                </span>
                <span className="title">
                    Login
                </span>
                <form>
                   

                    <input id="email" type="email" placeholder="Enter your email"/>
                   

                    <input id="password" type="password" placeholder="********" />
                   
        
                   
                    <button className="login_button">Sign in</button>
                </form>
                <p>You don't have an account?  <Link to='/register'>Register</Link> </p>
            </div>
        </div>
    );
}

export default Login;