import React from 'react'
import CardDetail from '../img/card-detail.PNG'
import { useHistory } from 'react-router-dom'

function DogCard({ dog }) {
    const history = useHistory()
    const redirectPetPage = () => {
        history.push(`/pet-page/${dog._id}`)
    }
    return (
        <div className="container-card">
            <div className="photo-container">
                <img className="photo-dog" src={dog.photoURL}></img>
                <img className="detail-card" src={CardDetail}></img>
            </div>
            <div className='info-container-card'>
                <div>Name: {dog.Name}</div>
                <div>Type: {dog.type} </div>
                <div>Height: {dog.height} cm</div>
                <div>Weight: {dog.weight} kg</div>
                <div>Adoption status: {dog.adoptionStatus}</div>
            </div>
            <button onClick={redirectPetPage} className="card-button">Get to know each other</button>

        </div>
    )
}
export default DogCard;