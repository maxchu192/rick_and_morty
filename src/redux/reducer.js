import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from './actions/types.js';

const initialState = {
    data: [],
    myFavorites: [],
    myFavoritesOrigin: []
}

export default function rootReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [ ...state.myFavoritesOrigin, payload],
                myFavoritesOrigin: [ ...state.myFavoritesOrigin, payload],
            };
        case REMOVE_FAV:
            const newFav = state.myFavoritesOrigin.filter((ch) => ch.id !== payload);
            return {
                ...state,
                myFavorites: newFav,
                myFavoritesOrigin: newFav,
            };
        case FILTER:
            const newFilter = state.myFavoritesOrigin.filter((ch) => ch.gender === payload);
            return {
                ...state,
                myFavorites : newFilter,
            };
        case ORDER:
            const newOrder = state.myFavoritesOrigin.sort((a, b) => {
                if (a.id > b.id) {
                    return 'Ascendente' === payload ? 1 : -1;
                }
                if (a.id < b.id) {
                    return 'Descendente' === payload ? 1 : -1;
                }
                return 0;
            });
            return {
                ...state,
                myFavorites: newOrder,
            }
        case RESET:
            return {
                ...state,
                myFavorites: [ ...state.myFavoritesOrigin],
            };    
        default:
            return state;
    }
}