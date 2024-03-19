import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState('');
  const [viewMode, setViewMode] = useState('short');

  useEffect(() => {
    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [viewMode]);

  const updateTime = () => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Kiev')
      .then(response => response.json())
      .then(data => {
        const dateTime = new Date(data.utc_datetime);
        const options = {};
        if (viewMode === 'short') {
          options.timeStyle = 'short';
        } else {
          options.timeStyle = 'long';
          options.dateStyle = 'full';
        }
        setTime(dateTime.toLocaleString(undefined, options));
      })
      .catch(error => {
        console.error('Error fetching time:', error);
        setTime('Error fetching time');
      });
  };

  const handleViewModeChange = event => {
    setViewMode(event.target.value);
  };

  return (
    <div className="App">
      <h1>Поточний час</h1>
      <div id="time">{time}</div>
      <label htmlFor="view-mode">Виберіть режим перегляду:</label>
      <select id="view-mode" value={viewMode} onChange={handleViewModeChange}>
        <option value="short">Короткий</option>
        <option value="extended">Розширений</option>
      </select>
    </div>
  );
}


export default App;
