import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Workers from './pages/Workers';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/workers">Workers</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;