import React , {useState, useEffect} from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { Box, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { AccountCircle } from "@mui/icons-material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from "recharts";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

//GET con AXIOS para obtener la data desde endpoint
  export default function Dashboard(){
    const [data, setData] = useState([]);
    const [buzos, setBuzos] = useState([]);

    useEffect(()=>{
      axios.get('http://192.168.1.120:9999/inmersion/13738560?metric=prof')
        .then((response)=>{
            setData(response.data);
      })
      .catch((error)=>{
        console.error('Error de solicitud', error);
      });
    },[]);

    useEffect(()=>{
      axios.get('http://192.168.1.120:9999/inmersion/13738560?metric=prof')
        .then((response)=>{
            setBuzos(response.buzos);
      })
      .catch((error)=>{
        console.error('Error de solicitud', error);
      });
    },[]);

  return (

    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box marginTop={0} marginLeft={2} sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Nombres
            </InputLabel>
            <NativeSelect
              defaultValue={10}
              inputProps={{
                name: 'names',
                id: 'uncontrolled-native',
              }}
            >
              <option valueName={10}>Ernesto</option>
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
                defaultValue={10}
                inputProps={{
                  name: 'metrics',
                  id: 'uncontrolled-native',
                }}
              >
                <option valueMetrics={10}>Presión</option>
                <option valueMetrics={20}>Profundidad</option>
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
                defaultValue={10}
                inputProps={{
                  name: 'period',
                  id: 'uncontrolled-native',
                }}
              >
                <option valuePeriod={10}>Últimos 3 días</option>
                <option valuePeriod={20}>Últimos 5 días</option>
                <option valuePeriod={30}>Últimos 7 días</option>
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
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="prof" stroke="#8884d8" />
              <Area type="monotone" dataKey="prof" fill="#8884d8" fillOpacity={0.9} />
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
      <Grid item xs={12}>
        {buzos && buzos.length > 0 ? (
          <div>
            <Typography variant="h4" sx={{ color: "black" }}>
              DATA - Mayor que 0
            </Typography>
          </div>
        ) : (
          <Typography variant="h6" sx={{ color: "black" }}>
            DATA - 0
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {buzos && buzos.length > 0 ? (
          <div>
            <Typography variant="h4" sx={{ color: "black" }}>
              Listado de Buzos:
            </Typography>
            <ul>
              {buzos.map((buzo, id) => (
                <li key={id}>{buzo.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <Typography variant="h6" sx={{ color: "black" }}>
            No hay buzos disponibles.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

