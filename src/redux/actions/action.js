import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, ADD_CHARACTERS, REMOVE_CHARACTER, NEXT_PAGE, PREV_PAGE, SEARCH_CHARACTER, HANDLE_NUMBER, RESET_CHARACTER } from './types';

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

export function addFav (character) {
    return {
        type: ADD_FAV,
        payload: character,
    };
}

export function removeFav (id) {
    return {
        type: REMOVE_FAV,
        payload: id,
    };
}

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