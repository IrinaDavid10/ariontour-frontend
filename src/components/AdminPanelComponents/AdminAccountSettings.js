import jwtDecode from "jwt-decode";
import UserNamePlaceholder from "../UserNamePlaceholder";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import ModifyPassword from "../ModifyPassword";

function AdminAccountSettings() {
    const[modifyPassword, setModifyPassword]= useState(false);
    const decoded = jwtDecode(localStorage.getItem("Token"));

    function showModifyPassword(){
        if(modifyPassword === true){
        setModifyPassword(false);
        }else
        setModifyPassword(true);
    }


    return (
      <form className="bg-black text-light p-2 bg-opacity-100 mb-5 " style={{ borderRadius: 20 }} >
        <div className="form-outline mb-5 mt-5">
          <label className="form-label" >Username</label>
          <input type="text" id="form2Example1" className="form-control" placeholder={decoded?.sub} readOnly />
        </div>
        <Button onClick={showModifyPassword} style={{ marginRight: '16rem' }} variant="dark" >Modify password</Button>
        {modifyPassword&&<ModifyPassword/>}
      </form>
    );
    }
    export default AdminAccountSettings;