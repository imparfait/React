import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites } from '../actions/events'; 

const EventList = ({ events }) => {
  const favoriteEvents = useSelector(state => state.events.favorites);
  const dispatch = useDispatch();

  const handleAddToFavorites = event => {
    dispatch(addToFavorites(event));
  };

  // Перевіряємо, чи передані дані про події
  if (!events || events.length === 0) {
    return <div>Список подій пустий.</div>;
  }

  return (
    <div className="event-list">
      <h2>Список Подій</h2>
      {events.map(event => (
        <div className="event-card" key={event.id}>
          <h3>
            <Link to={`/event/${event.id}`}>{event.title}</Link>
            {!favoriteEvents.find(favEvent => favEvent.id === event.id) ? (
              <button onClick={() => handleAddToFavorites(event)}>Додати до улюблених</button>
            ) : (
              <button disabled>Уже улюблене</button>
            )}
          </h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;