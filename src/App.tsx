import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'app/pages/Home';
import About from 'app/pages/About';
import Test from 'app/pages/Test';
import Nopage from 'app/pages/Nopage';
import ScrollToTop from 'app/components/explore/ScrollToTop';
import Explore from 'app/pages/Explore';
import Investor from 'app/pages/Investor';
import SignUp from 'app/pages/SignUp';
import LoginForm from 'app/components/login/Login';
import Dashboard from 'app/pages/dashboard/Dashboard';
import PersistLogin from 'app/components/auth/PersistLogin';
import RequireAuth from 'app/components/auth/RequireAuth';
import CreateProject from './app/pages/dashboard/CreateProjectPage';
import SingleProjectPage from 'app/pages/dashboard/SingleProjectPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/investors" element={<Investor />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Nopage />} />

          {/* PROTECTED ROUTES */}
          {/* <Route element={<PersistLogin />}> */}
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/create-project"
              element={<CreateProject />}
            />
            <Route path="/dashboard/project" element={<SingleProjectPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
