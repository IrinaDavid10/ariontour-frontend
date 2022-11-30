import axios from "axios";

const BASE_URL = "http://localhost:8080";

const LocationAPI = {
    createLocation: newLocation =>  axios.post(`${BASE_URL}/locations`, newLocation),
    getLocations: () => axios.get(`${BASE_URL}/locations`)
}
export default LocationAPI;