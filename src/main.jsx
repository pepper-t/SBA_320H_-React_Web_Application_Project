import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { BrowserRouter, Routes, Route  } from "react-router-dom";
import './index.css'
import App from './App.jsx'

// Wrap the App component with the Router component to enable the router features.
createRoot(document.getElementById("root")).render(
  
  <StrictMode>
     
        <App />
    
  </StrictMode> 
);