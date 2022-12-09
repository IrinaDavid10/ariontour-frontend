import React, {useState, useRef, useEffect} from "react";
import PanelMenu from "../components/AdminPanelComponents/PanelMenu";
import PanelContent from "../components/AdminPanelComponents/PanelContent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProSidebarProvider } from 'react-pro-sidebar';


function PanelPage(){
    const [content, setContent] = useState(<PanelContent/>);

    return(
        <div className='mt-5 mb-5'> 
        <Container>
            <Row className="justify-content-md-center">
                <ProSidebarProvider>
                    <Col xs={3} sm={3} md={5} lg={4} xl={2} xxl={2}><PanelMenu setContent={setContent}/></Col>
                </ProSidebarProvider>    
                <Col xs={9} sm={9} md={7} lg={8} xl={10} xxl={10}><>{content}</></Col>
                </Row><Row>
                
            </Row>
        </Container>
        </div>

    )
}
export default PanelPage;