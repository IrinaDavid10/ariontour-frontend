import LiveSupportChatAPI from "../APIs/LiveSupportChatAPI";
import Button from 'react-bootstrap/Button';
import jwtDecode from "jwt-decode";
import { useState } from "react";
import MessageHandler from "./MessageHandler";

function CreateLiveSupport() {
    const [supportData, setsupportData] = useState();
    const [content, setContent] = useState("getHelp");
    const decoded = jwtDecode(localStorage.getItem("Token"));

    const handleSubjectChange = event => {
        setsupportData(supportData => ({
            ...supportData,
            username: decoded.sub
        }));
        setsupportData(supportData => ({
            ...supportData,
            subject: event.target.value
        }));
    }
    const handleSubmit = e => {

        e.preventDefault();

        LiveSupportChatAPI.createLiveSupportChat(supportData)
            .then(response => {
                console.log(response);
                console.log(response.data);
                if (response.status === 201) {
                    setContent("chat");
                }
            })
            .catch((error) => {
                console.log(error)
            });

    }
    function showContent() {
        if (content === "getHelp") {
            return (
                <>
                    <label className="form-label text-light" >Subject</label>
                    <input type="text" id="form2Example1" className="form-control" onChange={handleSubjectChange} />
                    <Button onClick={handleSubmit} variant="secondary mt-3">SUBMIT</Button>
                </>
            );
        }
        return (
            <MessageHandler destinationUsername={""} />
        );
    }
    return (
        <>
        { showContent() }
        </>
    );
}
export default CreateLiveSupport;