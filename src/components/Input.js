import React from 'react';
import File from '../images/file.png';
import Send from '../images/send.png';

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something here...' />
      <label htmlFor='file'>
          <img className='sendFile' src={File}  alt='' />
        </label>
      <div className='send'>
        <img className='sendImage' src={Send} alt='' />
        <input type='file' style={{display:'none'}} id='file' />
       
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Input;