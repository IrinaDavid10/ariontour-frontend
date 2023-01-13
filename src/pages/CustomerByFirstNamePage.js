import React, {useState, useEffect} from "react";
import CustomerSearchByFirstName from "../components/CustomerSearchByFirstName";
import CustomerAPI from "../APIs/CustomerAPI";


function CustomerByFirstNamePage(){
    const [customersList, setCustomersList] = useState([]);    
    const [search, setSearch] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    
    const fetchCustomers= async () => {  
        CustomerAPI.getCustomers()
                    .then(response =>{
                        setCustomersList(response.data.customers);
                    })
                    .catch(err => console.error(err))
        
    }
    
    useEffect(()  =>{
        fetchCustomers();
    },[]);


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
            <input  type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)} />
                {filteredCustomers.map((customer) => (
                    <CustomerSearchByFirstName key={customer.id} {...customer}/>
                ))}
        </div>
    )
    
    
}

export default CustomerByFirstNamePage;