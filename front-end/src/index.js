// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </ThemeProvider>
);

