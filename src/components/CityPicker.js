import React from "react";

function CityPicker(props){
        return (
        
       
            <option value={props.city.city_name}>{props.city.city_name}</option>
      
        )
}
export default CityPicker;