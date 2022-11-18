import axios from "axios";

const BASE_URL = "http://localhost:8080";

const LoginAPI = {
    loginUsers: newUser => axios.post(`${BASE_URL}/login`, newUser),
    registerUser: newUser => axios.post(`${BASE_URL}/registercustomer`, newUser)
}
export default LoginAPI;