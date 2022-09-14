// context ra dotenv banauni
import React, { useState } from 'react'
import "../styles/Signup.css"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate()
    const [formdata, setFormdara] = useState({ username: "", password: "" })
    const onChangeHandler = (e) => {
        setFormdara({ ...formdata, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const responseRaw = await fetch(`${process.env.REACT_APP_SERVER}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formdata)
        })
        const response = await responseRaw.json()
        if (response.success) {
            navigate("/login")
        } else {
            toast(response.msg)
        }
    }
    return (
        <>
            <div>
                <ToastContainer />
                <div className='body'>
                    <form className='signupcard' onSubmit={onSubmitHandler}>
                        <input type="text" name="username" id="" placeholder='username' onChange={onChangeHandler} />
                        <input type="password" name="password" id="" placeholder='password' onChange={onChangeHandler} />
                        <button type='submit'>SignUp</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup