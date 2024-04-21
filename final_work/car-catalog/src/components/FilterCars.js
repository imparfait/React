import React, { useState } from 'react';
import './styles.css';

function FilterCars({ filterCars }) {
  const [filter, setFilter] = useState({
    make: '',
    year: '',
    color: '',
    priceFrom: '',
    priceTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterCars(filter);
  };

  return (
    <div className="container filter-container">
      <h2>Фільтр автомобілів</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Виробник:
          <input type="text" name="make" value={filter.make} onChange={handleChange} />
        </label>
        <label>
          Рік:
          <input type="text" name="year" value={filter.year} onChange={handleChange} />
        </label>
        <label>
          Колір:
          <input type="text" name="color" value={filter.color} onChange={handleChange} />
        </label>
        <label>
          Ціна від:
          <input type="text" name="priceFrom" value={filter.priceFrom} onChange={handleChange} />
        </label>
        <label>
          Ціна до:
          <input type="text" name="priceTo" value={filter.priceTo} onChange={handleChange} />
        </label>
        <button className="filter-button" type="submit">Застосувати фільтр</button>
      </form>
    </div>
  );
}

export default FilterCars;
