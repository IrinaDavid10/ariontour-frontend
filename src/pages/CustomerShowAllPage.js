import React, {useState, useEffect} from "react";
import CustomerList from "../components/CustomerList";
import CustomerAPI from "../APIs/CustomerAPI";

function CustomerShowAllPage(){
    
    const[customersList, setCustomersList] = useState([]);

    useEffect(() =>{
        CustomerAPI.getCustomers()
        .then(response => {
            setCustomersList(response.data.customers);
        })
        .catch(err => console.error(err))
    },[customersList]);
    
    return (
        <CustomerList customersList={customersList}/>
    )
}

export default CustomerShowAllPage;





