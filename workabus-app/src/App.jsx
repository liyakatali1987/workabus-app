import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Layout from './pages/Layout';
import UserProfile from './pages/UserProfile';
import AdminPage from './admin/pages/AdminPage';
import SearchBar from './components/SearchBar';
import EmailVerify from './pages/EmailVerify';
import Error from './pages/Error';
import CompleteProfile from './pages/RegisterUser';
import RegisterUser from './pages/RegisterUser';
import RegisterCompany from './pages/RegisterCompany';

import { atom } from 'jotai';

function App() {
  const drawer = atom(false);
  return (
      <Layout drawer={drawer}>
        <Routes>
          <Route exact path="/" element={<SearchBar/>} />
          <Route exact path="/profile">
            <Route exact path="/profile" element={<UserProfile/>}/>
            <Route exact path="/profile/worker" element={<RegisterUser/>} />
            <Route exact path="/profile/company" element={<RegisterCompany/>} />
          </Route>
          <Route path="/admin" element={<AdminPage drawer={drawer}/>} />
          <Route path="/email-verify" element={<EmailVerify/>} />
          <Route path="error" element={<Error/>} />
          <Route path="/complete" element={<CompleteProfile/>} />
        </Routes>
      </Layout>
  );
}

export default App;