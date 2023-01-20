import { useState } from "react";
import { useEffect } from "react";
import BookingAPI from "../../APIs/BookingAPI";
import TicketAPI from "../../APIs/TicketAPI";

function AdminPanelBoughtTicketsStatistic(props) {
    const [bookedTickets, setBookedTickets] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    
    const fetchBookedTickets = async (event_id) => {
        if (!isFetched) {
            const response = await BookingAPI.getBookedTicketsByEvent(event_id);
            if (response.status === 200) {
                setBookedTickets(response.data);
                props.setTotalTicketsBought(response.data.length);
                setIsFetched(true);
            }
        }
    };
    
    useEffect(() => {
        fetchBookedTickets(props.event.id);
    }, [isFetched])
    
    return (
        <div className="text-white">
        <h1 className="display-4">{props.event.title}</h1>
        <p className="lead">{bookedTickets.length} tickets booked</p>
        </div>
    )
    }        
export default AdminPanelBoughtTicketsStatistic;