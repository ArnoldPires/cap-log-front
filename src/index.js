import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Make sure to also have this file or remove this line if you don't use it
import App from './App'; // This should be your main App component

// Define 'root' by selecting the element with ID 'root'
const root = document.getElementById('root');

// Now, 'root' is defined, and you can call 'createRoot' with it
if (root) {
  const rootContainer = createRoot(root);
  rootContainer.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}