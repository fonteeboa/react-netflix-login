import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import reportWebVitals from './reportWebVitals';
import './assets/styles/css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n/i18next';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

reportWebVitals();
