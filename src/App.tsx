import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Button } from '@chakra-ui/react';
import Home from 'app/pages/Home';
import About from 'app/pages/About';
import Test from 'app/pages/Test';
import Nopage from 'app/pages/Nopage';
import ScrollToTop from 'app/components/explore/ScrollToTop';
import Explore from 'app/pages/Explore';
import BecomeInvestor from 'app/components/landing-page/BecomeInvestor';
import Investor from 'app/pages/Investor';
import Login from 'app/pages/Login';
import SignUp from 'app/pages/SignUp';
import LoginForm from 'app/components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/invest" element={<Investor />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
