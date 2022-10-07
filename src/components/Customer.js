import React from "react";
import styles from "./Customer.module.css"
import axios from "axios";

function Customer(props) {

    function deleteUser(customer){
        axios.delete('http://localhost:8080/customers/deletecustomer/'+ customer.id)
        .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(customer.id);
  });
    }
    return (
        <tr>
            <td className={styles.customerstd}>{ props.customer.id }</td>
            <td className={styles.customerstd}>{ props.customer.firstName }</td>
            <td className={styles.customerstd}>{ props.customer.lastName }</td>
            <td className={styles.customerstd}>{ props.customer.country }</td>
            <td className={styles.customerstd}>{ props.customer.username }</td>
            <td className={styles.customerstd} ><button onClick={ () => deleteUser(props.customer) }>X</button></td>
        </tr>
      
    )
}

export default Customer;