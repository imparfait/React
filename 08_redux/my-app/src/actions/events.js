export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = event => ({
  type: ADD_TO_FAVORITES,
  payload: event
});

export const removeFromFavorites = event => ({
  type: REMOVE_FROM_FAVORITES,
  payload: event
});