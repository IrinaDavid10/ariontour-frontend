import axios from "axios";

const BASE_URL = "http://localhost:8080";

const CountryAPI = {
    getCountries: () => axios.get(`${BASE_URL}/countries`)
}
export default CountryAPI;