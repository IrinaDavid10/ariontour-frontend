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
        <Card style={{ width: '18rem' }}>
        <form className="form-container"
            onSubmit={handleSubmit}>
            <div class="form-outline mb-4">
            <input
                type="email"
                id="form2Example1"
                class="form-control" 
                onChange={handleUsernameChange}
                required
                minLength="2"
                maxLength="20"
            />
            <label class="form-label" for="form2Example1">Email address</label>
            </div>
            <div class="form-outline mb-4">
                        <input
                type="password"
                id="form2Example2"
                class="form-control"
                onChange={handlePasswordChange}
                required
                minLength="2"
            />
              <label class="form-label" for="form2Example2">Password</label>
            </div>
        </form>
        </Card>
    )
}

export default LoginForm;