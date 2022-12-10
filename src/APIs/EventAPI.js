import axios from "axios";

const BASE_URL = "http://localhost:8080";
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
};
const EventAPI = {
    getEvents: () => axios.get(`${BASE_URL}/events`),
    createEvent: (newEvent,dateTime) => axios.post(`${BASE_URL}/events?localDateTime=${dateTime}`, newEvent, config),
    getEvent: eventId => axios.get(`${BASE_URL}/events/${eventId}`),
    getEventTicketsAmountByType: (eventId,ticketTypeId) => axios.get(`${BASE_URL}/events/${eventId}/tickets?type_id=${ticketTypeId}`,config)
}
export default EventAPI;