import React from "react";
import { useState, useEffect } from "react";
import UsersAPI from "../APIs/UsersAPI";

function Customer(props) {
    const [usersList, setUsersList] = useState([]);

    const fetchUsers = async () => {
        UsersAPI.getUsers()
            .then(response => {
                setUsersList(response.data.users);
            })
            .catch(err => console.error(err))

    }

    useEffect(() => {
        fetchUsers();
    }, []);

    function deleteUser(user) {

        UsersAPI.removeUser(user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(user.id);
                props.setRefresh(true);
            });
    }


    return (
        <tr >
            <td>{props.customer.id}</td>
            <td>{props.customer.firstName}</td>
            <td>{props.customer.lastName}</td>
            <td><button onClick={() => {
                deleteUser(usersList.find(user => user.customer && user.customer.id === props.customer.id));
            }}>X</button>
            </td>
        </tr>

    )
}

export default Customer;