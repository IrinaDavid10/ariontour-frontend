import React from "react";
import Customer from "./Customer";
import Table from 'react-bootstrap/Table';


function CustomerList(props) {
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