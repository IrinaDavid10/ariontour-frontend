
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CustomerShowAllPage from "../../pages/CustomerShowAllPage";
function AdminPanelCustomerOverview() {
    const [viewAllCustomers, setViewAllCustomers] = useState(false);
    const [filterCustomersByFirstName, setFilterCustomersByFirstName] = useState(false);

    function showAllCustomers() {
        if (viewAllCustomers === true) {
            setViewAllCustomers(false);
        } else
            setViewAllCustomers(true);
    }
/*
    function showCustomersFilteredByFirstName() {
        if (filterCustomersByFirstName === true) {
            setFilterCustomersByFirstName(false);
        } else
        setFilterCustomersByFirstName(true);
    }
*/
    return (
        <div>

            <h1 className="text-light">Customer overview</h1>
            <Container>
                <Row style={{ width: '20%' }}>
                    <button onClick={showAllCustomers} style={{ marginRight: 190 }} className="btn bg-black border border-white text-light mt-1 btn-block" >View all customers</button>
                </Row>
            </Container>
            {viewAllCustomers && <CustomerShowAllPage />}
            
        </div>
    )

}


export default AdminPanelCustomerOverview;