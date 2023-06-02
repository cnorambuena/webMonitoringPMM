import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/aquarov.png';
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from '@mui/icons-material/Lock';

export default function Header() {
  return (
    <AppBar position="static" className="Header">
      <Toolbar>
        <img src={logo} className="logo" alt="logo" style={{ maxWidth: "150px" }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Link to="/metrics" className="Home-button">
          <IconButton color="inherit" aria-label="Home">
            <HomeIcon sx={{ color: "white" }} />
          </IconButton>
        </Link>
        <Link to="/login" className="logout-button">
          <IconButton color="inherit" aria-label="Logout">
            <LockIcon sx={{ color: "white" }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
