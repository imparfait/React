import './App.css';
import './components/styles.css';
import React, { useState, useEffect } from 'react';
import CarList from './components/CarList';
import AddCarForm from './components/AddCarForm';
import FilterCars from './components/FilterCars';

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  
  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('cars')) ||[];
    setCars(storedCars);
    setFilteredCars(storedCars);
  }, []);

  const addCar = (newCar) => {
    const updatedCars = [...cars, newCar];
    setCars(updatedCars);
    setFilteredCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const deleteCar = (id) => {
    const updatedCars = cars.filter(car => car.id !== id);
    setCars(updatedCars);
    setFilteredCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const editCar = (editedCar) => {
    const updatedCars = cars.map(car => (car.id === editedCar.id ? editedCar : car));
    setCars(updatedCars);
    setFilteredCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const filterCars = (filter) => {
    let filtered = [...cars];
    if (filter.make) {
      filtered = filtered.filter(car => car.make.toLowerCase().includes(filter.make.toLowerCase()));
    }
    if (filter.year) {
      filtered = filtered.filter(car => car.year === filter.year);
    }
    if (filter.color) {
      filtered = filtered.filter(car => car.color.toLowerCase().includes(filter.color.toLowerCase()));
    }
    if (filter.volume) {
      filtered = filtered.filter(car => car.volume === filter.volume);
    }
    if (filter.priceFrom) {
      filtered = filtered.filter(car => car.price >= filter.priceFrom);
    }
    if (filter.priceTo) {
      filtered = filtered.filter(car => car.price <= filter.priceTo);
    }
    setFilteredCars(filtered);
  };

  return (
      <div className="App">
        <h1>Автомобільний каталог</h1>
        <AddCarForm addCar={addCar} />
        <FilterCars filterCars={filterCars} />
        <CarList cars={filteredCars} deleteCar={deleteCar} editCar={editCar} />
      </div>
    );
}

export default App;
