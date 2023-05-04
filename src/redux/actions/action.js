import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, ADD_CHARACTERS, REMOVE_CHARACTER, NEXT_PAGE, PREV_PAGE, SEARCH_CHARACTER, HANDLE_NUMBER, RESET_CHARACTER, ADD_FAVORITES, ID } from './types';
import axios from 'axios';

export function id(id) {
  return {
    type: ID,
    payload: id,
  }
}

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function handleNumber(num) {
  return {
    type: HANDLE_NUMBER,
    payload: num
  };
}

export function addCharacters(characters) {
  return {
    type: ADD_CHARACTERS,
    payload: characters,
  };
}

export function searchCharacter(character) {
  return {
    type: SEARCH_CHARACTER,
    payload: character,
  };
}

export function removeCharacter(id) {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
}

export function resetCharacters() {
  return {
    type: RESET_CHARACTER,
  };
}

export function addFavorites(obj) {
  let aux = obj.maps(ch => {
    let char = {
      id: ch.id,
      status: ch.status,
      name: ch.name,
      species: ch.species,
      origin: ch.origin,
      image: ch.image,
      gender: ch.gender
    }
    return char
  })

  return {
    type: ADD_FAVORITES,
    payload: aux,
  };
}

export function addFav(id, idU) {
  axios.post(`http://localhost:3001/rickandmorty/favorites/${id}`, {id: idU})
  return {
    type: ADD_FAV,
    payload: id,
  };
}

export function removeFav(obj) {
  axios.delete(`http://localhost:3001/rickandmorty/favorites/`, {data: obj})
  return {
    type: REMOVE_FAV,
    payload: obj.idC,
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}