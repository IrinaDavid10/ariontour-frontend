const MessageReceived = (props) => {
    return (
        <div >
            <b>{props.from}</b>: {props.text} 
        </div>
    );
};
const ChatMessagesPlaceholder = (props) => {
    const messagesReceived = props.messagesReceived || [];
    const uniqueIds = new Set();
    return (
        <>
            <h2>Messages:</h2>
            {messagesReceived
                    .map(message => {
                        if (!uniqueIds.has(message.id)) {
                            uniqueIds.add(message.id);
                            return <MessageReceived key={message.id} from={message.from} direct={message.to === props.username} text={message.text} />
                        }
                    })}
        </>
    );
}



export default ChatMessagesPlaceholder;