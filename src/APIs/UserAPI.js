import axios from "axios";

const BASE_URL = "http://localhost:8080";

const LoginAPI = {
    loginUsers: newUser => axios.post(`${BASE_URL}/login`, newUser)
    .then(response => {
        console.log(response);
        localStorage.removeItem("Token");
        localStorage.setItem("Token", response.data.accessToken);
        window.authorized = true;
        return response;
    }),
    registerUser: newUser => axios.post(`${BASE_URL}/registercustomer`, newUser)
}
export default LoginAPI;