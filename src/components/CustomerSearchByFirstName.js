import React, {useState, useEffect} from "react";


function CustomerSearchByFirstName(props){
    const customer = props;
 
   return (
            <p>{customer.firstName}</p>
   )
}

export default CustomerSearchByFirstName;