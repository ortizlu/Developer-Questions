import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div>
                <div className="loginBox">
                    <div>
                        <label>Username:</label><input type="text" name="username"></input>
                    </div>
                    <br />
                    <div>
                        <label>Password:</label><input type="password" name="password"></input> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;