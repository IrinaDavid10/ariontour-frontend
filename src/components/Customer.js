import React from "react";
import CustomerAPI from "../APIs/CustomerAPI";

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
        <tr >
            <td>{ props.customer.id }</td>
            <td>{ props.customer.firstName }</td>
            <td>{ props.customer.lastName }</td>
            <td><button onClick={ () => deleteUser(props.customer) }>X</button></td>
        </tr>
      
    )
}

export default Customer;