import React, { useState, useEffect } from 'react';
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
        width: '60%',
        padding: '0'
    },
    overlay: {
        backgroundColor: 'rgb(192,192,192, 0.4)',

    }
};
const SignUp = () => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const history = useHistory()

    const handleName = event => {
        setName(event.target.value)
    }
    const handleLastName = event => {
        setLastName(event.target.value)
    }
    const handlePhone = event => {
        setPhone(event.target.value)
    }
    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfPassword = event => {
        setConfPassword(event.target.value)
    }
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const creatUser = async (event) => {
        event.preventDefault()
        const response = await axios.post("/user/register", {
            name: name,
            lastName: lastName,
            phone: phone,
            email: email,
            password: password
        })
        const logIn = await axios.post("/user/login", {
            email: email,
            password: password
        })
        if (logIn.status === 200) {
            localStorage.setItem('token', logIn.data.token);
            localStorage.setItem('role', logIn.data.role);
        }
        history.push('/home-login')
        const reload = window.location.reload()
    }


    return (
        <div>

            <div className="link-sign-up" onClick={openModal}>SignUp</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container-sing-in">
                    <div className="blue-bg">
                        <div className="logo-modal-sign-up"><img src={logo} /></div>
                    </div>
                    <div className="form-container">
                        <div className="close-button" onClick={closeModal}>X</div>
                        <div className="sign-up-title">Join our community</div>
                        <form className="form-sign-up">
                            <div className="name-container">
                                <div className="name-sign-up">
                                    <label>First name</label>
                                    <input onChange={event => handleName(event)} className="name-sign-up-input" type="text"></input>
                                </div>
                                <div className="last-name-sign-up">
                                    <label>Last name</label>
                                    <input onChange={event => handleLastName(event)} className="name-sign-up-input" type="text"></input>
                                </div>
                            </div>
                            <label>Phone number</label>
                            <input onChange={event => handlePhone(event)} className="input-la" type="tel"></input>
                            <label> Email</label>
                            <input onChange={event => handleEmail(event)} className="input-la" type="email"></input>
                            <label> Password</label>
                            <input onChange={event => handlePassword(event)} className="input-la" type="password"></input>
                            <label> Confirm password</label>
                            <input onChange={event => handleConfPassword(event)} className="input-la" type="password"></input>
                            <button onClick={creatUser} type="submit">Enter</button>
                        </form>
                    </div>
                </div>

            </Modal>
        </div>
    )
}
export default SignUp

