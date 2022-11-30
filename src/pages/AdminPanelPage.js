import React, {useState, useRef, useEffect} from "react";
import AdminPanelMenu from "../components/AdminPanelComponents/AdminPanelMenu";
import AdminPanelContent from "../components/AdminPanelComponents/AdminPanelContent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProSidebarProvider } from 'react-pro-sidebar';


function AdminPanelPage(){
    const [content, setContent] = useState(<AdminPanelContent/>);

    return(
        <div className='mt-5'> 
        <Container>
            <Row className="justify-content-md-center">
                <ProSidebarProvider>
                    <Col xs={3} sm={3} md={5} lg={4} xl={2} xxl={2}><AdminPanelMenu setContent={setContent}/></Col>
                </ProSidebarProvider>    
                <Col xs={9} sm={9} md={7} lg={8} xl={10} xxl={10}><>{content}</></Col>
                </Row><Row>
                
            </Row>
        </Container>
        </div>

    )
}
export default AdminPanelPage;