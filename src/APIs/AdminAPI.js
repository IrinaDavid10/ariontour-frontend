import axios from "axios";

const BASE_URL = "http://localhost:8080";
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
};

const AdminAPI = {
    
    registerAdminAccount: (newAdmin) => axios.post(`${BASE_URL}/registeradmin`, newAdmin, config)
}
export default AdminAPI;