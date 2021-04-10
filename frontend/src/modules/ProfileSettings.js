import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import logo from '../img/logo.jpg'
import axios from './axios'
import { useHistory } from 'react-router-dom'

const ProfileSettings = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [bio, setBio] = useState('')
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
    const handleBio = event => {
        setBio(event.target.value)
    }
    const updateUser = async (event) => {
        event.preventDefault()
        const response = await axios.put(`/userinfo/user/${localStorage.getItem('id')}`, {
            name: name,
            lastName: lastName,
            phone: phone,
            email: email,
            password: password,
            confPassword: confPassword,
            bio: bio,
        })

        history.push('/home-login')
        const reload = window.location.reload()
    }


    return (
        <div>
            <div className="container-settings">
                {/* <div className="blue-bg">
                    <div className="logo-modal-sign-up"><img src={logo} /></div>

                </div> */}
                <div className="form-container-settings">
                    <div className="sign-up-title">Update your information</div>
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
                        <label> Bio</label>
                        <input onChange={event => handleBio(event)} className="input-la" type="text"></input>
                        <label> Password</label>
                        <input onChange={event => handlePassword(event)} className="input-la" type="password"></input>
                        <label> Confirm password</label>
                        <input onChange={event => handleConfPassword(event)} className="input-la" type="password"></input>
                        <button onClick={updateUser} type="submit">Enter</button>
                        <br></br>
                    </form>
                </div>
            </div>
        </div >
    )
}
export default ProfileSettings

