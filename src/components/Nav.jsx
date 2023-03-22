import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';



export default function Nav({onSearch}) {
  return(
    <div>
      <Link to='/about'><button>Home</button></Link>
      <Link to='/home'><button>About</button></Link>
      <SearchBar onSearch={onSearch} />
    </div>
  )
}
