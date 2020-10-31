import React, {Component, useState} from 'react';
import logo from "../../img/logo.png";
import "../../../src/styles/login.css";
import {navigate} from "@reach/router"

const url = 'http://localhost:3000/login'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const submitForm = event => {
      event.preventDefault()
  
      const options = {
        method: 'post',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: `email=${email}&password=${password}`
      }
  
      fetch(url, options)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            alert('Email not found, please retry')
          }
          if (response.status === 401) {
            alert('Email and password do not match, please retry')
          }
        }
        return response
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.cookie = 'token=' + data.token
          navigate('/dashboard')
        }
      })
    }
    
        return(
            <div className="login-page">
                <div className="login-main-style">
                    <div className="login-logo-div">
                        <img src={logo} alt="" className="login-logo"/>
                        <div className="vertical-line"></div>
                    </div>
                    
                    <div className="login-form" onSubmit={submitForm}>
                        <h1>Login</h1>
                        <div className="login-data-input">
                            <input type="text" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
                            <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Login;