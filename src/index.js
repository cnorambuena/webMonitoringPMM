import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LogIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <header className="App-header">
        <Login />
      </header>
      <Footer />
    </div>
  </React.StrictMode>
);

