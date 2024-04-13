import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = ({ events }) => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));
  
  if (!event) return <div>Подія не знайдена</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetail;