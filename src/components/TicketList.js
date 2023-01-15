import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import EventAPI from '../APIs/EventAPI';
import { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
import { Button } from 'react-bootstrap';
import BookingAPI from '../APIs/BookingAPI';
import jwtDecode from 'jwt-decode';
import TicketAPI from '../APIs/TicketAPI';
import EventCard from './EventCard';


function TicketList() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventId = urlParams.get('eventId');

    const[availableBronzeTickets, setAvailableBronzeTickets] = useState(0);
    const[availableSilverTickets, setAvailableSilverTickets] = useState(0);
    const[availableGoldTickets, setAvailableGoldTickets] = useState(0);

    const [bronzeTickets, setBronzeTickets] = useState(0);
    const [silverTickets, setSilverTickets] = useState(0);
    const [goldTickets, setGoldTickets] = useState(0);

    const fetchAvailableTickets = async () => {
        const bronzeData ={
            eventId: eventId,
            ticketType: 0
        }
        const responseBronze = await TicketAPI.getTickets(bronzeData);
        setAvailableBronzeTickets(responseBronze.data.numberOfAvailableTickets);
        const silverData ={
            eventId: eventId,
            ticketType: 1
        }
        const responseSilver = await TicketAPI.getTickets(silverData);
        setAvailableSilverTickets(responseSilver.data.numberOfAvailableTickets);
        const goldData ={
            eventId: eventId,
            ticketType: 2
        }
        const responseGold = await TicketAPI.getTickets(goldData);
        setAvailableGoldTickets(responseGold.data.numberOfAvailableTickets);
    }

    useEffect(()=>{
        fetchAvailableTickets();
    },[]);
    
    const handlePurchase =  () => {
        if (bronzeTickets > 0) {
           CreateBooking(bronzeTickets, 0);
        }
        if (silverTickets > 0) {
             CreateBooking(silverTickets, 1);
        }
        if (goldTickets > 0) {
             CreateBooking(goldTickets, 2);
        }
        alert("Bought " + bronzeTickets + " bronze tickets, " + silverTickets + " silver tickets and " + goldTickets + " gold tickets");
    }

    useEffect(()=>{
    },[handlePurchase]);
    const CreateBooking = (nrOfTickets, ticketType) => {

        if (localStorage.getItem("Token")) {
            var customerIds = jwtDecode(localStorage.getItem("Token")).customerId;
            const bookingData = {
                customerId: customerIds,
                eventId: eventId,
                ticketType: ticketType,
                numberOfBookings: nrOfTickets,
            };
            BookingAPI.createBooking(bookingData);
        }
    }
    //get event ar trebui ca sa vad despre el anume cate tickete 
    return (
        <>
        <h1 className='text-light'>Bronze {availableBronzeTickets}</h1>
        <h1 className='text-light'>Silver {availableSilverTickets}</h1>
        <h1 className='text-light'>Gold {availableGoldTickets}</h1>
            <CardGroup>

                <TicketCard eventId={eventId} available={availableBronzeTickets} ticket={{ name: "bronze" }} onChange={(e) => setBronzeTickets(e.target.value)} />
                <TicketCard eventId={eventId} available={availableSilverTickets} ticket={{ name: "silver" }} onChange={(e) => setSilverTickets(e.target.value)} />
                <TicketCard eventId={eventId} available={availableGoldTickets} ticket={{ name: "gold" }} onChange={(e) => setGoldTickets(e.target.value)} />

            </CardGroup>
            <Button onClick={() => handlePurchase()}>Purchase</Button>
        </>

    )
}

export default TicketList;