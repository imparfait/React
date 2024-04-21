import React, { useState } from 'react';
import './styles.css';

function CarList({ cars, deleteCar, editCar }) {
  const [editingCarId, setEditingCarId] = useState(null);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
  });

  const handleEdit = (car) => {
    setEditingCarId(car.id);
    setFormData(car);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    editCar(formData);
    setEditingCarId(null);
    setFormData({
      make: '',
      model: '',
      year: '',
      color: '',
      price: '',
    });
  };

  const handleCancel = () => {
    setEditingCarId(null);
    setFormData({
      make: '',
      model: '',
      year: '',
      color: '',
      price: '',
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Ви впевнені, що хочете видалити цей автомобіль?')) {
      deleteCar(id);
    }
  };

  return (
    <div className="container form-container">
      <h2>Список автомобілів</h2>
      {cars.map(car => (
        <div key={car.id} className="card">
          {editingCarId === car.id ? (
            <div className="form-row">
              <h3>Редагувати інформацію про автомобіль</h3>
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
              <button className="button"  onClick={handleSave}>Зберегти</button>
              <button className="button"  onClick={handleCancel}>Скасувати</button>
            </div>
          ) : (
            <div>
              <h3>{car.make} - {car.model}</h3>
              <p>Рік: {car.year}, Колір: {car.color}, Ціна: ${car.price}</p>
              <button className="button" onClick={() => handleEdit(car)}>Редагувати</button>
              <button className="button" onClick={() => handleDelete(car.id)}>Видалити</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CarList;