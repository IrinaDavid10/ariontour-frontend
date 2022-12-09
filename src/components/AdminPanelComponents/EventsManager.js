import { Button } from "react-bootstrap";
import React, {useState, useEffect} from "react";
import EventAPI from "../../APIs/EventAPI";
import AdminPanelEventList from "./AdminPanelEventList";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import AdminPanelEventCreationForm from "./AdminPanelEventCreationForm";
import AdminPanelCreateEvent from "./AdminPanelCreateEvent";

function EventsManager(){
    const[eventsList, setEventsList] = useState([]);
    const[createEventPanel, setcreateEventPanel] = useState("");
    const [buttonText,SetButtonText] = useState("ADD EVENT");
    const fetchEvents = async () => {  
        EventAPI.getEvents()
                    .then(response =>{
                        setEventsList(response.data.events);
                    })
                    .catch(err => console.error(err))
        
    }
    useEffect(()  =>{
        fetchEvents();
    },[]);
    function CreatePanel()
    {
        if(createEventPanel === ""){
        setcreateEventPanel(<AdminPanelCreateEvent/>);
        SetButtonText("CLOSE MENU");
    }
    else
    {
        setcreateEventPanel("");
        SetButtonText("ADD EVENT");
    }
    }

    
    return(
        <Container>
            <Row>
                <Col xs ={5} sm={5} md={5} lg={3} xl= {2} xxl={2} style={{ marginRight: '16rem' }}><Button onClick={() =>CreatePanel()} className=" bg-black border border-white">{buttonText}</Button></Col>
                <Col xs={9} sm={9} md={7} lg={8} xl={10} xxl={10}><>{createEventPanel}</></Col>
            </Row>

                <AdminPanelEventList  eventsList={eventsList}/>
        </Container>
    )
}
export default EventsManager;