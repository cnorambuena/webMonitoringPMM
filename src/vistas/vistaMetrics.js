import React from 'react';
import '../assets/css/vistaMetrics.css';
import Header from '../components/headerMetrics';
import Layout from '../components/layout';

const VistaMetrics = () => {
    return(
        <React.StrictMode>
            <div>
            <Header />
            <header className="App-header-metrics">
                <Layout />
            </header>
            </div>
        </React.StrictMode>
    )
}

export default VistaMetrics