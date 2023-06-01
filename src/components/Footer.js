
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LoginIcon from '@mui/icons-material/Login';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
  
export default function Footer () {
  
    return (
        <div className="Footer" style={{ textAlign: "left", marginTop: "1px" }}>
            <BottomNavigation>
                <BottomNavigationAction label="LogIn" 
                    icon={<LoginIcon />} />
                <BottomNavigationAction label="Soporte técnico" 
                    icon={<HelpCenterIcon />} />
            </BottomNavigation>
        </div>
    );
};