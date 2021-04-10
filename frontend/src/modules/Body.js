import React from 'react'
import titleImg from '../img/title-photo.png'
import whiteImg from '../img/dog-white.PNG'
import blueImg from '../img/dog-blue.PNG'

function Body() {
    return (
        <div className="Body">
            <div className="tite-img-container">
                <div className="title">
                    <h1>The Waiting Game</h1>
                    <h3>A pet adoption proposal</h3>
                </div>
                <img src={titleImg}></img>
            </div>
            <div className="bg-white-container">
                <img src={whiteImg}></img>
                <h2>I always thought it would be cool to be adopted.</h2>
            </div>
            <div className="bg-blue-container">
                <h2>I'll be waiting...<br />to go home with you!</h2>
                <img src={blueImg}></img>

            </div>
        </div>
    );
}
export default Body;
