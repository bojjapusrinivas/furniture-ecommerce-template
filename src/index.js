import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <ToastContainer
     theme="dark"
    position="top-right"
    autoClose={2000}
    pauseOnHover={false}
    />



    <App />
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
