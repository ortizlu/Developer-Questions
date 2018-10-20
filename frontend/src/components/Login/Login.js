import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="loginContainer">
                <div className="loginBox">
                    <div>
                        <label>Username:</label><input type="text" name="username"></input> 
                        <Link className="signupbutton" to="/signup"> Sign-up</Link>
                    </div>
                    <br />
                    <div>
                        <label>Password:</label><input type="password" name="password"></input> 
                        <Link className="loginbutton" to="/questions">Log-In</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;