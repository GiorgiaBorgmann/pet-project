import React, { useEffect, useState } from 'react'
import DogCard from './DogCard'
import axios from './axios'

function MyPets({ adoptedPetsList, setAdoptedPetsList, savedPetsList, setSavedPetsList }) {

    const [pageToggle, setPageToggle] = useState("")
    useEffect(() => {
        const getSavedPetsList = async () => {

            const petList = await axios.get(`/userinfo/list-saved-pets/${localStorage.getItem('id')}`, {
                headers: {
                    'auth-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                }
            })
            setSavedPetsList(petList.data.savePets)
            setAdoptedPetsList(petList.data.adoptedPets)
        }
        getSavedPetsList()
    }, [])
    const togglePet = () => {
        if (pageToggle === true) {
            setPageToggle(false)
        } else {
            setPageToggle(true)
        }
    }
    if (pageToggle === true) {
        if (savedPetsList != "") {
            return (
                <div className="container-my-pets-page">
                    <div className="toggle-button-container">
                        <div className="toggle-button" onClick={togglePet}>Saved Pets</div>
                    </div>
                    <div className="list-dogs">
                        {savedPetsList && savedPetsList.map((dog, index) => (
                            < DogCard key={index} dog={dog} />
                        ))}
                    </div>

                </div>
            )
        } else {

            return (
                <div className="container-my-pets-page">
                    <div className="toggle-button-container">
                        <div className="toggle-button" onClick={togglePet}>Saved Pets</div>
                    </div>
                    <div className="no-pets-container">
                        <div className="no-pets">You don't have saved pets yet :/</div>
                    </div>

                </div>
            )
        }
    } else {
        if (adoptedPetsList != "") {
            return (
                <div className="container-my-pets-page" >
                    <div className="toggle-button-container">
                        <div className="toggle-button" onClick={togglePet}>My pet family</div>
                    </div>
                    <div className="list-dogs">
                        {adoptedPetsList && adoptedPetsList.map((dog, index) => (
                            < DogCard key={index} dog={dog} />
                        ))}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container-my-pets-page" >
                    <div className="toggle-button-container">
                        <div className="toggle-button" onClick={togglePet}>My pet family</div>
                    </div>
                    <div className="no-pets-container">
                        <div className="no-pets">You don't have adopted pets yet :/</div>
                    </div>
                </div>
            )
        }
    }
}
export default MyPets;