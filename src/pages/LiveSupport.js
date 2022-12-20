import React, { useState, useEffect } from "react";
import MessageHandler from "../components/MessageHandler";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateLiveSupport from "../components/CreateLiveSupport";
import DisplayLiveSupport from "../components/DisplayLiveSupport";
import jwtDecode from "jwt-decode";
function LiveSupport() {

    function DisplayAllLiveSupport() {
        if (localStorage.getItem("Token")) {
            if (jwtDecode(localStorage.getItem("Token")).roles.some(Role => Role === "ADMIN"))
            {
                return (<DisplayLiveSupport />)
            }
            if (jwtDecode(localStorage.getItem("Token")).roles.some(Role => Role === "CUSTOMER"))
            {
                return (<CreateLiveSupport />)
            }
        }
    }

    return (
        <div className='mt-5'>
            <Container>
                <Row><h1 className="text-light">Live Support</h1></Row>
                <Row>
                    <Col>{DisplayAllLiveSupport()}
                    </Col>
                </Row>
          
            </Container>
        </div>

    )

}
export default LiveSupport;