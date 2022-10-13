import React, {useState, useEffect, useRef} from "react";
import axios from 'axios'
import CustomerList from "../components/CustomerList";


function CustomerShowAllPage(){
    
    const[customersList, setCustomersList] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8080/customers")
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





