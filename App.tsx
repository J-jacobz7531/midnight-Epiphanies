
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OurHistory from './components/OurHistory';
import News from './components/News';
import Impact from './components/Impact';
import Investments from './components/Investments';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div className="bg-ig-dark-gray font-sans text-ig-off-white antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-history" element={<OurHistory />} />
          <Route path="/news" element={<News />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
