import React from 'react';
const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img className='imageInfo' src='images/roshni.jpg' alt="" />
      <span className='justNow'>just now</span>
      </div>
      <div className='messageContent'>
        <p className='textInfo'>Hello</p>
      <img className='imageContent' src='images/roshni.jpg' alt="" /> 
      </div>
    </div>
    
  )
}

export default Message;
  