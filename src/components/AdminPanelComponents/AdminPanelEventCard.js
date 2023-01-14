import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import AdminPanelSetEventTickets from "./AdminPanelSetEventTickets";

function AdminPanelEventCard(props){
    const [showTickets, setShowTickets] = useState(false);
    const onHandleTickets = {

    }
return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/ar.jpg" />
        <Card.Body>
            <Card.Title>{props.event.title}</Card.Title>
                <Card.Text>
                    {props.event.description}<a> </a>
                    {props.event.location.city}<a> </a>
                    {props.event.location.country.country_name}<a> </a>
                    {props.event.dateTime.split('T')[0]}<a> </a>
                    {props.event.dateTime.split('T')[1]}
                   
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="dark" onClick={() =>setShowTickets(!showTickets)}>TICKETS</Button>
                    <Button variant="dark">EDIT</Button>
                    <Button variant="dark">DELETE</Button>
                </ButtonGroup>
                {showTickets && <AdminPanelSetEventTickets event = {props.event}/>}
        </Card.Body>
        
    </Card>
)
}
export default AdminPanelEventCard;