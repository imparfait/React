import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import Favorites from './components/Favorites';
import { events } from './components/data';


const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Routes>
      <Route path="/" element={<EventList events={events} />} />
        <Route path="/event/:id" element={<EventDetail events={events}  />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  </Router>
);

export default App;