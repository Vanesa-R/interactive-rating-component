import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/lang/i18n-setting";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
