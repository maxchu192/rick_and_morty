import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';



export default function Nav({onSearch}) {
  return(
    <div>
      <Link to='/about'>About</Link>
      <Link to='/home'>Home</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  )
}
