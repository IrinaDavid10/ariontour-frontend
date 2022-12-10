import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import EventAPI from '../APIs/EventAPI';
import { useState, useEffect } from 'react';


function TicketType() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventId = urlParams.get('eventId');

    const[bronzeTickets, setBronzeTickets] = useState();

    const fetchTickets= async () => {  
        await EventAPI.getEventTicketsAmountByType(eventId, 1)
                    .then(response =>{
                        setBronzeTickets(response.data.numberOfTickets);
                    })
                    .catch(err => console.error(err))
        
    }
    useEffect(() =>{
        fetchTickets();
    },[bronzeTickets]);
   
    //get event ar trebui ca sa vad despre el anume cate tickete 
    return (
        
        <CardGroup>

            <Card>
                <Card.Img variant="top" src="/images/bronze.png" />
                <Card.Body>
                    <Card.Title>Bronze ticket{bronzeTickets}</Card.Title>
                    <Card.Text>
                        Nice ticket.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="/images/silver.png" />
                <Card.Body>
                    <Card.Title>Silver ticket</Card.Title>
                    <Card.Text>
                       Nice ticket.{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="/images/g.png" />
                <Card.Body>
                    <Card.Title>Gold ticket</Card.Title>
                    <Card.Text>
                        Nice ticket.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}
export default TicketType;