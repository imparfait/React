import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

function AddCarForm({ addCar }) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = {
        id: uuidv4(),
        ...formData,
    };
    addCar(newCar);
    setFormData({
      make: '',
      model: '',
      year: '',
      color: '',
      price: '',
    });
  };

  return (
    <div className="container form-container">
      <h2>Додати автомобіль</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Виробник:
          <input type="text" name="make" value={formData.make} onChange={handleChange} />
        </label>
        <label>
          Модель:
          <input type="text" name="model" value={formData.model} onChange={handleChange} />
        </label>
        <label>
          Рік:
          <input type="text" name="year" value={formData.year} onChange={handleChange} />
        </label>
        <label>
          Колір:
          <input type="text" name="color" value={formData.color} onChange={handleChange} />
        </label>
        <label>
          Ціна:
          <input type="text" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <button className="button"  type="submit">Додати</button>
      </form>
    </div>
  );
}

export default AddCarForm;