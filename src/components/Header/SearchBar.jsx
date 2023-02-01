import React from 'react'
import './SearchBar.css'
export const SearchBar = () => {
  return (
    <div>
        <input className='search' type="text" placeholder='search here'/>
        <button>search</button>
    </div>
  )
}
