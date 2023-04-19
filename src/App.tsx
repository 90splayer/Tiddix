import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Button } from '@chakra-ui/react';
import Home from './pages/Home';
import About from './pages/About';
import Nopage from './pages/Nopage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
