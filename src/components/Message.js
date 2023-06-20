import React from 'react'
import Profile from '../images/roshni.jpg';
const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img className='imageInfo' src={Profile} />
      <span className='justNow'>just now</span>
      </div>
      <div className='messageContent'>
        <p className='textInfo'>Hello</p>
      <img className='imageContent' src={Profile} /> 
      </div>
    </div>
    
  )
}

export default Message;
