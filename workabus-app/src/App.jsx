import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Layout from './pages/Layout';
import UserProfile from './pages/UserProfile';
import AdminPage from './admin/pages/AdminPage';
import SearchBar from './components/SearchBar';
import EmailVerify from './pages/EmailVerify';
import Error from './pages/Error';


function App() {
  const { user, isAuthenticated, error } = useAuth0();
  if (isAuthenticated) {
    console.log(user)
  }
  return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<SearchBar/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/email-verify" element={<EmailVerify/>} />
          <Route path="error" element={<Error/>} />
        </Routes>
      </Layout>
  );
}

export default App;