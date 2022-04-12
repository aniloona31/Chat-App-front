import React from 'react'
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

function Messages({messages,name}) {
    // console.log(messages)
  return (
    <>
    <ScrollToBottom className='messages'>
        {messages.map((message,i) => {
            return(
            <div key={i}>
                <Message message={message} name={name}/>
            </div>
            )
        })}
    </ScrollToBottom>
    </>
  )
}

export default Messages