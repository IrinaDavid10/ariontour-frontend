import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Logout(){
  
 
    const navigate = useNavigate();

    // HANDLE LOGOUT EVENT
    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');

        // CLEAR DATA FROM STORAGE
        localStorage.clear();
        sessionStorage.clear();
        navigate("/");
        window.location.reload(true);
    }
    return(
        <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
    )

}
export default Logout;