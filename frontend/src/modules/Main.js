import React, { useEffect, useState } from 'react'
import Body from './Body.js'
import Navbar from './Nav.js'
import SearchPage from './SearchPage.js'
import NavbarLogIn from './NavBarLogIn'
import NavBarAdm from './NavBarAdm'
import HeaderUser from './HeaderUser'
import Dashboard from './Dashboard'
import AddPet from './AddPet'
import PetPage from './PetPage'
import MyPets from './MyPets'
import UserInfoDash from './UserDeailsAdm'
import ProfileSettings from './ProfileSettings'
import PetDetailsAdm from './PetDetailsAdm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Main() {
    const [token, setToken] = useState("")
    const [role, setRole] = useState("")
    const [savedPetsList, setSavedPetsList] = useState([])
    const [adoptedPetsList, setAdoptedPetsList] = useState([])
    useEffect(() => {
        setToken(localStorage.getItem('token'))
        setRole(localStorage.getItem('role'))
    }, [])
    console.log(role)
    if (token) {
        if (role && role === "basic") {
            return (
                <Router>
                    <div >
                        <NavbarLogIn />
                        <div>
                            <Switch>
                                <Route exact path="/home-login">
                                    <HeaderUser />
                                </Route>
                                <Route exact path="/search">
                                    <SearchPage />
                                </Route>
                                <Route exact path="/profile-settings">
                                    <ProfileSettings />
                                </Route>
                                <Route path="/pet-page/:id">
                                    <PetPage savedPetsList={savedPetsList} setSavedPetsList={setSavedPetsList} adoptedPetsList={adoptedPetsList} setAdoptedPetsList={setAdoptedPetsList} />
                                </Route>
                                <Route path="/my-pets">
                                    <MyPets savedPetsList={savedPetsList} setSavedPetsList={setSavedPetsList} adoptedPetsList={adoptedPetsList} setAdoptedPetsList={setAdoptedPetsList} />
                                </Route>
                            </Switch>
                        </div>
                    </div >
                </Router >
            )
        }
        else if (role && role === "Admin") {
            console.log(role)
            return (
            <Router>
                <div >
                    <NavBarAdm />
                    <div>
                        <Switch>
                            <Route exact path="/adm">
                                    <Dashboard />
                            </Route>
                            <Route exact path="/add-pet">
                                <AddPet />
                                </Route>
                                <Route exact path="/user-info-adm/:id">
                                    <UserInfoDash />
                                </Route>
                                <Route exact path="/pet-page-adm/:id">
                                    <PetDetailsAdm />
                                </Route>
                        </Switch>
                    </div>
                </div>
            </Router >
        )
    }
        else {
            return (
                <Router>
                    <NavbarLogIn />
                </Router>
            )
        }
    }
    else {
        return (
            <Router>
                <div >
                    <Navbar />
                    <div>
                        <Switch>
                            <Route exact path="/home">
                                <Body />
                            </Route>
                            <Route exact path="/search">

                            </Route>
                        </Switch>
                    </div>
                </div >
            </Router >
        )
    }

}
export default Main;