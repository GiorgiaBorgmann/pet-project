import React, { useState, useEffect } from 'react'
import CardDetail from '../img/card-detail.PNG'
import DogCard from './DogCard'
import { useParams } from "react-router";
import axios from './axios'

function UserInfo() {
    let { id } = useParams()
    const [user, setUser] = useState("")
    useEffect(() => {
        const userInfo = async () => {
            if (id != "") {
                const userInfo = await axios.get(`/userinfo/username/${id}`, {
                    headers: {
                        'auth-token': localStorage.getItem('token'),
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                setUser(userInfo.data)
            }
        }
        userInfo()
    }, [])
    console.log(user)
    return (
        <div className="container-user-info">
            <div className="card-user-info">
                <h2 className="title-user-card">User Information</h2>
                <div className="flex-text-user-page">
                    <div className="flex-text-card">
                        <div className="text-user-card">Name: {user?.name} {user?.lastName} </div>
                        <div className="text-user-card">Email: {user?.email} </div>
                    </div>
                    <div className="flex-text-card">
                        <div className="text-user-card">Phone: {user?.phone} </div>
                        <div className="text-user-card">Role: {user?.role} </div>
                    </div>
                </div>
                <div className="user-bio-card">
                    <div>Bio: {user?.bio} </div>
                </div>
            </div>
            <div className="title-user-pets"> User Pets</div>
            <div className="list-dogs-card" >
                {user?.adoptedPets && user?.adoptedPets.map((dog, index) => (
                    < DogCard key={index} dog={dog} />
                ))}
            </div>
        </div>
    )
}
export default UserInfo;