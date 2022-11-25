import axios from "axios";

const BASE_URL = "http://localhost:8080";

const EventAPI = {
    getEvents: () => axios.get(`${BASE_URL}/events`),
    createEvent: newEvent => axios.post(`${BASE_URL}/events`, newEvent),
    getEvent: eventId => axios.get(`${BASE_URL}/events/${eventId}`)
}
export default EventAPI;