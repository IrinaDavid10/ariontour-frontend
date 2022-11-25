import styles from "./InputForm.module.css"
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
        <div className={styles.inputForm}>
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
                type="text"
                className="input-text"
                placeholder="First name"
                onChange={handleFirstNameChange}
                required
                minLength="2"
                maxLength="50"
            />
              <input
                type="text"
                className="input-text"
                placeholder="Last name"
                onChange={handleLastNameChange} 
                required
                minLength="2"
                maxLength="50"
            />
                <label>Country:</label>
                    <select id="country" name="country" onChange={handleCountryChange}>
                    {countriesList.map(country => (
                    <CountryPicker key={ country.id } country={country}/>        
                ))}
                    </select>

                 
            
                <input
                type="password"
                className="input-text"
                placeholder="Password"
                onChange={handlePasswordChange}
                required
                minLength="2"
            />
            <input
                type="password"
                className="input-text"
                placeholder="Re-type Password"
                onChange={handleReTypeChange}
                required
                minLength="2"
            />
            <p>{matchPasswordCheck}</p>
            <button className="input-submit">Submit</button>
        </form>
        </div>
    )
}

export default RegistrationForm;