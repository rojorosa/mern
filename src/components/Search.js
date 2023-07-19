import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input className='searchInput' type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
          <img className='searchImg' src='images/roshni.jpg' />
          <div className='userChatInfo'>
            <span>Karuna</span>
          </div>
      </div>
    </div>
  )
}

export default Search;