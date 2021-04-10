import React, { useEffect, useState } from 'react'
import CardDetail from '../img/card-detail.PNG'
import { useHistory } from 'react-router-dom'
import axios from './axios'
import UserCard from './UserCard'
import PetDashboardCard from './PetDashboarCard'
function Dashboard({ dog }) {
    const history = useHistory()
    const [usersList, setUsersList] = useState("")
    const [petList, setPetList] = useState("")
    useEffect(async () => {
        const usersListResponse = await axios.get("/userinfo/usersList", {
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const PetListResponse = await axios.get("/userinfo/petsList", {
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        setPetList(PetListResponse.data)
        setUsersList(usersListResponse.data)
    }, [])
    return (
        <div className="container-card-dashboard">
            <h1>Welcome</h1>

            <div className="list-container-dashboard">
                <div className="list">
                    <h2>Users</h2>
                    {usersList && usersList.map((user, index) => (
                        < UserCard key={index} user={user} />
                    ))}
                </div>
                <div className="list">
                    <h2>Pets</h2>
                    {petList && petList.map((pet, index) => (
                        < PetDashboardCard key={index} pet={pet} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dashboard;