import React from "react";

function CountryPicker(props) {
    return (
        
       
        <option value={props.country.country_code}>{props.country.country_name}</option>
  
    )
}
export default CountryPicker;