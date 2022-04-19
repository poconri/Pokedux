import { SET_POKEMONS } from "../actions/type";

const initialState = {
    list: [],
    listB: [],
    error: '',
    loading: false,
    FPstatus: false,
    noFav: false
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        list: action.payload,
        listB: action.payload,
      };
      case "SET_FAVORITE":
        return {
          ...state,
          list: state.list.map(pokemon =>
            pokemon.id === action.payload.id ? { ...pokemon, isFavorite: !pokemon.isFavorite } : pokemon),
          listB: state.listB.map(pokemon =>
            pokemon.id === action.payload.id ? { ...pokemon, isFavorite: !pokemon.isFavorite } : pokemon)
          };

      case "SEARCH":
          let filteredPokemons = [...state.listB];
          filteredPokemons = filteredPokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(action.payload.toLowerCase()));
          return {
            ...state,
            list: filteredPokemons,
          };
        
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.message
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: ''
      };
    case "TOGGLE_LOADER":
      return {
        ...state,
        loading: !state.loading
      };
    case "FAVORITE_POKEMON":
      let newList = [...state.listB];
      if(action.payload === false){
      return {
        ...state,
        list: newList.filter(pokemon => !!pokemon.isFavorite),
        listB: state.listB,
        FPstatus: !state.FPstatus,
        noFav: (newList.filter(pokemon => !!pokemon.isFavorite).length === 0 ) ? true : false
      };
    } else {
      return {
        ...state,
        list: newList,
        listB: state.listB,
        FPstatus: !state.FPstatus,
        noFav: false
      };
    }
    default:
      return state;
  }
};

export default pokemonReducer;