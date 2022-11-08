import React from "react";
import Customer from "./Customer";
import styles from "./CustomerList.module.css"

function CustomerList(props) {

    return (
        <div className={styles.customerList}>
        <table className={styles.customers}>
            <thead>
                <tr>
                    <th className={styles.customersth}>Account No.</th>
                    <th className={styles.customersth}>First Name</th>
                    <th className={styles.customersth}>Last Name</th>
        
                    <th className={styles.customersth}>Delete</th>
                </tr>
            </thead>


            <tbody>
                {props.customersList.map(customer => (
                <Customer key={ customer.id } customer={customer}/>        
                ))}
            </tbody>
        </table>
        </div>
    )
    
}

export default CustomerList;