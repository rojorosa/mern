import React from 'react';
import Camera from '../images/camera.png';
import User from '../images/adduser.png';
import More from '../images/More.png';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>
          Niru
        </span>
        <div className='chatIcons'>
          <img className='icon_image' src={Camera}  alt=''/>
          <img className='icon_image' src={User} alt=''/>
          <img className='icon_image' src={More}  alt=''/>

        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat;