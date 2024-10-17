import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <footer>
      <a href="https://twitter.com/MonkeyBizzCS" target="_blank" rel="noreferrer">
         <i className="fab fa-twitter"></i>
      </a>
    </footer>
  </React.StrictMode>
);
