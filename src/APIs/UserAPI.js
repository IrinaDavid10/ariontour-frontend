import axios from "axios";

const BASE_URL = "http://localhost:8080";

const LoginAPI = {
    loginUsers: newUser => axios.post(`${BASE_URL}/login`, newUser)
    .then(response => {
        console.log(response);
        localStorage.removeItem("Token");
        localStorage.setItem("Token", response.data.accessToken);
        return response;
    }),
    registerUser: newUser => axios.post(`${BASE_URL}/registercustomer`, newUser),
    changePassword: passwordChangeData => 
    axios.put(`${BASE_URL}/users/${passwordChangeData.username}`,  passwordChangeData )
      .then(response => {
        console.log(response.status);
        console.log(response.data);
        return response;
      })
      .catch(err => {
        console.log(err);
      })
}
export default LoginAPI;