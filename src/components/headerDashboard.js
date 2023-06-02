import * as React from "react";
import logo from '../assets/images/aquarov.png';
import mlogo from '../assets/images/monitoring.png';
import { Link } from "react-router-dom";
 

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
  
export default function Header() {
  return (
      <AppBar position="static" className="Header">
      <Toolbar>
        <Link to="/login" className="Monitor-logo-link">
          <img src={mlogo} className="Monitor-logo" alt="mlogo" />
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Data Monitoring
        </Typography>
        <img src={logo} className="App-logo" alt="logo" />
      </Toolbar>
    </AppBar>
  );
}