import axios from "axios";

const BASE_URL = "http://localhost:8080";

const CityAPI = {
    createCity: newCity => axios.post(`${BASE_URL}/cities`, newCity),
    getCities: () => axios.get(`${BASE_URL}/cities`)
}
export default CityAPI;