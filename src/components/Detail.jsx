import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'; 

export default function Detail() {
    const { id } = useParams
    console.log(id)
    const {character, setCharacter} = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
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
        <button>
            <Link to='/home'>Home</Link>
        </button>
        <h3>{character?.name}</h3>
        <p>{character?.status}</p>
        <p>{character?.species}</p>
        <p>{character?.gender}</p>
        <p>{character?.origin?.name}</p>
        <img src={character?.image} alt={character?.name} />
    </div>
  )
}
