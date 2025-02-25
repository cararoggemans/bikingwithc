import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import './styles/global.scss';
import App from './App';
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
