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
import TestComponent from './pages/TestComponent';
import UserDashboard from './components/userdashboard/UserDashBoard';
import CompanyDashboard from './pages/CompanyDashboard';


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
          <Route exact path="/admin" element={<AdminPage drawer={drawer}/>} />
          <Route exact path="/email-verify" element={<EmailVerify/>} />
          <Route exact path="error" element={<Error/>} />
          <Route exact path="/complete" element={<CompleteProfile/>} />
          <Route exact path="/test" element={<TestComponent/>} />
          <Route exact path="/userdashboard" element={<UserDashboard/>} />
          <Route exact path="/companydashboard" element={<CompanyDashboard/>} />
        </Routes>
      </Layout>
  );
}

export default App;