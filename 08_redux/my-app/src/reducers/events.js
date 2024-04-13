import { combineReducers } from 'redux';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/events.js';

const initialState = {
  favorites: []
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(event => event.id !== action.payload.id)
      };
    default:
      return state;
  }
};
  
const rootReducer = combineReducers({
    events: eventReducer
});
console.log("root reducer");
export default rootReducer;