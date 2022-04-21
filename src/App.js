import React from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Offer from './components/Offer/Offer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Home />
      <About />
      <Menu />
      <Offer />
      <Reviews />
      <Gallery />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
