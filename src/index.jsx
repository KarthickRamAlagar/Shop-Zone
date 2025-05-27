import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles.css';
const inter = document.createElement('link');
inter.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
inter.rel = 'stylesheet';
document.head.appendChild(inter);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);