
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LoginIcon from '@mui/icons-material/Login';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { useNavigate  } from "react-router-dom";


export default function Footer() {
    const navigate = useNavigate ();

    const handleLoginClick = () => {
        // Redirigir a la ruta /register
        navigate('/register');
      };

    const handleHelpCenterClick = () => {
        // Redirigir a la ruta /about
        navigate('/about');
    };
  
    return (
        <div className="Footer" style={{ textAlign: "left", marginTop: "1px" }}>
            <BottomNavigation>
                <BottomNavigationAction label="LogIn" 
                    icon={<LoginIcon />} 
                    onClick={handleLoginClick}
                />
                <BottomNavigationAction label="Soporte técnico" 
                    icon={<HelpCenterIcon />} 
                    onClick={handleHelpCenterClick}
                />
            </BottomNavigation>
        </div>
    );
};