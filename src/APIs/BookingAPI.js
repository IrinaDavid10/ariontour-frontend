import axios from "axios";

const BASE_URL = "http://localhost:8080";

const BookingAPI = {
    createBooking: newBooking => axios.post(`${BASE_URL}/bookings`, newBooking)
    .catch(err => {
        console.log(err);
      })

}
export default BookingAPI;