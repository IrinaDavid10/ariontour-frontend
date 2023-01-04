import Button from 'react-bootstrap/Button';
import UserAPI from "../APIs/UserAPI.js"
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';

function ModifyPassword() {
    const [passwordChangeData, setPasswordChangeData] = useState();
    const [matchPasswordCheck, setMatchPasswordCheck] = useState("");
    const handleOldPasswordChange = event => {
        setPasswordChangeData(passwordChangeData => ({
            ...passwordChangeData,
            oldPassword: event.target.value
        }));
    }

    const handleNewPasswordChange = event => {
        setPasswordChangeData(passwordChangeData => ({
            ...passwordChangeData,
            newPassword: event.target.value
        }));
    }

    function setUsername(){
        setPasswordChangeData(passwordChangeData => ({
            ...passwordChangeData,
            username: jwtDecode(localStorage.getItem("Token")).sub || ''
        }));
    }

    useEffect(() => {
       setUsername();
      },[]);

    const handleReEnterPasswordChange = event => {


        if (event.target.value !== passwordChangeData.newPassword) {
            setMatchPasswordCheck("Passwords do not match.");
        } else {
            setMatchPasswordCheck("");
        }
    }

    const handleSubmit = e => {
        console.log(passwordChangeData.username);
        e.preventDefault();
        UserAPI.changePassword(passwordChangeData)
            .then(response => {
          
                if (response?.status === 200) {
                    alert('Password successfully changed!');
                    return;
                }

            })
    }

    return (
       
            <div className="form-outline mb-5 mt-5">
                <label className="form-label" >Enter old password:</label>
                <input type="text" id="form2Example1" className="form-control" onChange={handleOldPasswordChange} />
                <label className="form-label" >Enter new password:</label>
                <input type="text" id="form2Example1" className="form-control" onChange={handleNewPasswordChange} />
                <label className="form-label" >Re-enter new password:</label>
                <input type="text" id="form2Example1" className="form-control" onChange={handleReEnterPasswordChange} />
                <Button onClick={handleSubmit} style={{ marginRight: '16rem' }} variant="dark mt-3" >Submit</Button>
            </div>
     


    )
}
export default ModifyPassword;