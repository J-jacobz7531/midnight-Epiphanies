
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OurHistory from './components/OurHistory';

function App() {
  return (
    <Router>
      <div className="bg-ig-dark-gray font-sans text-ig-off-white antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-history" element={<OurHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
