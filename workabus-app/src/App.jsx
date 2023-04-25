import React, { useState } from 'react';
import { Routes , Route } from 'react-router-dom';
import Layout from './pages/Layout';
import UserProfile from './pages/UserProfile';
import AdminPage from './admin/pages/AdminPage';
import SearchBar from './components/SearchBar';
import EmailVerify from './pages/EmailVerify';
import { atom } from 'jotai';


function App() {
  const drawer = atom(false);
  return (
      <Layout drawer={drawer}>
        <Routes>
          <Route exact path="/" element={<SearchBar/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/admin" element={<AdminPage drawer={drawer}/>} />
          <Route path="/email-verify" element={<EmailVerify/>} />
        </Routes>
      </Layout>
  );
}

export default App;