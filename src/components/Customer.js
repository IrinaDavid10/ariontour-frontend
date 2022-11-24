import React from "react";
import styles from "./Customer.module.css"
import CustomerAPI from "../APIs/CustomerAPI";
import Table from 'react-bootstrap/Table';

function Customer(props) {

    function deleteUser(customer){
        CustomerAPI.removeCustomer(customer)
        .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(customer.id);
  });
    }
    return (
        <tr>
            <td >{ props.customer.id }</td>
            <td >{ props.customer.firstName }</td>
            <td >{ props.customer.lastName }</td>
            <td ><button onClick={ () => deleteUser(props.customer) }>X</button></td>
        </tr>
      
    )
}

export default Customer;