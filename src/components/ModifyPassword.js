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

    function setUsername() {
        setPasswordChangeData(passwordChangeData => ({
            ...passwordChangeData,
            username: jwtDecode(localStorage.getItem("Token")).sub || ''
        }));
    }

    useEffect(() => {
        setUsername();
    }, []);

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

        <form className="bg-black text-light p-2 bg-opacity-100 mb-5 " style={{ borderRadius: 20 }} onSubmit={handleSubmit}>
            <h1>Modify account password</h1>
            <label className="form-label mb-3 mt-3"  >Enter old password:</label>
            <input type="password" id="form2Example1" style={{ width: '50%' }} className="form-control mx-auto d-block" onChange={handleOldPasswordChange} />
           
            <label className="form-label mb-3 mt-3" >Enter new password:</label>
            <input type="password" id="form2Example1" style={{ width: '50%' }} className="form-control mx-auto d-block" onChange={handleNewPasswordChange} />
           
            <label className="form-label mb-3 mt-3" >Re-enter new password:</label>
            <input type="password" id="form2Example1" style={{ width: '50%' }} className="form-control mx-auto d-block" onChange={handleReEnterPasswordChange} />
           
            <button className="btn bg-dark border border-white text-light input-submit btn-block mt-4" style={{ marginLeft: '28rem', marginTop: "1rem" }} variant="dark mt-3" >Submit</button>
        </form>



    )
}
export default ModifyPassword;