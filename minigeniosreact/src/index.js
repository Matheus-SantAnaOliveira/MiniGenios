import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import HomePage from './HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <HomePage />
  </>
);
