import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import 'aos/dist/aos.css';
import './css/style.css';
import AOS from 'aos';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';


function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);

  const { error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;