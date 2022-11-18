
import React from "react";
import styles from "./Customer.module.css"
import CountryAPI from "../APIs/CountryAPI";

function Country(props) {

    
    
    
    return (

    <option value={props.country.country_code}>{props.country.country_code}</option>
  

    )
}

export default Country;