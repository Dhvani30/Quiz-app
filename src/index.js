import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '../src/components/pages/home/home.css';
import '../src/components/pages/play/play.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


