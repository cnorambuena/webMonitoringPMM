import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaDashboard from './vistas/vistaDashboard';
import LogIn from './components/loginDashboard';
import Register from './components/register';
import About from './components/about'
import VistaMetrics from './vistas/vistaMetrics';
import Metrics from './components/metrics';
import Alarms from './components/alarms';
import DetailsAlarm from './components/details';
// import BotonesInicio from './components/botonesInicio';

// Componentes para cada ruta

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<VistaDashboard />}> 
          {/* <Route path=" " element={<BotonesInicio />} /> */}
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>

        <Route path="/metrics" element={<VistaMetrics/>}> 
          <Route index element={<Metrics />} />
          <Route path="alarmas" element={<Alarms />} />
          <Route path="alarmas/detalles-alarma1" element={<DetailsAlarm />} />
          <Route path="alarmas/detalles-alarma2" element={<DetailsAlarm />} />
          <Route path="alarmas/detalles-alarma3" element={<DetailsAlarm />} />
          <Route path="alarmas/detalles-alarma4" element={<DetailsAlarm />} />
          <Route path="alarmas/detalles-alarma5" element={<DetailsAlarm />} />
          <Route path="alarmas/detalles-alarma6" element={<DetailsAlarm />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);