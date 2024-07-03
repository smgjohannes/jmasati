import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import FeaturedCars from './pages/FeaturedCars';
import NewCars from './pages/NewCars';
import Brand from './pages/Brand';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/featured-cars' component={FeaturedCars} />
        <Route path='/new-cars' component={NewCars} />
        <Route path='/brand' component={Brand} />
        <Route path='/contact' component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
