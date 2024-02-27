import React from 'react';

function Movie({ title, director, year, studio, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p><strong>Режисер:</strong> {director}</p>
      <p><strong>Рік випуску:</strong> {year}</p>
      <p><strong>Кіностудія:</strong> {studio}</p>
    </div>
  );
}

export default Movie;