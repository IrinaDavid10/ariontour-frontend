import React, {useState, useEffect} from "react";


function CustomerSearchByFirstName(props){
    const customer = props;
 
    return (
            <p className="text-light">{customer.firstName}</p>
   )
}
export default CustomerSearchByFirstName;