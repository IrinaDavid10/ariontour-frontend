import axios from "axios";

const BASE_URL = "http://localhost:8080";

const CustomerAPI = {
    getCustomers: () => axios.get(`${BASE_URL}/customers`),
    createCustomer: newCustomer => axios.post(`${BASE_URL}/customers`, newCustomer),
    removeCustomer: customerToDelete =>  axios.delete(`${BASE_URL}/customers/`+ customerToDelete.id)
};

export default CustomerAPI;