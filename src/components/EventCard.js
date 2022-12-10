import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import CheckExpiry from "./CheckExpiry";
import TicketType from "./TicketType";
import TicketPage from "../pages/TicketPage";

function EventCard(props){

    const navigate = useNavigate();
    
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
                    <Button variant="secondary" href={"/tickets?eventId="+props.event.id}>See more</Button>
            </Card.Body>
        </Card>
    )
}
export default EventCard;