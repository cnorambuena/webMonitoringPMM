import * as React from "react";
import logo from '../assets/images/aquarov.png';
import mlogo from '../assets/images/monitoring.png';
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
  
export default function Header() {
  return (
      <AppBar position="static" className="Header">
        <Toolbar>
          <img src={mlogo} className="Monitor-logo" alt="mlogo" />
            Data Monitoring
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <img src={logo} className="App-logo" alt="logo" />
        </Toolbar>
      </AppBar>
  );
}