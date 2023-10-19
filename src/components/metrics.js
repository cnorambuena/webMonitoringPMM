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
export default function Dashboard() {
  const [dataGraph, setData] = useState([]);
  const [buzos, setBuzos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id_buzo, setIdBuzo] = useState("1256902250");
  const [metricName, setMetric] = useState("prof");
  const [periodDate, setPeriod] = useState("0");
  const [infoBuzos, setInfoBuzos] = useState([]);

  useEffect(() => {
    // Realizamos ambas solicitudes simultáneamente
    Promise.all([
      axios.get(`http://192.168.1.106:9999/inmersion/${id_buzo}?metric=${metricName}&days=${periodDate}`), // Usamos la variable id_buzo
      axios.get('http://192.168.1.106:9999/buzos/?all=True'),
      axios.get(`http://192.168.1.106:9999/buzos/?buzo_id=${id_buzo}`),
    ])
      .then((responses) => {
        setData(responses[0].data);
        setBuzos(responses[1].data);
        setInfoBuzos(responses[2].data);
      })
      .catch((error) => {
        console.error('Error de solicitud', error);
      })
      .finally(() => {
        setLoading(false); // Marcar que hemos terminado de cargar los datos
      });
  }, [id_buzo, metricName, periodDate]);

  const handleBuzoChange = (event) => {
    setIdBuzo(event.target.value); // Actualizamos id_buzo cuando cambia la selección
  };

  const handleMetricChange = (event) =>{
    setMetric(event.target.value); // Actualizacion de metrica
  }

  const handlePeriodChange = (event) =>{
    setPeriod(event.target.value); // Actualizacion de rango de fechas para grafica
  }

  if (loading) {
    return <div>Cargando...</div>; // Muestra un indicador de carga mientras esperamos los datos.
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box marginTop={0} marginLeft={2} sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Nombres
            </InputLabel>
            <NativeSelect
              value={id_buzo} // Usamos el valor de id_buzo
              onChange={handleBuzoChange} // Manejador de cambio de selección
              inputProps={{
                name: 'names',
                id: 'uncontrolled-native',
              }}
            >
              {buzos.map((buzo)=>(
                <option key={buzo._id_buzo} value={buzo._id_buzo}>
                  {buzo.name_buzo}
                </option>
              ))}
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
                value={metricName}
                onChange={handleMetricChange} //Manejador de cambio de selección de metrica
                inputProps={{
                  name: 'metrics',
                  id: 'uncontrolled-native',
                }}
              >
                <option key={"prof"} value={"prof"}>Profundidad</option>
                <option key={"presion"} value={"presion"}>Presión</option>
                <option key={"nitro"} value={"nitro"}>Nitrógeno</option>
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
                value={periodDate}
                onChange={handlePeriodChange}
                inputProps={{
                  name: 'period',
                  id: 'uncontrolled-native',
                }}
              >
                <option key={0} value={0}>Última Inmersión</option> {/*ULTIMA INMERSION*/}
                <option key={7} value={7}>Últimos 7 días</option> {/*ULTIMOS 7 DIAS*/}
                <option key={30} value={30}>Últimos 30 días</option> {/*ULTIMOS 30 DIAS*/}
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
            Compañía: {infoBuzos.company}
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
            <LineChart width={1000} height={600} data={dataGraph}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={metricName} stroke="#8884d8" />
              <Area type="monotone" dataKey={metricName} fill="#8884d8" fillOpacity={0.9} />
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
      {/* <Grid item xs={12}>
        {infoBuzos && infoBuzos.length > 0 ? (
          <div>
            <Typography variant="h4" sx={{ color: "black" }}>
              Info de Buzos:
            </Typography>
            <ul>
              {infoBuzos.map((buzo, id) => (
                <li key={id}>{buzo.name_buzo}</li>
              ))}
              {infoBuzos.map((buzo, id) => (
                <li key={id}>{buzo._id_buzo}</li>
              ))}
            </ul>
          </div>
        ) : (
          <Typography variant="h6" sx={{ color: "black" }}>
            No hay buzos disponibles.
            {periodDate}
          </Typography>
        )}
      </Grid> */}
    </Grid>
  );
}

