import React from 'react'
import CardDetail from '../img/card-detail.PNG'
import { useHistory } from 'react-router-dom'

function DogCard({ pet }) {
    const history = useHistory()
    const redirectPetPage = () => {
        history.push(`/pet-page-adm/${pet._id}`)
    }
    return (
        <div className="container-card-users">
            <img className="photo-pet" src={pet.photoURL}></img>
            <div>
                <div className="flex-text-pet">
                    <div>Name: {pet.Name} </div>
                    <div className="status-pet">Status: {pet.adoptionStatus}</div>

                </div>
                <div className="flex-text-pet">

                    <div> Type: {pet.type}</div>
                    <button onClick={redirectPetPage} className="card-button-user">More</button>
                </div>
            </div>

        </div>
    )
}
export default DogCard;