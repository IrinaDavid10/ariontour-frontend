import React, {useState, useEffect} from "react";
import axios from "axios"
import CustomerSearchByFirstName from "../components/CustomerSearchByFirstName";
import CustomerList from "../components/CustomerList";


function CustomerByFirstNamePage(){
    const [customersList, setCustomersList] = useState([]);    
    const [search, setSearch] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    
    useEffect(() =>{
        axios.get("http://localhost:8080/customers")
        .then(response => {
            setCustomersList(response.data.customers);
        })
        .catch(err => console.error(err));
    }, []);
    
    useEffect(() => {
        setFilteredCustomers(
            customersList.filter( customer => {
                return customer.firstName.toLowerCase().includes(search.toLowerCase())
            })
        )
        
      }, [search, customersList]);
    
    
    return (
        <div>
        <h1>Filtering by name</h1>
            <input type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)} />
                {filteredCustomers.map((customer) => (
                    <CustomerSearchByFirstName key={customer.id} {...customer}/>
                ))}
        </div>
    )
    
    
}

export default CustomerByFirstNamePage;