import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import BookedTickets from "./BookedTickets";

function BookedEvent(props) {
const [showTickets,setShowTickets]=useState(false);

        return (
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
                    <Button variant="secondary" onClick={()=>setShowTickets(!showTickets)}>See booked tickets</Button>
                    
            {showTickets && <BookedTickets event={props.event}/>}
            </Card.Body>
        </Card>
        )
    
}
export default BookedEvent;