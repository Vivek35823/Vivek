
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

console.log('App starting...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element not found!");
  throw new Error("Could not find root element to mount to");
}

console.log('Root element found, mounting app...');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

console.log('App mounted successfully');
