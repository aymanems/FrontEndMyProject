import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import 'boxicons/css/boxicons.min.css';
// import { AuthProvider } from './privateRoute/AuthProvider';
import App from './App';
import Nav from './layout/nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <App/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
