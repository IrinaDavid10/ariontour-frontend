import axios from "axios";

const BASE_URL = "http://localhost:8080";
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
};
const BookingAPI = {
    createBooking: newBooking => axios.post(`${BASE_URL}/bookings`, newBooking)
    .catch(err => {
        console.log(err);
      }),
      getBookedTickets: (eventId,token) => axios.get(`${BASE_URL}/bookings/tickets/?eventId=${eventId}&token=${token}`,config),
      getBookedEvents: (token) => axios.get(`${BASE_URL}/bookings/events?token=${token}`,config)

}
export default BookingAPI;