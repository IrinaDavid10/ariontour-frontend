import React, {useState, useEffect} from "react";
import CustomerList from "../components/CustomerList";
import CustomerAPI from "../APIs/CustomerAPI";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CustomerShowAllPage(){
    
    const[customersList, setCustomersList] = useState([]);

    const fetchCustomers= async () => {  
        await CustomerAPI.getCustomers()
                    .then(response =>{
                        setCustomersList(response.data.customers);
                    })
                    .catch(err => console.error(err))
        
    }
    useEffect(() =>{
        fetchCustomers();
    },[customersList]);
    
    return (
      
        <div className='mt-5'> 
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">  <CustomerList customersList={customersList}/></Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default CustomerShowAllPage;





