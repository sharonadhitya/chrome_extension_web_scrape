// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './App.css'; // Ensure this is imported to style your app

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Root element with ID 'root' not found!");
} else {
  console.log("Root element found:", rootElement);
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

