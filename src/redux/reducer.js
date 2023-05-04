import { ID, ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, ADD_CHARACTERS, REMOVE_CHARACTER, NEXT_PAGE, PREV_PAGE, SEARCH_CHARACTER, ADD_FAVORITES} from './actions/types.js';

const initialState = {
    idU: 0,
    numPage: 1,
    characters: [],
    myFavorites: [],
    myFavoritesOrigin: []
}

export default function rootReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ID:
            return {
                ...state,
                idU: payload,
            }
        case SEARCH_CHARACTER:
            return {
                ...state,
                characters: [...state.characters, payload],
            };
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1,
            };
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1,
            };
        case ADD_CHARACTERS:
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    characters: [...payload],
                };
            }
            break;
        case REMOVE_CHARACTER:
            const newCharacter = state.myFavoritesOrigin.filter(
                (ch) => ch.id !== payload
            );
            return {
                ...state,
                myFavorites: newCharacter,
                myFavoritesOrigin: newCharacter,
            };
        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites: payload,
                myFavoritesOrigin: payload,
                characters: payload
            }
        case ADD_FAV:
            const newFav = state.characters.filter(c=>c.id === payload)
            return {
                ...state,
                myFavorites: [...state.myFavorites, ...newFav],
                myFavoritesOrigin: [...state.myFavoritesOrigin, ...newFav],
            };
        case REMOVE_FAV:
            const newFav1 = state.myFavorites.filter(c=>c.id !== payload) 
            return {
                ...state,
                myFavorites: newFav1,
                myFavoritesOrigin: newFav1,
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