import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EventAPI from "../../APIs/EventAPI";
import AdminPanelBoughtTicketsStatistic from "./AdminPanelBoughtTicketsStatistic";

function AdminPanelStatistics() {
    const [events, setEvents] = useState([]);
    const [totalTicketsBought, setTotalTicketsBought] = useState(0);
    const [isFetched, setIsFetched] = useState(false);

    const fetchAllEvents = async () => {
        if (!isFetched) {
            const response = await EventAPI.getEvents();
            if (response.status === 200) {
                setEvents(response.data.events);
                setIsFetched(true);
            }
        }
    }

    useEffect(() => {
        fetchAllEvents();
    }, [isFetched])

    return (
        <div>
        <h1 className="text-light">Total bought tickets: {totalTicketsBought / 2}</h1>
        <Container>
            <Row>
                {events.map((event) => {
                    return (
                        <Col xl={4} key={event.id}>
                            <AdminPanelBoughtTicketsStatistic event={event}
                                setTotalTicketsBought={(e) => setTotalTicketsBought(prevValue => prevValue + e)}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    </div>
    )
}


export default AdminPanelStatistics;