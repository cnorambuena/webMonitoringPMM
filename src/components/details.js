import React from 'react';
import { Grid, Box, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import { Link } from "react-router-dom";


export default function DetailsAlarm() {
  // Función para generar el círculo
  function generarCirculo(color, numero) {
    return (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" align="center" color="white">
          {numero}
        </Typography>
      </div>
    );
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={7} justifyContent="center">
        <Box marginTop={0}>
          <Typography variant="h4" align="right" sx={{ color: "black" }}>
            Máximo de profundidad
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5} justifyContent="center">
        <Box marginTop={0} >
          {generarCirculo("red", 4)}
        </Box>
      </Grid>

      <Grid item xs={12} justifyContent="center">
        <Box marginTop={0}>
          <Typography variant="h6" align="center" sx={{ color: "grey" }}>
            Esmeralda Ana
          </Typography>
        </Box>
      </Grid>

      <Grid container spacing={4}>
        <Grid justifyContent="center">
          <Box marginLeft={12} marginTop={8}>
            <TableContainer component={Box} sx={{ backgroundColor: "white", border: "1px solid black", width: "400px" , height: "400px"}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#2074d4", color: "white", width: "100%" }}>
                      <Typography variant="subtitle1" align="center">
                        Fecha infracción: 07/10/2023
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Hora de inicio Inmersión: </span>5:10 Hrs
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Hora de la falta: </span>5:45 Hrs
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Profundidad máxima: </span>46 mts
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        
        <Grid justifyContent="center">
          <Box marginLeft={5} marginTop={8}>
            <TableContainer component={Box} sx={{ backgroundColor: "white", border: "1px solid black", width: "400px" , height: "400px"}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#2074d4", color: "white", width: "100%" }}>
                      <Typography variant="subtitle1" align="center">
                      Fecha infracción: 06/10/2023 - 07/10/23
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Hora de inicio Inmersión: </span>23:10 Hrs
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Hora de la falta: </span>00:09 Hrs
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Profundidad máxima: </span>42 mts
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <Grid justifyContent="center">
          <Box marginLeft={5} marginTop={8}>
            <TableContainer component={Box} sx={{ backgroundColor: "white", border: "1px solid black", width: "400px" , height: "400px"}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#2074d4", color: "white", width: "100%" }}>
                      <Typography variant="subtitle1" align="center">
                      Fecha infracción: 12/10/2023
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Hora de inicio Inmersión: </span>13:35 Hrs
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Hora de la falta: </span>14:10 Hrs
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Profundidad máxima: </span>65 mts
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <Grid justifyContent="center">
          <Box marginRight={6} marginLeft={5} marginTop={8}>
            <TableContainer component={Box} sx={{ backgroundColor: "white", border: "1px solid black", width: "400px" , height: "400px"}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#2074d4", color: "white", width: "100%" }}>
                      <Typography variant="subtitle1" align="center">
                      Fecha infracción: 15/10/2023
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Hora de inicio Inmersión: </span>4:10 Hrs
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Hora de la falta: </span>4:49 Hrs
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1" color="black">
                      <span style={{ fontWeight: "bold" }}>Profundidad máxima: </span>43 mts
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

      </Grid>

      <Grid item container spacing={3}>
          <Grid item xs={6} sx={{ marginLeft: "20px", marginBottom: "20px" }}>
            <Link to="/metrics/alarmas" className="Back-button">
                <IconButton color="inherit" aria-label="Back">
                    <KeyboardBackspaceTwoToneIcon sx={{ color: "#2074d4" }} />
                </IconButton>
            </Link>
          </Grid>
      </Grid>

    </Grid>

  );
}
