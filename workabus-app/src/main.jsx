import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "jotai";
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        cacheLocation={'localstorage'}
        domain={AUTH_DOMAIN}
        clientId={AUTH_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Provider>
          <App />
        </Provider>

      </Auth0Provider>

    </Router>
  </React.StrictMode>
);