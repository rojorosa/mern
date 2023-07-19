import React from 'react';
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo_navbar'>
            Kurakani
        </span>
        <div className='user'>
            <img className='navbar_img' src='images/roshni.jpg' alt='' />
            <span className='user_name'>Roshani</span>
            <button className='navbar_button'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar;