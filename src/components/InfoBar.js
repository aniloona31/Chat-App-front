import React from 'react'
// import { useNavigate } from 'react-router-dom';
import './InfoBar.css';
function InfoBar({ room }) {
    // const navigate = useNavigate();
    return (
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img className='onlineIcon' src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png" />
                <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href='/'><img className='closeImage' src='https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png' /></a>
            </div>
        </div>
    )
}

export default InfoBar