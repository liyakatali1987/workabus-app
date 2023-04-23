import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Outlet,
  Routes,
  Route
} from 'react-router-dom';

import LayoutPage from './pages/Layout';
// import UserProfile from './pages/UserProfile';
import AdminPage from './admin/pages/AdminPage';
import Header from './partials/Header';
import Footer from './partials/Footer';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5"
    }
  },
});


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<LayoutPage />} />
          {/* <Route exact path="/profile" element={<UserProfile />} /> */}
          <Route exact path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;