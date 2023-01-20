import { useState } from "react";
import AdminAPI from "../../APIs/AdminAPI";

function AdminPanelAddNewAdminForm() {


    const [addNewAdminData, setAddNewAdminData] = useState();
    const [matchPasswordCheck, setMatchPasswordCheck] = useState("");
    
    const handleUsernameChange = event => {
        setAddNewAdminData(addNewAdminData => ({
            ...addNewAdminData,
            username: event.target.value
        }));
    }

    const handlePasswordChange = event => {
        setAddNewAdminData(addNewAdminData => ({
            ...addNewAdminData,
            password: event.target.value
        }));
    }

    const handleConfirmedPasswordChange = event => {
        setAddNewAdminData(addNewAdminData => ({
            ...addNewAdminData,
            confirmedPassword: event.target.value
        }));
    }



    const handleSubmit = e => {
        
        e.preventDefault();
        AdminAPI.registerAdminAccount(addNewAdminData)
            .then(response => {

                if (response?.status === 201) {
                    alert('Account added!');
                    return;
                }

            })
    }


    return (
        <form className="bg-black text-light p-2 bg-opacity-100 mb-5 " style={{ borderRadius: 20 }} onSubmit={handleSubmit} >
            <h1>Add new Admin account</h1>
            <label className="form-label mb-3 mt-3"  >Set username:</label>
            <input type="text" id="form2Example1" style={{ width: '50%' }} className="form-control mx-auto d-block" onChange={handleUsernameChange}  />
            <label className="form-label mb-3 mt-3" >Set password:</label>
            <input type="password" id="form2Example1" style={{ width: '50%' }} className="form-control mx-auto d-block" onChange={handlePasswordChange}  />
            <label className="form-label mb-3 mt-3" >Confirm password:</label>
            <input type="password" id="form2Example1" style={{ width: '50%' }} className="form-control mx-auto d-block" onChange={handleConfirmedPasswordChange}  />
            <button className="btn bg-dark border border-white text-light input-submit btn-block mt-4" style={{ marginLeft: '28rem', marginTop: "1rem" }} variant="dark mt-3" >Submit</button>
        </form>


    )


}
export default AdminPanelAddNewAdminForm;