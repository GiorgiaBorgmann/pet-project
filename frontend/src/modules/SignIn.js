import React, { useState } from 'react';
import Modal from 'react-modal';
import logo from '../img/logo.jpg'
import axios from './axios'
import { useHistory } from 'react-router-dom'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f2dcdd',
        width: '25%'
    },
    overlay: {
        backgroundColor: 'rgb(192,192,192, 0.4)',

    }
};
const SignIn = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const logIn = async (event) => {
        event.preventDefault()
        const response = await axios.post("/user/login", {
            email: email,
            password: password
        })
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
        }
        if (localStorage.getItem('role') === "basic") {
            history.push('/home-login')
        } else {
            history.push('/adm')
        }
        const reload = window.location.reload()
    }
    

    return (
        <div>
            <div className="link-log-in" onClick={openModal}>LogIn</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="close-button" onClick={closeModal}>X</div>
                <div className="logo-modal"><img src={logo} /></div>
                <div className="sign-in-title">Sign In</div>
                <form className="form-sign-in">
                    <label> Email</label>
                    <input onChange={event => handleEmail(event)} type="email"></input>
                    <label> Password</label>
                    <input onChange={event => handlePassword(event)} type="password"></input>
                    <button onClick={logIn} type="submit">Enter</button>
                </form>
            </Modal>
        </div>
    )
}
export default SignIn
