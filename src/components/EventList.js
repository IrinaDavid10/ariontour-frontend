import React from "react";
import EventCard from "./EventCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EventList(props){
    
    return(
        <Container>
        <Row sm={1} xs={'auto'} md={'auto'} lg={'auto'}>
        {props.eventsList.map(event => (
            <Col className="pt-3">
            <EventCard key={ event.id } event={event}/>
            </Col>
            ))}
        </Row>
        </Container>
    )
}
export default EventList;