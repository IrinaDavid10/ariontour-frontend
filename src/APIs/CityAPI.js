import axios from "axios";

const BASE_URL = "http://localhost:8080";
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
  };
const CityAPI = {
    createCity: newCity => axios.post(`${BASE_URL}/cities`, newCity,config),
    getCities: () => axios.get(`${BASE_URL}/cities`,config)
}
export default CityAPI;