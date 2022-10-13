import React, {useState, useEffect} from "react";
import axios from "axios"

function CustomerSearchByFirstName(props){
    const customer = props;
 
   return (
            <p>{customer.firstName}</p>
   )
}

export default CustomerSearchByFirstName;