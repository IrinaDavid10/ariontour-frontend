import React from "react";
import Customer from "./Customer";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";


function CustomerList(props) {
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        setFilteredCustomers(
            props.customersList.filter( customer => {
                return customer.firstName.toLowerCase().includes(search.toLowerCase())
            })
        )
        
      }, [search, props.customersList]);
    return (

        <div>
            <input className="mb-3" type="text" placeholder="Enter first name..." onChange={e => setSearch(e.target.value)} />
            <Table className="text-light" responsive="xxl" bordered  size="xxl">

                <thead >
                    <tr>
                        <th>Account No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Delete</th>
                       
                    </tr>
                </thead>


                <tbody className="text-light" >
                    {filteredCustomers.map(customer => (
                        <Customer key={customer.id} customer={customer} setRefresh={(answer) =>{props.setRefresh(answer)}} />
                    ))}
                </tbody>

            </Table>
        </div>
    )
}

export default CustomerList;