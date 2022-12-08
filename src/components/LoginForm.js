import React from "react";
import UserAPI from "../APIs/UserAPI.js"
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function LoginForm(props) {

    const [loginData, setLoginData] = useState();
    const navigate = useNavigate();
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
          //SCHIMBA
            if(response?.status===200)   
            {
            navigate('/', {replace: true});
            window.location.reload(true);
            }else
            {
             
              navigate('/about', {replace:true})
            }
        })
    }
    return (
      <div>
        <h1>Log in</h1>
        <form className="bg-secondary p-2 bg-opacity-10 mt-5" onSubmit={handleSubmit}>
       
          <div className="form-outline mb-5 mt-5">
            <label className="form-label" >Username</label>
            <input type="text" id="form2Example1" className="form-control" onChange={ handleUsernameChange} />
          </div>

          <div className="form-outline mb-5">
            <label className="form-label" >Password</label>
            <input type="password" id="form2Example2" className="form-control" onChange={handlePasswordChange} />
          </div>

          <div className="row mb-5">
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

      </div>
    )
}
export default LoginForm;