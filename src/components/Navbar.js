import React from 'react';
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo_navbar'>
            Kurakani
        </span>
        <div className='user'>
            <img className='navbar_img' src='https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/348998282_5944647995658600_419960976423592040_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GCAlvQLNQmoAX9ZXGbB&_nc_ht=scontent.fktm19-1.fna&oh=00_AfDBiw3AzJHLuQpSVZIJb5BPH3G-isPItAqtqx5oU4i0Vw&oe=648EDE36' alt='' />
            <span className='user_name'>Roshani</span>
            <button className='navbar_button'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar;