import React from 'react';
import ReactDOM from 'react-dom/client';
import '../assets/css/index.css';
import Header from './Header';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <header className="App-header">
        
      </header>
      <Footer />
    </div>
  </React.StrictMode>
);
