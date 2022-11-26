import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function EventCard(props){
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
                    <Button variant="secondary">Check out now</Button>
            </Card.Body>
        </Card>
    )
}
export default EventCard;