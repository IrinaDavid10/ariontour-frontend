import React from "react";

function Country(props) {
    return (
    <option value={props.country.country_code}>{props.country.country_code}</option>
    )
}
export default Country;