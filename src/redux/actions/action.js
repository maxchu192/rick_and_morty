import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, ADD_CHARACTERS, REMOVE_CHARACTER, NEXT_PAGE, PREV_PAGE, SEARCH_CHARACTER, HANDLE_NUMBER, RESET_CHARACTER } from './types';
//import axios from 'axios';

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

export function addFav (id) {
  return {
    type: ADD_FAV,
    payload: id,
  };
}
// (character) {
//     return async function(dispatch){
//       try {
//         const {data}=await axios.post('http://localhost:3001/rickandmorty/favorites', character)
//         console.log(data)
//         return dispatch({
//           type: ADD_FAV,
//           payload: data,
//         })
//       } catch (error) {
//         console.log('addfav not found', error)
//       }      
//     }
// }

export function removeFav (id) {
  return {
    type: ADD_FAV,
    payload: id,
  };
}
// (id) {
//   return async function(dispatch){
//     try {
//       const {data}=await axios.delete(`http://localhost:3001/rickandmorty/favorites/${id}`)
//       return dispatch({
//         type: REMOVE_FAV,
//         payload: data,
//       })
//     } catch (error) {
//       console.log('removefav not found', error)
//     }      
//   }
// }

export function filterCards (gender) {
    return {
        type: FILTER,
        payload: gender,
    };
}

export function orderCards (order) {
    return {
        type: ORDER,
        payload: order,
    };
}

export function reset () {
    return {
        type: RESET,
    };
}