import React, { useEffect, useState } from 'react'
// import queryString from 'query-string'; 
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import InfoBar from './InfoBar';
import './Chat.css';
import Input from './Input';
import Messages from './Messages';
import TextContainer from './TextContainer';

let socket;

function Chat() {

    const location = useLocation();
    const [messages,setMessages] = useState([]);
    const [message,setMessage] = useState('');
    const [users,setUsers] = useState([]);
    const ENDPOINT = "localhost:3001";

    useEffect(()=>{

        socket = io(ENDPOINT);

        socket.emit('join',{name : location.state.name, room : location.state.room},(error)=>{
            console.log(error);
        })
        console.log(socket);
        socket.on('roomData',(data)=>{
            setUsers(data);
        })
        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    },[location.state])

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message]);
        })
        socket.on('roomData',(data)=>{
            console.log(data);
            setUsers(data);
        })
    },[messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if(message){
            socket.emit('sendMessage',message,() => {
                setMessage('');
            })
        }
    }
    // console.log('here are users ' + users);
    console.log(message,messages)

    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={location.state.room}/>
                <Messages messages = {messages} name={location.state.name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            <TextContainer users={users}/>
        </div>
    )
}

export default Chat