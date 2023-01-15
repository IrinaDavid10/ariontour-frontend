import jwtDecode from "jwt-decode";
import { useState } from "react";
import ModifyPassword from "./ModifyPassword";
import { Row, Col, Container } from "react-bootstrap";

function AccountSettings() {
  const [modifyPassword, setModifyPassword] = useState(false);
  const decoded = jwtDecode(localStorage.getItem("Token"));

  function showModifyPassword() {
    if (modifyPassword === true) {
      setModifyPassword(false);
    } else
      setModifyPassword(true);
  }



  return (
    <div className="bg-black text-light p-2 bg-opacity-100 mb-5 " style={{ borderRadius: 20 }} >
         <h1 className="text-light">Settings panel</h1>
      <div className="form-outline  mb-5 ">
        <label className="form-label mb-3 mt-2 "  >Username</label>
        <input type="text" id="form2Example1" className="form-control mx-auto d-block" style={{ width: '50%' }} placeholder={decoded?.sub} readOnly />
      </div>

      <Container>
        <Row  style={{ width: '20%' }}>
          <button onClick={showModifyPassword}  className="btn bg-dark border border-white text-light mb-3 btn-block" >Modify password</button>
        </Row>
      </Container>
      {modifyPassword && <ModifyPassword />}

    </div>
  );
}
export default AccountSettings;