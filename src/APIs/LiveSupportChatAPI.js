import axios from "axios";

const BASE_URL = "http://localhost:8080";
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
};
const LiveSupportChatAPI = {
    createLiveSupportChat: (newChat) => axios.post(`${BASE_URL}/chats`, newChat,config),
    getLiveSupportChats: () => axios.get(`${BASE_URL}/chats`, config)

}

export default LiveSupportChatAPI;