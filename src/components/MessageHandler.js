import ChatMessagesPlaceholder from "./ChatMessagePlaceholder";
import SendMessagePlaceholder from "./SendMessagePlaceholder";
import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { v4 as uuidv4 } from 'uuid';
import jwtDecode from "jwt-decode";

const ENDPOINT = "http://localhost:8080/ws";
function MessageHandler(props) {

    const [stompClient, setStompClient] = useState();
    const [username, setUsername] = useState();
    const [messagesReceived, setMessagesReceived] = useState([]);
    const [messageDestination, setMessageDestination] = useState("");

    useEffect(() => {
        // use SockJS as the websocket client
        const socket = SockJS(ENDPOINT);
        // Set stomp to use websockets
        const stompClientTemp = Stomp.over(socket);
        // connect to the backend
        stompClientTemp.connect({}, () => {
          // subscribe to the backend
          stompClientTemp.subscribe('/user', (data) => {
            console.log(data);
            onMessageReceived(data);
          });
          // maintain the client for sending and receiving
          setStompClient(stompClientTemp);
        });
      }, []);
            
      useEffect(() => {
        if (stompClient) {
            const decoded = jwtDecode(localStorage.getItem("Token"));
          onUsernameInformed(decoded?.sub);
        }
      }, [stompClient]);
      
      useEffect(() => {
        setMessageDestination(props.destinationUsername); 
      },[])
      // send the data using Stomp
      const sendMessage = (newMessage) => {
        if(messageDestination === "")
          alert("Wait for an administrator to contact you");
          else
        if (stompClient && stompClient.connected) {
          const payload = { 'id': uuidv4(), 'from': username, 'to': messageDestination, 'text': newMessage.text };
          stompClient.send(`/user/${payload.to}/queue/inboxmessages`, {}, JSON.stringify(payload));
          setMessagesReceived(messagesReceived => [...messagesReceived, payload]);
        }
      };
      
      // display the received data
      const onMessageReceived = (data) => {
        const message = JSON.parse(data.body);
        if(messageDestination ==="")
            setMessageDestination(message.from);
        setMessagesReceived(messagesReceived => [...messagesReceived, message]);
      };
      
      const onUsernameInformed = (username) => {
        setUsername(username);
        if (stompClient && stompClient.connected) {
          console.log("stompClient available");
          stompClient.subscribe(`/user/${username}/queue/inboxmessages`, (data) => {
            console.log("INBOx");
            onMessageReceived(data);
          });
        }
        else {
          console.log("stompClient :(");
        }
      };
      

    return (
        <div className="text-light">
            <SendMessagePlaceholder username={username} onMessageSend={sendMessage} />
            <br></br>
            <ChatMessagesPlaceholder username={username} messagesReceived={messagesReceived} />
        </div>
    );

}
export default MessageHandler;