import React from "react";
import { Grid } from "@mui/material";
import { Box, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { AccountCircle } from "@mui/icons-material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from "recharts";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const data = [
  { month: "Lu", values: 500 },
  { month: "Ma", values: 800 },
  { month: "Mi", values: 1200 },
  { month: "Ju", values: 1000 },
  { month: "Vi", values: 1500 },
  { month: "Sa", values: 1300 },
  { month: "Do", values: 1800 },
];

export default function Dashboard() {
  return (

    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box marginTop={0} marginLeft={2} sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Nombres
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: 'names',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>Ernesto</option>
              <option value={20}>María</option>
              <option value={30}>Camila</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box marginTop={0} sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Métrica
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'names',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>Descompresión</option>
                <option value={20}>Nivel de nitrógeno</option>
                <option value={30}>Profundidad</option>
              </NativeSelect>
            </FormControl>
          </Box>
      </Grid>

      <Grid item xs={4}>
        <Box marginTop={0} marginRight={2} sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Período
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'names',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>Último Año</option>
                <option value={20}>Último Mes</option>
                <option value={30}>Última Semana</option>
              </NativeSelect>
            </FormControl>
          </Box>
      </Grid>

      <Grid item xs={3}>
        <Box 
          marginLeft={2}
          marginTop={6}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#2074d4",
            borderRadius: "20px",
            padding: "12px",
          }}
        >
          <AccountCircle sx={{ fontSize: 30, marginRight: "10px", color: "white" }} />
          <Typography variant="h6" sx={{ color: "white" }}>
            Datos Históricos del Usuario
          </Typography>
        </Box>
        
        <Box marginLeft={5} marginTop={6}>
          <Typography variant="h6" sx={{ color: "black" }}>
            Jornadas de buceo : 
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            Faltas por periodo de quema :
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            Buceo Yoyo:
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            Más información historica ...
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={9}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={8} md={6}>
            <LineChart width={1000} height={600} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="values" stroke="#8884d8" />
              <Area type="monotone" dataKey="values" fill="#8884d8" fillOpacity={0.9} />
            </LineChart>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} sx={{ marginLeft: "auto", marginBottom: "20px" }}>
        <Link to="/metrics/alarmas" className="alarms-button">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderColor: "#2074d4", color: "#2074d4", backgroundColor: "white" }}
          >
            Ver Alarmas
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

