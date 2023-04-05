import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
// const AUTH_CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID;
// const REACT_APP_AUTH_CLIENT_SECRET = process.env.REACT_APP_AUTH_CLIENT_SECRET;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="{AUTH_DOMAIN}"
        clientId="{REACT_APP_AUTH_CLIENT_ID"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>

    </Router>
  </React.StrictMode>
);