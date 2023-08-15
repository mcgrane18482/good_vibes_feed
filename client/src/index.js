import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';


import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // StrictMode renders things twice to help catch errors. We want to turn it back on for deployment, but it's commented out for now so the quotes don't render twice.
    // <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </React.StrictMode>
);