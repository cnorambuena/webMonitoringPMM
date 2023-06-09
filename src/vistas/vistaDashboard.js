import React from 'react';
import '../assets/css/vistaDashboard.css';
import Header from '../components/headerDashboard';
import Footer from '../components/footerDashboard';
import Layout from '../components/layout';


const VistaDashboard = () => {
    return(
        <React.StrictMode>
            <div>
            <Header />
            <header className="App-header">
                <Layout />
            </header>
            <Footer />
            </div>
        </React.StrictMode>
    )
}

export default VistaDashboard