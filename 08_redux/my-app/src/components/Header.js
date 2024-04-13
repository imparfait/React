import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const favoriteEvents = useSelector(state => state.events.favorites);
  
  return (
    <div>
      <h1>Мій Супер Додаток З Подіями</h1>
      <p>Кількість Улюблених Подій: {favoriteEvents.length}</p>
      <nav>
        <Link to="/">Головна</Link>{' '}
        <Link to="/favorites">Улюблені</Link>
      </nav>
    </div>
  );
};
export default Header;