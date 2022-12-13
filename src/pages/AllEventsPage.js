import React, { useState, useEffect } from "react";
import EventList from "../components/EventList";
import EventAPI from "../APIs/EventAPI";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Dropdown } from "react-bootstrap";

function AllEventsPage() {

    const [eventsList, setEventsList] = useState([]);


    const fetchEvents = async () => {
        EventAPI.getEvents()
            .then(response => {
                setEventsList(response.data.events);
            })
            .catch(err => console.error(err))

    }
    useEffect(() => {
        fetchEvents();
    }, []);



    function handleAZSort() {
        const sortedData = [...eventsList.sort((a, b) => {

            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        })]
        setEventsList(sortedData);
    }

    function handleCountrySort() {

        const sortedData = [...eventsList.sort((a, b) => {

            if (a.location.country.country_name < b.location.country.country_name) return -1;
            if (a.location.country.country_name > b.location.country.country_name) return 1;
            return 0;
        })]
        setEventsList(sortedData);
    }

    function handleDateSort() {
        console.log(eventsList[0].dateTime);

        const sortedData = [...eventsList.sort((a, b) => {
            var firstDate = new Date(a.dateTime);
            var secondDate = new Date(b.dateTime);
            console.log(firstDate + " " + a.dateTime);
            if (firstDate.getTime() < secondDate.getTime()) return -1;
            if (firstDate.getTime() > secondDate.getTime()) return 1;
            return 0;
        })]
        setEventsList(sortedData);
    }

    return (


        <Container>
            <Row >
                <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                    <Dropdown >
                        <Dropdown.Toggle className="mt-5" variant="secondary" id="dropdown-basic">
                            Filter by
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleAZSort}>Title</Dropdown.Item>
                            <Dropdown.Item onClick={handleCountrySort}>Country</Dropdown.Item>
                            <Dropdown.Item onClick={handleDateSort}>Date</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EventList eventsList={eventsList} />
                </Col>
            </Row>

        </Container>


    )
}
export default AllEventsPage;