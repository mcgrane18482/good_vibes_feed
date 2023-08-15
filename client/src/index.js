import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import dotenv from "dotenv";

import { BrowserRouter } from 'react-router-dom';

dotenv.config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);