import React from "react";
import Customer from "./Customer";
import Table from 'react-bootstrap/Table';
import styles from "./CustomerList.module.css"
import CustomerAPI from "../APIs/CustomerAPI";



function CustomerList(props) {

    function deleteUser(customer){
        CustomerAPI.removeCustomer(customer)
        .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(customer.id);
  });
}
    return (
    
      <Table responsive="xxl" striped bordered hover size="xxl">
      <thead>
          <tr>
              <th>Account No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Delete</th>
          </tr>
      </thead>


      <tbody>
          {props.customersList.map(customer => (
          <Customer key={ customer.id } customer={customer}/> 
          ))}
      </tbody>
  </Table>
       
        
        
       
    )
    
}

export default CustomerList;