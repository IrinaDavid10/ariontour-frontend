import React, {useState, useEffect, useRef} from "react";
import axios from 'axios'
import CustomerList from "../components/CustomerList";
import CustomerAPI from "../APIs/CustomerAPI";

function CustomerShowAllPage(){
    
    const[customersList, setCustomersList] = useState([]);

    useEffect(() =>{
        CustomerAPI.getCustomers()
        .then(response => {
            setCustomersList(response.data.customers);
        })
        .catch(err => console.error(err));
    });
    
    return (
        <CustomerList customersList={customersList}/>
    )
}

export default CustomerShowAllPage;





