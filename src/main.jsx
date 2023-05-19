import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from "jotai";
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;
const AUDIENCE = import.meta.env.VITE_API_AUDIENCE;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <React.Fragment> */}
    <Auth0Provider
      cacheLocation={'localstorage'}
      domain={AUTH_DOMAIN}
      clientId={AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        ...(AUDIENCE ? { audience: AUDIENCE } : null),
      }}
    >

      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>

    </Auth0Provider>
   </React.StrictMode>
  // </React.Fragment>
);