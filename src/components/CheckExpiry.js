import jwt_decode from "jwt-decode";



const CheckExpiry = {
    IsExpired: () => {
        if (localStorage.getItem('Token') !== null) {
            let expiration = jwt_decode(localStorage.getItem("Token")).exp;
            let currentDateSeconds = Date.now() / 1000;
            if (currentDateSeconds > expiration) {
                return true;
            }
            return false;
        }
        return true;
    }
}


export default CheckExpiry;