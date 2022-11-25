import React from "react";
import UserAPI from "../APIs/UserAPI.js"
import { useState } from "react";
import Form from 'react-bootstrap/Form';

function LoginForm2(props) {

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
        <form className="bg-secondary p-2 bg-opacity-10" onSubmit={handleSubmit}>
  
  <div className="form-outline mb-4">
    <input type="text" id="form2Example1" className="form-control" onChange={ handleUsernameChange} />
    <label className="form-label" >Email address</label>
  </div>


  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" onChange={handlePasswordChange} />
    <label className="form-label" >Password</label>
  </div>


  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
        <label className="form-check-label"> Remember me </label>
      </div>
    </div>

    <div className="col">
   
      <a href="/forgotpassword">Forgot password?</a>
    </div>
  </div>
  <button className="btn btn-primary input-submit btn-block mb-4">Sign in</button>
  <div className="text-center">
    <p>Not a member? <a href="/register">Register now</a></p>
  </div>
  </form>

     
    )
}

export default LoginForm2;