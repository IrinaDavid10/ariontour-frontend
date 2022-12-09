import UserAPI from "../APIs/UserAPI.js"
import React, { useState, useEffect } from "react";
import CountryAPI from "../APIs/CountryAPI.js";
import CountryPicker from "./CountryPicker";

function RegistrationForm() {

  const [countriesList, setCountriesList] = useState([]);
  const [matchPasswordCheck, setMatchPasswordCheck] = useState("");
  const [registrationData, setregistrationData] = useState();


  const fetchCountries = async () => {
    CountryAPI.getCountries()
      .then(response => {
        setCountriesList(response.data.countries);
      })
      .catch((error) => {
        console.log(error)
      });


  }
  useEffect(() => {
    fetchCountries();
  }, []);

  const handleCountryChange = event => {
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


    if (event.target.value !== registrationData.password) {
      setMatchPasswordCheck("Passwords do not match.");
    } else {
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
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }
  return (

    <form className="bg-black text-light p-2 bg-opacity-100 mb-5 " style={{ borderRadius: 20 }} onSubmit={handleSubmit}>

      <label className="form-label mb-3" >
        <div style={{ fontWeight: "bold", fontSize: 30 }}>Register
        </div>
      </label>

      <div className="form-outline mb-3 mt-4">
        <label className="form-label" style={{ marginLeft: "-27rem" }} >Username</label>
        <input type="text" className="form-control" onChange={handleUsernameChange} />
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" style={{ marginLeft: "-27rem" }}>First name</label>
        <input type="text" className="form-control" onChange={handleFirstNameChange} />
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" style={{ marginLeft: "-27rem" }} >Last name</label>
        <input type="text" className="form-control" onChange={handleLastNameChange} />
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" style={{ marginLeft: "-27rem" }} >Password</label>
        <input type="password" className="form-control" onChange={handlePasswordChange} />
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" style={{ marginLeft: "-23rem" }} >Re-type password</label>
        <input type="password" className="form-control" onChange={handleReTypeChange} />
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" style={{ marginLeft: "-28rem" }} >Country</label>
        <br></br>
        <select style={{ marginRight: "14.5rem" }} id="country" name="country" onChange={handleCountryChange}>
          <option>Choose country</option>
          {countriesList.map(country => (
            <CountryPicker key={country.id} country={country} />
          ))}

        </select>
      </div>

      <button className="btn bg-dark border border-white text-light input-submit btn-block mb-4" style={{ marginLeft: '15rem', marginTop: "1rem" }}>Submit</button>

    </form>

  )
}

export default RegistrationForm;