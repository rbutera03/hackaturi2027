// src/index.jsx
// Entry point: mounts <App /> into index.html. Global styles are imported by App.jsx.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
