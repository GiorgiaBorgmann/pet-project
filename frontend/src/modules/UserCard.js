import React from 'react'
import CardDetail from '../img/card-detail.PNG'
import { useHistory } from 'react-router-dom'

function DogCard({ user }) {
    const history = useHistory()
    const redirectPetPage = () => {
        history.push(`/user-info-adm/${user._id}`)
    }
    return (
        <div className="container-card-users">

            <img className="detail-card-user" src={CardDetail}></img>
            <div>
                <div className="flex-text-user">
                    <div>Name: {user.name} {user.lastName} </div>
                </div>
                <div className="flex-text-user">
                    <div>Role: {user.role}</div>
                    <button onClick={redirectPetPage} className="card-button-user">More</button>
                </div>
            </div>

        </div>
    )
}
export default DogCard;