import React, {useState, useEffect} from "react";
import AdminPanelMenu from "../components/AdminPanelMenu";
import AdminPanelContent from "../components/AdminPanelContent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProSidebarProvider } from 'react-pro-sidebar';

function AdminPanelPage(){
    return(
        <div className='mt-5'> 
        <Container>
            <Row className="justify-content-md-center">
                <ProSidebarProvider>
                    <Col xs={3} sm={3} md={2} lg={2} xl={2} xxl={2}><AdminPanelMenu/></Col>
                </ProSidebarProvider>

            </Row>
        </Container>
        </div>

    )
}
export default AdminPanelPage;