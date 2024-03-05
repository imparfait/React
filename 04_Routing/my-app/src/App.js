import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Bio from './components/Bio';
import FamousPainting from './components/FamousPainting';
import Paintings from './components/Paintings';

function App() {
  return (
      <Router>
        <header>
          <nav>
            <div className="name">Vincent Willem van Gogh</div>
              <div className='menu'>
                <div className="nav-div nv">
                  <Link className='link' to="/">Home</Link>
                </div>
                <div className="nav-div nv">
                  <Link className='link' to="/bio">Bio</Link>
                </div>
                <div className="nav-div ">
                  <Link className='link' to="/famous_painting">Famous painting</Link>
                </div>
                <div className="nav-div nv">
                  <Link className='link' to="/paintings">Paintings</Link>
                </div>
            </div>
          </nav>
        </header>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/famous_painting" element={<FamousPainting />} />
            <Route path="/paintings" element={<Paintings />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;