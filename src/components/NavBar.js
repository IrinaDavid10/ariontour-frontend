import React from "react"
import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar(){

    const links = [
        {
            id: 1,
            path: "/",
            text: "Overview"
        },
        {
            id: 2,
            path: "/customer",
            text: "Customer Refine"
        },
        {
            id: 3,
            path: "/login",
            text: "Log in"
        },
        {
            id: 4,
            path: "/register",
            text: "Customer registration"
        }
    ]

    return (
        <nav className={styles.navBar}>
            <ul>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            {<NavLink to={link.path}>
                            {link.text}
                            </NavLink>}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar;