import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css';


export default function Nav({onSearch, logout}) {
  return(
    <div className='nav'>
      <Link to='/home'><button>Home</button></Link>
      <Link to='/about'><button>About</button></Link>
      <Link to='/favorites'><button>Favorites</button></Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={logout}>Log Out</button>
    </div>
  )
}
