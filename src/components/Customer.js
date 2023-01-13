import React from "react";
import { useState, useEffect } from "react";
import UsersAPI from "../APIs/UsersAPI";

function Customer(props) {
    const [usersList, setUsersList] = useState([]);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const fetchUsers = async () => {
        UsersAPI.getUsers()
            .then(response => {
                setUsersList(response.data.users);
            })
            .catch(err => console.error(err))

    }

    useEffect(() => {
        UsersAPI.getUsers()
            .then(response => {
                setUsersList(response.data.users);
            })
            .catch(err => console.error(err))

    }, []);
    const handleConfirm = user => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            UsersAPI.removeUser(user)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    console.log(user.id);
                    props.setRefresh(true);
                });
        }
        setShowConfirmDialog(false);
    };

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
        <>
            <tr >
                <td>{props.customer.id}</td>
                <td>{props.customer.firstName}</td>
                <td>{props.customer.lastName}</td>
                <td>
                    <button onClick={() => handleConfirm(usersList.find(user => user.customer && user.customer.id === props.customer.id))}>X</button>
                </td>
            </tr>
            {showConfirmDialog && (
                <div className="confirm-dialog">
                    <p>Are you sure you want to delete this user?</p>
                    <button onClick={() => handleConfirm(usersList.find(user => user.customer && user.customer.id === props.customer.id))}>Yes</button>
                    <button onClick={() => setShowConfirmDialog(false)}>No</button>
                </div>
            )}
        </>
    );
}

export default Customer;