import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../actions/events';
import { Link } from 'react-router-dom'; 

const Favorites = () => {
  const favoriteEvents = useSelector(state => state.events.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = event => {
    dispatch(removeFromFavorites(event));
  };

  return (
    <div className="favorites">
      <h2>Улюблені Події</h2>
      {favoriteEvents.length > 0 ? (
        favoriteEvents.map(event => (
        <div className="favorite-event" key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <button onClick={() => handleRemoveFromFavorites(event)}>Видалити з улюблених</button>
        </div>
      ))
      ) : (
        <p>У вас ще немає улюблених подій. Перейдіть на сторінку <Link to="/">Головна</Link>, щоб додати події до улюблених.</p>
      )}
    </div>
  );
};

export default Favorites;