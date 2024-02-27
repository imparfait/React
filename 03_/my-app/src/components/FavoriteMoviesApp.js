import React from 'react';
import Movie from './Movie';

function FavoriteMoviesApp() {
  const movies = [
    {
        title: 'Форрест Гамп',
        director: 'Роберт Земекіс',
        year: 1994,
        studio: 'Paramount Pictures',
        poster: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg'
    },
      {
        title: 'Інтерстеллар',
        director: 'Крістофер Нолан',
        year: 2014,
        studio: 'Paramount Pictures',
        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
      },
      {
        title: 'Матриця',
        director: 'Вачовскі',
        year: 1999,
        studio: 'Warner Bros.',
        poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'
      }
  ];

  return (
    <div className="favorite-movies">
      <h1>Мої улюблені фільми</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.title}
            director={movie.director}
            year={movie.year}
            studio={movie.studio}
            poster={movie.poster}
          />
        ))}
      </div>
    </div>
  );

}

export default FavoriteMoviesApp;