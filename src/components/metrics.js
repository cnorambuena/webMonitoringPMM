import React from "react";
import { Box, Grid, IconButton, Select, MenuItem, Typography } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { Alarm } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';

//HAY QUE VER ESTO MÁS BONITO

export default function Dashboard() {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Select
            value=""
            displayEmpty
            fullWidth
            variant="outlined"
          >
            <MenuItem value="">Nombres</MenuItem>
            <MenuItem value="Ernesto Roca">Opción 1</MenuItem>
            <MenuItem value="María Paz">Opción 2</MenuItem>
            <MenuItem value="Camila Norambuena">Opción 3</MenuItem>

            {/* Opciones de nombres */}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <Select
            value=""
            displayEmpty
            fullWidth
            variant="outlined"
          >
            <MenuItem value="">Métricas</MenuItem>
            <MenuItem value="Profundidad">Opción 1</MenuItem>
            <MenuItem value="Nivel de Oxígeno">Opción 2</MenuItem>
            <MenuItem value="Nivel de Descompresión">Opción 3</MenuItem>

          </Select>
        </Grid>
        <Grid item xs={4}>
          <DatePicker
            label="Fecha"
            inputFormat="dd/MM/yyyy"
            renderInput={(params) => <TextField {...params} fullWidth variant="outlined" />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={3}>
          {/* Información general */}
        </Grid>
        <Grid item xs={6}>
          {/* Espacio para la gráfica */}
        </Grid>
        <Grid item xs={3}>
          <IconButton component={Link} to="/alarmas" color="primary" aria-label="Ver alarmas">
            <Alarm />
          </IconButton>
          <Typography variant="body2">Ver alarmas</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
