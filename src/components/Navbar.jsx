import React from 'react'
import "../styles/navbar.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const logoutHandler = () => {
        localStorage.removeItem("username")
         navigate("/login")
    }
    return (
        <div className='navbar'>
            <div className='username'>
                Hello {localStorage.getItem("username")}
            </div>
            <div className='title'>
                Latest top trending news for you
            </div>
            <button className='btn' onClick={logoutHandler}>
                Logout
            </button>
        </div>
    )
}

export default Navbar