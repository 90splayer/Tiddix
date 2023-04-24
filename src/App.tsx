import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Button } from '@chakra-ui/react';
import Home from 'app/pages/Home';
import About from 'app/pages/About';
import Nopage from 'app/pages/Nopage';
import ScrollToTop from 'app/components/explore/ScrollToTop';

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
