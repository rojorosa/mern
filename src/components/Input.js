import React from 'react';
import File from '../images/file.png';
import Gallery from '../images/gallery.png';

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something here...' />
        
      <div className='send'>
        <img src={File} alt='' />
        <input type='file' style={{display:'none'}} id='file' />
       <label htmlFor='file'>
        <img src={Gallery} alt='' />
       </label>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Input;