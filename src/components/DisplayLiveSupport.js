import LiveSupportChatAPI from "../APIs/LiveSupportChatAPI";
import Button from 'react-bootstrap/Button';
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import MessageHandler from "./MessageHandler";

function DisplayLiveSupport() {

    const [liveChats, setLiveChats] = useState();
    const [destinationUsername, setDestinationUsername] = useState("");
    const [isConversationStarted, setIsConversationStarted] = useState(false);
    const [subject, setSubject] = useState("");

    const fetchLiveChats = () => {
        LiveSupportChatAPI.getLiveSupportChats()
            .then(response => {
                setLiveChats(response.data.chats);
            })
    }

    useEffect(() => {
        fetchLiveChats();
    }, []);

    function startConversation(username, subject) {
        setDestinationUsername(username);
        setSubject(subject);
        setIsConversationStarted(true);
    }
  
    const ShowMessageHandler = () => {
        if (isConversationStarted) {
            return (<MessageHandler destinationUsername={destinationUsername} />)
        }
        return (<></>);
    }

    function showLiveChatIDs() {
        if (liveChats && liveChats.length > 0) {
            return (
                <>
                    {liveChats.map(chat => {
                        return <div key={chat.id}><button onClick={() => startConversation(chat.user.username, chat.subject)}>{chat.user.username} {chat.subject}</button></div>;
                    })}
                </>
            )
        } else {
            return <h1 className="text-light">No live chats available</h1>;
        }
    }

    function showContent() {
        if (!isConversationStarted) {
            return (
                <>
                    {showLiveChatIDs()}
                </>
            );
        }
        return (
            <>
                <h2 className="text-light">{destinationUsername}</h2>
                <h3 className="text-light">{subject}</h3>
                {ShowMessageHandler()}
            </>
        );
    }

    return (
        <>
            {showContent()}
        </>
    );
}
export default DisplayLiveSupport;
