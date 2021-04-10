import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Navbar() {
    return (

        <div className="container-el-nav">
            <Link className="logo" exact to="/home"><img src={logo}></img></Link>

            <ul className='nav-bar-container'>
                <li>
                    <SignIn />
                </li>
                <li>
                    <SignUp />
                </li>
            </ul>
        </div>
    )
}
export default Navbar;