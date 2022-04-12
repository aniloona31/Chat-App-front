import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { options } from '../../../server/router';
import '../components/Join.css';

function Join() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const navigate = useNavigate();

    const handleChange1 = (e) =>{
        setName(e.target.value);
    }

    const handleChange2 = (e) => {
        setRoom(e.target.value);
    }

    const goTochat = (e) =>{
        if(room != '' && name != ''){
            navigate('chat',{state : {
                name : name,
                room : room
            }});
        }
        // e.preventDafault();
    }

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join </h1>
                <div><input className='inputField1' placeholder='Username' type="text" onChange={handleChange1}/></div>
                <div><input className='inputField2' placeholder='Roomname' type="text" onChange={handleChange2}/></div>
                <button className='button' type='submit' onClick={goTochat}>sign in</button>
            </div>
        </div>
    )
}

export default Join