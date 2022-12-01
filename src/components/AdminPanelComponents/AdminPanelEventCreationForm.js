
import React, { useState, useEffect } from "react";
import LocationAPI from "../../APIs/LocationAPI.js";
import CountryAPI from "../../APIs/CountryAPI.js";
import EventAPI from "../../APIs/EventAPI.js";
import CountryPicker from "../CountryPicker";
import DatePicker from "../DatePicker.js";
import DateTimePicker from 'react-datetime-picker';
import CityAPI from "../../APIs/CityAPI.js";
import CityPicker from "../CityPicker.js";


function AdminPanelEventCreationForm(props){

    const [registrationData, setregistrationData] = useState();
    const[cityList, setcityList] = useState([]);
    const[countriesList, setCountriesList] = useState([]);
    const[locationsList, setLocationsList] = useState([]);
    const [dateTimeValue, setDateTimeValue] = useState(new Date());
    const[pickedCountry, setCountry] = useState();
    const[pickedCity, setCity] = useState();
    const fetchCities = async () => {
        CityAPI.getCities()
        .then(response => {
            setcityList(response.data.cities);
        })
        .catch((error) => {
            console.log(error)});
        
       
    }
    useEffect(() =>{
        fetchCities();
    },[]);

    const fetchCountries = async () => {
        CountryAPI.getCountries()
        .then(response => {
            setCountriesList(response.data.countries);
        })
        .catch((error) => {
            console.log(error)});
        
       
    }
    useEffect(() =>{
       fetchCountries();
    },[]);

    const handleCountryChange = event =>{
        setregistrationData(registrationData => ({
            ...registrationData,
            country_code: event.target.value
        }));
    }


        const handleTitleChange = event => {
            setregistrationData(registrationData => ({
                ...registrationData,
                title: event.target.value
            }));
    
        }
        const handleCityChange = event => {
            setregistrationData(registrationData => ({
                ...registrationData,
                city_name: event.target.value
            }));
        }

   
        
        const handleDescriptionChange = event => {
            setregistrationData(registrationData => ({
                ...registrationData,
                description: event.target.value
            }));
        
        }
       
        const handleSubmit = e => {
            console.log(registrationData);
            e.preventDefault();

            EventAPI.createEvent(registrationData,formatDate(dateTimeValue))
            .then(response =>{
                console.log(response);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)});
            
        }    
        function formatDate(dateTime)
        {
            //formats date from DateTimePicker to required format for backend "2023-03-03T03:03:03"
            return(dateTime.getFullYear() + "-" + ('0' + (dateTime.getMonth()+1)).slice(-2) + "-" + ('0' + dateTime.getDate()).slice(-2) + "T" + ('0' + dateTime.getHours()).slice(-2) + ":" + ('0' + dateTime.getMinutes()).slice(-2) + ":" + ('0' + dateTime.getSeconds()).slice(-2));
    
        }
        return (
     
        <form className="bg-secondary p-2 bg-opacity-10 mt-3 " style={{borderRadius:20}}  onSubmit={handleSubmit}>
          
          <label className="form-label mb-3" ><div style={{fontWeight: "bold", fontSize:30}}>Create event</div></label>
          
          <div className="form-outline mb-3 mt-4">
            <label className="form-label"  style={{marginLeft: "-18rem"}} >Title</label>
            <input type="text" required className="form-control" onChange={ handleTitleChange} />
          </div>
  
          <div className="form-outline mb-3">
            <label className="form-label" style={{marginLeft: "-15rem"}}>Description</label>
            <input type="text" required className="form-control" onChange={ handleDescriptionChange} />
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" style={{marginLeft: "-15rem"}}>Date & Time</label><br></br>
            <div style={{marginLeft: "-3rem"}}><DateTimePicker  required={true} disableClock={true} format="y/MM/dd h:mm a" onChange={setDateTimeValue} value={dateTimeValue} /></div>
            
          </div>
  
          <div className="form-outline mb-3">
            <label className="form-label"  style={{marginLeft: "-17rem"}} >Country</label>
            <br></br>
            <select style={{marginRight: "14.5rem"}} id="country" name="country" onChange={handleCountryChange} required>
            <option value="">Choose country</option>
                      {countriesList.map(country => (
                      <CountryPicker key={ country.id } country={country}/>        
                    ))}
          
              </select>
          </div>
            
          <div className="form-outline mb-3">
            <label className="form-label"  style={{marginLeft: "-18.5rem"}} >City</label>
            <br></br>
            <select style={{marginRight: "14.5rem"}} id="city" name="city" onChange={handleCityChange}>
            <option>Choose city</option>
                      {cityList.map(city => (
                      <CityPicker key={ city.id } city={city}/>        
                    ))}
          
              </select>
          </div>

                      
          <button className="btn btn-secondary input-submit btn-block mb-4" style={{ marginLeft: '15rem', marginTop:"1rem" }}>Submit</button>
         
       </form>
     
    )
}
export default AdminPanelEventCreationForm;