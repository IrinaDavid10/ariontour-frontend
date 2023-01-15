import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookingAPI from "../APIs/BookingAPI";
import BookedEvent from "./BookedEvent";

function Bookings() {
    const [events, setEvents] = useState([]);

    const fetchBookedEvents = async () => {
        if (localStorage.getItem("Token")) {
            console.log("AFAWGES");
            const bookedEvents = await BookingAPI.getBookedEvents(localStorage.getItem("Token"));
            setEvents(bookedEvents.data.events);
        }
    }

    useEffect(() => {
        fetchBookedEvents();
    }, [])
    useEffect(() => {
        console.log(JSON.stringify(events));
    }, [events])
    return (
        <div>
            <Container>
        <Row>
            {events && events.map((event) => (
                <Col className="pb-4" xxl={4} xl={4} lg={4} md={4} sm={4} xs={4} key={event.id}>
                    <BookedEvent event={event} />
                </Col>
            ))}
        </Row>
    </Container>
        </div>
    )
}
export default Bookings;