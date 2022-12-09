import React from "react";
import EventCard from "./EventCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EventList(props){
    
    return(
        <Container className="mt-4 mb-5">
        <Row sm={1} xs={'auto'} md={'auto'} lg={'auto'}>
        {props.eventsList.map(event => (
            <Col key={ event.id } className="pt-3">
            <EventCard event={event}/>
            </Col>
            ))}
        </Row>
        </Container>
    )
}
export default EventList;