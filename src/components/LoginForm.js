import React from "react";
import styles from "./InputForm.module.css"
import UserAPI from "../APIs/UserAPI.js"
import { useState } from "react";

function LoginForm(props) {

    const [loginData, setLoginData] = useState();

    const handleUsernameChange = event => {
        setLoginData(loginData => ({
            ...loginData,
            username: event.target.value
         }));
      }

      const handlePasswordChange = event => {
        setLoginData(loginData => ({
            ...loginData,
            password: event.target.value
         }));
        }

      
    const handleSubmit = e => {

        e.preventDefault();
        UserAPI.loginUsers(loginData)
        .then(response =>{
            console.log(response);
            console.log(response.data);
        })
    }
    return (
        <form className="form-container"
            onSubmit={handleSubmit}>
            <input
                type="text"
                className="input-text"
                placeholder="Username"
                onChange={handleUsernameChange}
                required
                minLength="2"
                maxLength="20"
            />
                        <input
                type="password"
                className="input-text"
                placeholder="Password"
                onChange={handlePasswordChange}
                required
                minLength="2"
            />
            <button className="input-submit">Submit</button>
        </form>
    )
}

export default LoginForm;