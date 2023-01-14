import axios from "axios";

const BASE_URL = "http://localhost:8080";

const TicketAPI = {
    createTickets: newTickets => axios.post(`${BASE_URL}/tickets`, newTickets),
    getTickets: ticketData => axios.get(`${BASE_URL}/tickets?eventId=${ticketData.eventId}&ticketType=${ticketData.ticketType}`)
    .catch(err => {
        console.log(err);
      })
    
}
export default TicketAPI;