import axios from "axios";

const BASE_URL = "http://localhost:8080";

const UsersAPI = {
    getUsers: () => axios.get(`${BASE_URL}/users`),
    removeUser: userToDelete =>  axios.delete(`${BASE_URL}/users/${userToDelete.id}` )
};

export default UsersAPI;