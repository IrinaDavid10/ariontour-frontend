import axios from "axios";

const BASE_URL = "http://localhost:8080";
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
  };
const CustomerAPI = {
    getCustomers: () => axios.get(`${BASE_URL}/customers`,config),
    createCustomer: newCustomer => axios.post(`${BASE_URL}/customers`, newCustomer),
    removeCustomer: customerToDelete =>  axios.delete(`${BASE_URL}/customers/`+ customerToDelete.id,config)
};

export default CustomerAPI;