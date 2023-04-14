import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'; 

export default function Detail() {
    const { id } = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

  return (
    <div>
        <h2>Details</h2>
        <h3>{character.name}</h3>
        <h3>{character.status}</h3>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.origin}</h3>
        <img src={character.image} alt={character.name} />
        <Link to='/home'>
        <button>Home</button>
        </Link>
    </div>
  )
}
