import { useEffect } from "react";
import { useState } from "react";
import BookingAPI from "../APIs/BookingAPI";
import QRCode from 'qrcode'

function BookedTickets(props) {
    const [tickets, setTickets] = useState([]);
    const [qrCodes, setQRCodes] = useState({});

    const fetchBookedTickets = async () => {
        if (localStorage.getItem("Token") && props.event) {
            const bookedTickets = await BookingAPI.getBookedTickets(props.event.id, localStorage.getItem("Token"));
            setTickets(bookedTickets.data.tickets);

        }
    }

    useEffect(() => {
        const qrCodes = {};
        tickets.forEach(async (ticket) => {
            console.log(ticket.id);
            qrCodes[ticket.id] = await QRCode.toDataURL(String(ticket.id));
        });
        setQRCodes(qrCodes);
    }, [tickets])
    useEffect(() => {
        fetchBookedTickets();
    }, [])
    const ticketColor = (ticketType) => {
      
        switch (ticketType.ticketType) {
            case "BRONZE":
                return "#CD7F32"
                break;

            case "SILVER":
                return "#C0C0C0"
                break;

            case "GOLD":
                return "#FFD700"
                break;
        }
    }
    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} style={{ backgroundColor: ticketColor(ticket.ticketType) }} className=" pb-5 mb-2">
                    <p>{ticket.ticketType.ticketType} - ${ticket.price}</p>
                    <img src={qrCodes[ticket.id]} alt="QR Code" />
                </div>
            ))}
        </>
    )
}

export default BookedTickets;
