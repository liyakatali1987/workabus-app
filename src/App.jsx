import React from 'react';
import {
  Outlet,
  Routes,
  Route
} from 'react-router-dom';
import './css/style.css';
import LayoutPage from './pages/Layout';
import UserProfile from './pages/UserProfile';
import AdminPage from './admin/pages/AdminPage';
import Header from './partials/Header';
import Footer from './partials/Footer';
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function App() {
  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6"> 
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<LayoutPage/>}/>
          <Route exact path="/profile" element={<UserProfile />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Route>   
      </Routes>  
      </div>
  );
}

export default App;