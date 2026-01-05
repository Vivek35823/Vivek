
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Deploy trigger v4 - images fix
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
    <BrowserRouter basename="/Vivek/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

console.log('App mounted successfully');
