import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import { useHistory } from 'react-router-dom'


function NavbarLogIn() {
    const history = useHistory()
    const logout = () => {        
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        history.push('/home')
        const reload = window.location.reload()
    }
    return (
        <div className="container-el-nav">
            <Link className="logo" exact to="/home-login"><img src={logo}></img></Link>

            <ul className='nav-bar-container'>
                <li>
                    <Link className="link-search" to="/search">Find your pet</Link>
                </li>
                <li>
                    <Link className="link-search" to="/my-pets">My pets</Link>
                </li>
                <li>
                    <Link className="link-search" to="/profile-settings">Settings</Link>
                </li>
                <li>
                    <div onClick={logout} className="link-search" to="/home">logout</div>
                </li>
            </ul>
        </div>
    )
}
export default NavbarLogIn;