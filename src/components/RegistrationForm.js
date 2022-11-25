import UserAPI from "../APIs/UserAPI.js"
import React, { useState, useEffect } from "react";
import CountryAPI from "../APIs/CountryAPI.js";
import CountryPicker from "./CountryPicker";

function RegistrationForm() {

    const[countriesList, setCountriesList] = useState([]);
    const[matchPasswordCheck, setMatchPasswordCheck] = useState("");
    const [registrationData, setregistrationData] = useState();
   
    
    const fetchCountries = async () => {
        CountryAPI.getCountries()
        .then(response => {
            setCountriesList(response.data.countries);
            setregistrationData(registrationData => ({
                ...registrationData,
                country_code: response.data.countries[0].country_code
             }));
        })
        .catch((error) => {
            console.log(error)});
        
       
    }
    useEffect(() =>{
       fetchCountries();
    },[]);

    const handleCountryChange = event =>{
        console.log(event.target.value);
        setregistrationData(registrationData => ({
            ...registrationData,
            country_code: event.target.value
         }));
    }
    const handleUsernameChange = event => {
        setregistrationData(registrationData => ({
            ...registrationData,
            username: event.target.value
         }));
      }

      const handlePasswordChange = event => {
        setregistrationData(registrationData => ({
            ...registrationData,
            password: event.target.value
         }));
       
        }
        const handleReTypeChange = event => {
           
         
            if(event.target.value !== registrationData.password){
                setMatchPasswordCheck("Passwords do not match.");
            }else{
                setMatchPasswordCheck("");
            }
        }
        const handleFirstNameChange = event => {
            setregistrationData(registrationData => ({
                ...registrationData,
                firstName: event.target.value
             }));
      
        }
        const handleLastNameChange = event => {
            setregistrationData(registrationData => ({
                ...registrationData,
                lastName: event.target.value
             }));
           
        }
      
    const handleSubmit = e => {
        console.log(registrationData);
        e.preventDefault();
        UserAPI.registerUser(registrationData)
        .then(response =>{
            console.log(response);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)});
    }
    return (
      <form className="bg-secondary p-2 bg-opacity-10" onSubmit={handleSubmit}>
  
        <div className="form-outline mb-4">
          <label className="form-label" >Username</label>
          <input type="text" id="form2Example1" className="form-control" onChange={ handleUsernameChange} />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" >First name</label>
          <input type="text" id="form2Example1" className="form-control" onChange={ handleFirstNameChange} />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" >Last name</label>
          <input type="text" id="form2Example1" className="form-control" onChange={ handleLastNameChange} />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" >Country</label>
          <select id="country" name="country" onChange={handleCountryChange}>
                    {countriesList.map(country => (
                    <CountryPicker key={ country.id } country={country}/>        
                  ))}
            </select>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" >Password</label>
          <input type="password" id="form2Example2" className="form-control" onChange={handlePasswordChange} />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" >Re-type password</label>
          <input type="password" id="form2Example2" className="form-control" onChange={handleReTypeChange} />
        </div>

        <button className="btn btn-primary input-submit btn-block mb-4">Submit</button>
     </form>

    )
}

export default RegistrationForm;