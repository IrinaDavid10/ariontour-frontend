import axios from "axios";

const BASE_URL = "http://localhost:8080";
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
  };
const UsersAPI = {
    getUsers: () => axios.get(`${BASE_URL}/users`, config),
    removeUser: userToDelete =>  axios.delete(`${BASE_URL}/users/${userToDelete.id}`, config )
};

export default UsersAPI;