import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import aquarovImage from '../assets/images/aquarov-image.png';


export default function SquareCard() {
  return (

    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={1200}
      height={800}
      borderRadius={20}
      bgcolor="#2074d4" // Color de fondo actualizado
      color="primary.contrastText"
      p={2}
    >

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >

        <img src={aquarovImage} className="aquarovImage" alt="aquarovImage" style={{ maxWidth: "250px" }} />

        <Typography variant="body1" sx={{ marginBottom: 2 , marginTop: 4}}>
          AQUAROV LTDA. Es una empresa con profundos conocimientos servicios y venta de Tecnología Marina subacuática, 
          siendo su especialidad vehículos “manipulados remotamente a distancia (ROV) y Orugas Submarinos o Terrestres.”.
        </Typography>

        <Typography variant="body1"sx={{ marginBottom: 2 }}>
          AQUAROV Monitoring es una solucion especializada en el monitoreo post-opreaciones para tener un control general
          de los buceadores, sus datos, inmersiones, e incluso informar si en alguna fecha se realizaron acciones no 
          permitidas según el máximo permitido según el trabajo realizado.
        </Typography>

        <Typography variant="body1"sx={{ marginBottom: 0 }}>
          CONTACTO:
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 0, display: "flex", alignItems: "center" }}>
          <LocationOnIcon sx={{ fontSize: 30, color: "white", marginRight: "10px" }} /> Los Musicos s/n, Valle Volcanes, Puerto Montt, Chile
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 0, display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ fontSize: 30, color: "white", marginRight: "10px" }} /> (+56) 9 9219 3134
        </Typography>
        <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
          <EmailIcon sx={{ fontSize: 30, color: "white", marginRight: "10px" }} /> info@aquarov.cl
        </Typography>
        
      </Box>
    </Box>
  );
}
