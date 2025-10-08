import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';
import { UserProvider } from './contexts/UserContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ThemeProvider>
          <LocaleProvider>
            <App />
          </LocaleProvider>
        </ThemeProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
