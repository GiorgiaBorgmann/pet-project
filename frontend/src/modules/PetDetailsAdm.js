import React, { useState, useEffect } from 'react'
import CardDetail from '../img/card-detail.PNG'
import { useParams } from "react-router";
import UpdatePet from './UpdatePet'
import axios from './axios'

function UserInfo() {
    let { id } = useParams()
    const [pet, setPet] = useState("")
    useEffect(() => {
        const petInfo = async () => {
            if (id != "") {
                const petInfo = await axios.get(`/pet/${id}`)
                setPet(petInfo.data)
            }
        }
        petInfo()
    }, [])
    return (
        <div className="container-user-info">

            <div className="card-user-info">
                <h2 className="title-user-card">Pet Information</h2>

                <div className="flex-text-user-page">
                    <div className="card-photo-container">
                        <img className=" photo-pet-card-adm" src={pet.photoURL}></img>
                    </div>
                    <div className="flex-text-card">
                        <div className="text-user-card">Name: {pet.Name}  </div>
                        <div className="text-user-card">Color: {pet.color} </div>
                        <div className="text-user-card">Hypoallergenic: {pet.hypoallergenic} </div>
                        <div className="text-user-card">Type: {pet.type} </div>
                    </div>
                    <div className="flex-text-card">
                        <div className="text-user-card">Diet Restric.: {pet.diet} </div>
                        <div className="text-user-card">Height: {pet.height} </div>
                        <div className="text-user-card">Weight: {pet.weight} </div>
                        <div className="text-user-card">Status: {pet.adoptionStatus} </div>
                    </div>
                </div>
                <div className="user-bio-card">
                    <div>Bio: {pet.bio} </div>
                </div>
            </div>
            <div className="title-user-pets"> Edit pet information</div>
            <div className="list-pet-card" >
                <UpdatePet />
            </div>
        </div>
    )
}
export default UserInfo;