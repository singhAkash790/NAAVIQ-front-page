import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Component/Navbar';
import Destinationbar from './Component/Destinationbar';
import MainPannel from './Component/MainPannel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
        <Navbar/>
        <Destinationbar/>
        <MainPannel/>

  </React.StrictMode>
);
