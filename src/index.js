import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
